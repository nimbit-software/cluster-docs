---
id: argocd-getting-started
title: Getting started
sidebar_label: 'Getting started'
sidebar_position: 2
tags:
  - Argocd
---

# Getting Started

To be able to interact with argocd in the cluster we need to install the argocd cli. For that we can once again use Chocolaty 

```bash title=Argocd cli
choco install argocd-cli
```

When using argocd for the first time or when switching clusters we need to login. 

If we are not using an Ingress we will either have to forward the port using port-forward or we can change the service type to load balancer. 

:::info
If you have not set a new admin password for argocd then the password is stored in a secret called argocd-secret we can get the password using kubectl:

```bash 
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath={.data.password} | base64 -d; echo
```

Or we can store it in a variable to be used when logging in 

```bash 
export ARGO_PWD=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath={.data.password} | base64 -d;
 echo)
```
:::


With our password we can now login

```bash title=login 
# For our first login we will us the username admin
export ARGO_HOST=argocd.azure.nimbit.de

argocd login $ARGO_HOST --name=admin --password=$ARGO_PWD
```

Now we can take a look at what argo can do: 
```bash
argocd --help

argocd controls a Argo CD server

Usage:
  argocd [flags]
  argocd [command]

Available Commands:
  account     Manage account settings
  admin       Contains a set of commands useful for Argo CD administrators and requires direct Kubernetes access
  app         Manage applications
  appset      Manage ApplicationSets
  cert        Manage repository certificates and SSH known hosts entries
  cluster     Manage cluster credentials
  completion  output shell completion code for the specified shell (bash or zsh)
  context     Switch between contexts
  gpg         Manage GPG keys used for signature verification
  help        Help about any command
  login       Log in to Argo CD
  logout      Log out from Argo CD
  proj        Manage projects
  relogin     Refresh an expired authenticate token
  repo        Manage repository connection parameters
  repocreds   Manage repository connection parameters
  version     Print version information

Flags:
      --auth-token string               Authentication token
      --client-crt string               Client certificate file
      --client-crt-key string           Client certificate key file
      --config string                   Path to Argo CD config (default C:\\Users\\sooter/.config/argocd/config)
      --core                            If set to true then CLI talks directly to Kubernetes instead of talking to Argo CD API server
      --grpc-web                        Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2.
      --grpc-web-root-path string       Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2. Set web root.
  -H, --header strings                  Sets additional header to all requests made by Argo CD CLI. (Can be repeated multiple times to add multiple headers, also supports comma separated headers)
  -h, --help                            help for argocd
      --http-retry-max int              Maximum number of retries to establish http connection to Argo CD server
      --insecure                        Skip server certificate and domain verification
      --kube-context string             Directs the command to the given kube-context
      --logformat string                Set the logging format. One of: text|json (default text)
      --loglevel string                 Set the logging level. One of: debug|info|warn|error (default info)
      --plaintext                       Disable TLS
      --port-forward                    Connect to a random argocd-server port using port forwarding
      --port-forward-namespace string   Namespace name which should be used for port forwarding
      --server string                   Argo CD server address
      --server-crt string               Server certificate file

Use argocd [command] --help for more information about a command.
```


### Clusters

For most of the argocd features we can use the UI there are however a few features that require us to use the CLI (at the time of writing this doc), one of those features is **clusters**

Defining a cluster allows us to manage apps on an external cluster. Argocd can then monitor that cluster and deploy apps as needed without having to be installed on that cluster. 


Adding a cluster to argocd is very simple. The main requirement is that the cluster already exists in your current kubectl context 

If you installed kubectx you can view all your contexts by running: 
```bash
kubectx
```

After having identified the cluster you would like to add to argocd you and add it by simply running:
```bash 
argocd cluster add <cluster name>
```

You can now deploy apps to this remote cluster using argocd


### Repos

In order to be able to access our git config we have to add a repository. Argocd will the poll this repository for changes and then apply them to the cluster. 

To add a new repository we can either use the UI or run:

