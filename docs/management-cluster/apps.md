---
id: mc-managed
title: Apps
sidebar_label: 'Apps'
sidebar_position: 2
tags:
  - Getting started
---

# Apps
The management cluster starts with the same setup as the [managed cluster](/docs/cluster/managed-cluster-setup) and then we proceed to add additional apps

## Rancher

Lets install rancher:

Thankfully we can use helm. Lets add the repos 
```bash 
helm repo add rancher-stable https://releases.rancher.com/server-charts/stable

helm repo update
```

Next lets create the namespace: 
```bash title="create namespace"
kubectl create namespace cattle-system
```


And finally we can install Rancher:

:::warning
It is recommended to to setup the DNS AAA records before setting up rancher that way the cert manager can setup the certificates needed. 

It is possible to set it up on a later step but it is definitely more work. 

Further details for the install can be found [here](https://docs.ranchermanager.rancher.io/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster)
:::



```bash title"rancher setup"
# THESE ARE THE RECOMMENDED VALUES. BUT CAN BE ADAPTED AS NEEDED
export RANCHER_VERSION=2.6.9
export RANCHER_HOST=myhost.com
export RANCHER_LE_EMAIL=iot@nimbit.de
export RANCHER_CHART_REPO=stable


helm install rancher rancher-$RANCHER_CHART_REPO/rancher \
  --namespace cattle-system \
  --set hostname=$RANCHER_HOST \
  --set replicas=3 \
  --version=$RANCHER_VERSION \
  --set ingress.tls.source=letsEncrypt \
  --set letsEncrypt.email=$RANCHER_LE_EMAIL \
  --set letsEncrypt.ingress.class=nginx \
  --set ingress.ingressClassName=nginx \
  --set ingress.extraAnnotations.'kubernetes\.io/ingress\.class'=nginx
```


Now we can wait for it to be rolled out:
```bash 
kubectl -n cattle-system rollout status deploy/rancher
```

After the rollout is finished you can run this to verify the system is running: 
```bash 
kubectl -n cattle-system get deploy rancher
```

You should see something like: 
```bash 
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
rancher   3         3         3            3           3m
```

### Finishing Up
You should now be able to go over to you web browser and open the url you defined as the **host** url and get started with rancher. 

If this is the initial setup you will be requested to create a new password. 


## ArgoCD

Getting argocd up and running is very straight-forward

```bash title="Create namespace"
# CREATE NAMESPACE
kubectl create namespace argocd
```

Install last stable version 
```bash title="Setup Argocd"
# Install stable
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

:::info
If we want to make argocd accessible from outside the cluster then we need to create an ingress for argocd

```bash title=ingress
# HOST (DNS NAME) should be set here
export HOST=argocd.azure.nimbit.de

kubectl apply -f - <<EOF
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: tls-argocd-secret
  namespace: argocd
spec:
  secretName: tls-argocd-secret
  issuerRef:
    kind: ClusterIssuer
    name: le-clusterissuer
  commonName: $HOST
  dnsNames:
    - $HOST
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: argocd-server-ingress
  namespace: argocd
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    kubernetes.io/ingress.class: nginx
    kubernetes.io/tls-acme: "true"
    nginx.ingress.kubernetes.io/ssl-passthrough: "true"
    # If you encounter a redirect loop or are getting a 307 response code
    # then you need to force the nginx ingress to connect to the backend using HTTPS.
    #
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
spec:
  rules:
  - host: $HOST
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: argocd-server
            port:
              name: https
  tls:
  - hosts:
    - $HOST
    secretName: tls-argocd-secret 
EOF

```
:::


## Monitoring 

Monitoring can be setup via Rancher. For detailed documentation on how to use the rancher monitoring see [Rancher Monitoring](https://docs.ranchermanager.rancher.io/pages-for-subheaders/monitoring-and-alerting)
