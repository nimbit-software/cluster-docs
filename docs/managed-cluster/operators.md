---
id: operators
title: "Operators"
sidebar_label: 'Operators'
sidebar_position: 3
tags:
  - Operators
  - Kubernetes Operators
  - Redis
  - Postgres
  - Redis
  - Keycloak
---
# Operators


For organizational purposes we want to have our operators running in a single namespace and managing apps in other namespaces. 

```bash title="create operator namespace"
kubectl create namespace operators
```

:::warning
Please note that all version described here are subject to changes. Please verify if the version described here coincides with the desired version.
:::


## PGO Operator (Crunchy Data) 5.2.0

The Crunchy data operator or [PGO](https://access.crunchydata.com/documentation/postgres-operator/v5/) is a postgres operator that allows us to easily create and manage postgres instances. 

PGO has already been forked for you and all we need to do is download the repository and run the predefined coding. 

```bash title="download repo"
git clone https://github.com/nimbit-software/crunch-data-pgo.git

cd crunch-data-pgo
```

Once in the repository we can execute the kustomize command to set up the operator.

```bash title="set up operator"
# only needed if the namespace was not yet created
kubectl apply -k kustomize/install/namespace  
kubectl apply --server-side -k kustomize/install/default
```

This will create a namespace called operators (if not exists) and create all of the objects required to deploy PGO.

To check on the status of your installation, you can run the following command:

```bash
kubectl -n operators get pods \
  --selector=postgres-operator.crunchydata.com/control-plane=postgres-operator \
  --field-selector=status.phase=Running
```

If the PGO Pod is healthy, you should see output similar to:
```bash
NAME                                READY   STATUS    RESTARTS   AGE
postgres-operator-9dd545d64-t4h8d   1/1     Running   0          3s
```

Before creating a postgres cluster we will first create the other operators. All the PGO docs can be found [here](https://access.crunchydata.com/documentation/postgres-operator/v5/quickstart/)



## Keycloak Operator V20

The keycloak operators allows us to manage keycloak instances. It will spin up and monitor all the resources need for the keycloak environment. 

To install the operator on a Kubernetes cluster, you first need to install its CRDs by running the following commands:

```bash title="Keycloak CRD"
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/20.0.0/kubernetes/keycloaks.k8s.keycloak.org-v1.yml

kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/20.0.0/kubernetes/keycloakrealmimports.k8s.keycloak.org-v1.yml
```

Now that we have the CRDs defined lets start setup the operator:
```bash 
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/20.0.0/kubernetes/kubernetes.yml -n operators
```

Now let verify its running: 
```bash 
kubectl -n operators get pods   --selector=app.kubernetes.io/name=keycloak-operator   --field-selector=status.phase=Ru
nning
```

You should see something like: 
```bash 
NAME                                READY   STATUS    RESTARTS   AGE
keycloak-operator-fdc587f46-k5tlj   1/1     Running   0          105s
nning
```
Great we got that one going now lets move on to the next one

## Redis

Redis our wonderful cache engine. Where would we be without it. I don't want to know. Lets get the operator running. 

Thankfully we can you helm for that: 
```bash title=Redis
helm repo add ot-helm https://ot-container-kit.github.io/helm-charts/

helm upgrade redis-operator ot-helm/redis-operator \
    --install --namespace operators

```

And now for our check: 
```bash 
kubectl -n operators get pods  -l name=redis-operator   --field-selector=status.phase=Running
```

And we should expect to see something like:
```bash
NAME                              READY   STATUS    RESTARTS   AGE
redis-operator-7899446668-vjddp   1/1     Running   0          5m5s
```

## Closing


We are all set up. If you get stuck please refer to the official docs provided by the different operator providers

- [Postgres Operator](https://access.crunchydata.com/documentation/postgres-operator/v5/)
- [Keycloak](https://www.keycloak.org/guides#operator)
- [Redis](https://ot-container-kit.github.io/redis-operator/)