```bash 
export GIT_REPO=<my git repository
export GIT_USERNAME=<username>
export GIT_PASSWORD=<password>

argocd repo add $GIT_REPO --username $GIT_USERNAME --password $GIT_PASSWORD
```


### Projects 
While it is possible to use the default project for all apps. It is much better practice to have at least one Project per Cluster. 

That way we can even define roles etc per project 




:::info
Here is an example config for a project. Alternatively you can use the UI to create the project. 

The example used wildcards for the whitelist but in a productive scenario it should be limited to a specific destination
:::

```bash title=Create Project

export PROJECT_NAME=my-project
export PROJECT_DESC=My project description
export PROJECT_SERVER=https://kubernetes.default.svc
export PROJECT_SOURCE_REPO=https://davidsooter@bitbucket.org/nimbit-iot/cluster-content.git

kubectl apply -f - <<EOF
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: $PROJECT_NAME
  namespace: argocd
  # Finalizer that ensures that project is not deleted until it is not referenced by any application
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  # Project description
  description: $PROJECT_DESC

  # Allow manifests to deploy from any Git repos
  sourceRepos:
  - '$PROJECT_SOURCE_REPO'

  # Only permit applications to deploy to the guestbook namespace in the same cluster
  destinations:
  - name: '*'
    namespace: '*'
    server: $PROJECT_SERVER

  # Deny all cluster-scoped resources from being created, except for Namespace
  clusterResourceWhitelist:
  - group: '*'
    kind: '*'

  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy
  namespaceResourceBlacklist:
  - group: ''
    kind: ResourceQuota
  - group: ''
    kind: LimitRange
  - group: ''
    kind: NetworkPolicy

  # Deny all namespaced-scoped resources from being created, except for Deployment and StatefulSet
  namespaceResourceWhitelist:
  - group: 'apps'
    kind: Deployment
  - group: 'apps'
    kind: StatefulSet

  # Enables namespace orphaned resource monitoring.
  orphanedResources:
    warn: true

  roles:
  # A role which provides read-only access to all applications in the project
  - name: read-only
    description: Read-only privileges to $PROJECT_NAME
    policies:
    - p, proj:$PROJECT_NAME:read-only, applications, get, $PROJECT_NAME/*, allow
    groups:
    - my-oidc-group

  # A role which provides sync privileges to only the guestbook-dev application, e.g. to provide
  # sync privileges to a CI system
  - name: ci-role
    description: Sync privileges for guestbook-dev
    policies:
    - p, proj:$PROJECT_NAME:ci-role, applications, sync, $PROJECT_NAME/guestbook-dev, allow

    # NOTE: JWT tokens can only be generated by the API server and the token is not persisted
    # anywhere by Argo CD. It can be prematurely revoked by removing the entry from this list.
    jwtTokens:
    - iat: 1535390316

  # Sync windows restrict when Applications may be synced. https://argo-cd.readthedocs.io/en/stable/user-guide/sync_windows/
  # syncWindows:
  # - kind: allow
  #   schedule: '10 1 * * *'
  #   duration: 1h
  #   applications:
  #     - '*-prod'
  #   manualSync: true
  # - kind: deny
  #   schedule: '0 22 * * *'
  #   duration: 1h
  #   namespaces:
  #     - default
  # - kind: allow
  #   schedule: '0 23 * * *'
  #   duration: 1h
  #   clusters:
  #     - in-cluster
  #     - cluster1
EOF

```


## Kustomized Helm 

```bash 
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-cm
  namespace: argocd
  labels:
    app.kubernetes.io/part-of: argocd
data:
  configManagementPlugins: |
    - name: kustomized-helm
      init:
        command: [/bin/sh, -c]
        args: [helm dependency build || true]
      generate:
        command: [/bin/sh, -c]
        args: [helm template . --name-template $ARGOCD_APP_NAME --namespace $ARGOCD_APP_NAMESPACE --include-crds > all.yaml && kustomize build]
EOF

```

