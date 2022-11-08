---
id: mc-overview
title: Overview
sidebar_label: 'Overview'
sidebar_position: 1
tags:
  - Getting started
---

# Overview

The management cluster is responsible for deploying clusters applications and services on other clusters and keeping an eye on them to make sure everything is running as it should. 

There are a number of tools that help us perform these tasks and we will look at the ones relevant for us. 

## Rancher 
 
[Rancher](https://www.rancher.com/), the open-source multi-cluster orchestration platform, lets operations teams deploy, manage and secure enterprise Kubernetes. 

We have the ability to create, deploy, and monitor kubernetes clusters using a central tool. 

Rancher also offer a lot of plugins and integrations to other systems. 

We can also deploy management tools to monitor remote clusters. 

## Argocd 

[Argocd](https://argo-cd.readthedocs.io/en/stable/) is a gitops tool that can be used to deploy and development more details can be found [here](docs/argocd/argocd-overview)

## Monitoring

Rancher offers basic cluster monitoring using prometheus and grafana.
These monitoring features will be added to the cluster.