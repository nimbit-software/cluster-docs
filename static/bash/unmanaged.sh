#!/bin/bash
# REVERSE PROXY NGINX

echo "Deploying cluster"


echo "Deploying Nginx via helm charts"
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
  --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-load-balancer-health-probe-request-path"=/healthz

# AZURE SPECIFIC PATCHES

echo "Applying nginx patches for azure"
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.4.0/deploy/static/provider/cloud/deploy.yaml

echo "Deploying load balancer"
kubectl apply -f - <<EOF
kind: Service
apiVersion: v1
metadata:
  name: ingress-nginx-controller
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
spec:
  type: LoadBalancer
  selector:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https      
EOF


echo "Setup cert manager"
kubectl create namespace cert-manager

# UPDATA REPOS 

helm repo add jetstack https://charts.jetstack.io
helm repo update

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.crds.yaml

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


kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: udp-services
  namespace: ingress-nginx
EOF


kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: tcp-services
  namespace: ingress-nginx
EOF
