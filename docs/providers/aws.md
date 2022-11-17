---
id: providers-aws
title: AWS
sidebar_label: 'AWS'
sidebar_position: 1
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
If you installed **kubectx** you can now view the your context using 
```bash 
# LIST CLUSTERS
kubectx 
```
:::
