---
id: unmanaged-cluster-setup
title: "Unmanaged cluster setup"
sidebar_label: 'Unmanaged cluster setup'
sidebar_position: 2
tags:
  - Unmanaged
  - Initial setup
  - setup
---
# Unmanaged Cluster setup

Deploy the basic cluster setup with a single shell script. 

In order to deploy the cluster via this script [Kubeclt](https://kubernetes.io/docs/tasks/tools/) and [Helm](https://helm.sh/docs/intro/install/) must be installed

This script will deploy the following 



- Nginx load reverse proxy
- Load Balancer for the cluster
- Cert-Manager
- Cluster issuer 
- Config maps (empty) for udp and tcp services

```sh
curl -sL https://raw.githubusercontent.com/nimbit-software/cluster-docs/master/static/bash/unmanaged.sh | bash        
```