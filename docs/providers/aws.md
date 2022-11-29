---
id: providers-aws
title: AWS
sidebar_label: 'AWS'
sidebar_position: 2
tags:
  - AWS
---


# AWS


## Cluster access 

### Install aws cli 

In order to be able to import he cluster config we need to install the cli

```bash title='aws cli'
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```


Then we can login to the aws cli 
``` bash 
# we need the following 
# AWS ACCESS KEY ID 
# AWS ACCESS KEY SECRET
# REGION
# OUTPUT FORMAT: You can choose json 



aws configure

aws sts get-caller-identity
```


Then we can import the different config details into our .kube/config file 
```bash
aws eks --region <region> update-kubeconfig --name <cluster-name>
```

:::info 
You can **rename your contexts** for better readabillity by using 
```bash 
# CHANGE CONTEXT NAME
kubectl config rename-context old-name new-name 
```
:::


:::info 
If you installed **kubectx** you can now view the your context using 
```bash 
# LIST CLUSTERS
kubectx 
```
:::


## Creating a cluster

The most efficient way to create a cluster is to use the eksctl tool 

And we can use choco to install it 
```bash title="install eksctl"
choco install -y eksctl 
```

Now with that installed we can create our cluster. 
This command will create a new cluster with all the needed node groups.

```bash title="create cluster"
# This can be adapted as needed for more details see the help
# eksctl --help 


eksctl create cluster \
    --name admin \ 
    --region eu-central-1 \
    --version 1.23 \ 
    --nodegroup-name admin \
    --node-type t3.large \
    --nodes 3
```


## Routing

:::warning
Unlike other clusters AWS create a public DNS name and not an IP this requires us to handle routing into the cluster slightly different. 

**Steps**

1. **DNS setting**: In you dns provider we need to create a cname entry to forward the request coming in to a specific dns name to the AWS dns 
2. **Route 53**: In Aws Navigate to the Route 53 service and under hosted zones we need to add our domain as a hosted zone. It is enough to define the root dns name  
:::
