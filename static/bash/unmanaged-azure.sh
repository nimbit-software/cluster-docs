#!/bin/bash
# REVERSE PROXY NGINX

echo "Deploying cluster"


echo "Deploying Nginx via helm charts"
kubectl apply -f kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.4.0/deploy/static/provider/cloud/deploy.yaml

echo "Scaling replicas to nginx 2"
kubectl scale --replicas=2 deployment ingress-nginx-controller -n ingress-nginx

# AZURE SPECIFIC PATCHES



# UPDATA REPOS 

helm repo add jetstack https://charts.jetstack.io
helm repo update

# INSTALL CERT MANAGER
echo "Installing cert manager"
helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.10.0  --create-namespace --set installCRDs=true


echo "Create cluter issuer"

kubectl apply -f - <<EOF
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: le-clusterissuer
  namespace: cert-manager
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: iot@nimbit.de
    privateKeySecretRef:
      name: le-clusterissuer
    solvers:
    - http01:
        ingress:
          class:  nginx
EOF


echo "Creating config map for upd-services"

kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: udp-services
  namespace: ingress-nginx
EOF


echo "Creating config map for tcp-services"

kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: tcp-services
  namespace: ingress-nginx
EOF


echo "Creating storage-classes with retain policy"

kubectl apply -f - <<EOF
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: managed-csi-premium-retain
allowVolumeExpansion: true
parameters:
  skuname: Premium_LRS
provisioner: disk.csi.azure.com
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: managed-csi-retain
allowVolumeExpansion: true
parameters:
  skuname: StandardSSD_LRS
provisioner: disk.csi.azure.com
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer


EOF
