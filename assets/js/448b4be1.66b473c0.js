"use strict";(self.webpackChunkcluster_docs=self.webpackChunkcluster_docs||[]).push([[9497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(g,s(s({ref:t},i),{},{components:a})):n.createElement(g,s({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(7392),u=a(7094),c=a(2466);const i="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:m,groupId:g,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[N,O]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==N&&(x(t),O(n),null!=g&&w(g,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:E},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},7024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162);const o={id:"managed-cluster-setup",title:"Managed cluster setup",sidebar_label:"Managed cluster setup",sidebar_position:1,tags:["managed","Initial setup","setup"]},u="Managed Cluster setup",c={unversionedId:"cluster/managed-cluster-setup",id:"cluster/managed-cluster-setup",title:"Managed cluster setup",description:"The managed cluster setup offers a step-by-step setup for a new kubernetes cluster.",source:"@site/docs/cluster/managed-setup.mdx",sourceDirName:"cluster",slug:"/cluster/managed-cluster-setup",permalink:"/cluster-docs/docs/cluster/managed-cluster-setup",draft:!1,editUrl:"https://github.com/nimbit-software/cluster-docs/blob/master/docs/cluster/managed-setup.mdx",tags:[{label:"managed",permalink:"/cluster-docs/docs/tags/managed"},{label:"Initial setup",permalink:"/cluster-docs/docs/tags/initial-setup"},{label:"setup",permalink:"/cluster-docs/docs/tags/setup"}],version:"current",sidebarPosition:1,frontMatter:{id:"managed-cluster-setup",title:"Managed cluster setup",sidebar_label:"Managed cluster setup",sidebar_position:1,tags:["managed","Initial setup","setup"]},sidebar:"clusterDocs",previous:{title:"Cluster",permalink:"/cluster-docs/docs/category/cluster"},next:{title:"Unmanaged cluster setup",permalink:"/cluster-docs/docs/cluster/unmanaged-cluster-setup"}},i={},p=[{value:"Nginx &amp; Load Balancer v1.5.1",id:"nginx--load-balancer-v151",level:2},{value:"Cert Manager",id:"cert-manager",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managed-cluster-setup"},"Managed Cluster setup"),(0,r.kt)("p",null,"The managed cluster setup offers a step-by-step setup for a new kubernetes cluster. "),(0,r.kt)("p",null,"Ideally the clusters should be managed by ",(0,r.kt)("strong",{parentName:"p"},"argocd")," but there is still some initial setup to be done to allow the cluster to communicate with the outside world. "),(0,r.kt)("p",null,"We assume that you already have the cluster of you choice set up. To make sure you are using a fresh cluster run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeclt get namespaces\n")),(0,r.kt)("p",null,"The output should look like this "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"$ kubectl get namespaces\nNAME              STATUS   AGE\ndefault           Active   138d\nkube-node-lease   Active   40m\nkube-public       Active   138d\nkube-system       Active   138d\n")),(0,r.kt)("p",null,"So now we have a clean cluster its time to get started."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nginx--load-balancer-v151"},"Nginx & Load Balancer v1.5.1"),(0,r.kt)("p",null,"Most clusters want to allow users to access at least certain parts of it from outside the cluster. While we can expose specific node ports outside the cluster, a load balancer makes the most sense and allows us to have more control over our routes in a central place. "),(0,r.kt)("p",null,"Load balancers expose the cluster to the outside world in a safe and manageable way while proving a lot of additional features"),(0,r.kt)("p",null,"While there are a few different load balancers out there we will be using the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"NGINX")," load balancer. "),(0,r.kt)("p",null,"We will be using helm to install nginx as it is the easiest way to get it up and running."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Azure",label:"Azure",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.4.0/deploy/static/provider/cloud/deploy.yaml\n"))),(0,r.kt)(s.Z,{value:"GKE",label:"GKE",default:!0,mdxType:"TabItem"},"First, your user needs to have cluster-admin permissions on the cluster. This can be done with the following command:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user $(gcloud config get-value account)\n")),(0,r.kt)("p",null,"Then, the ingress controller can be installed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user $(gcloud config get-value account)\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If we want to increase the replica count of our ingress controller this can be done by modifying the deployment."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Increase replicas"',title:'"Increase','replicas"':!0},"kubectl scale --replicas=2 deployment ingress-nginx-controller -n ingress-nginx\n"))),(0,r.kt)("p",null,"Your ingress controller and load balancer should be set up now with all the bells and whistles "),(0,r.kt)("h2",{id:"cert-manager"},"Cert Manager"),(0,r.kt)("p",null,"The cert manager is responsible for creating certificates for you apps and making sure that they are kept up to date. "),(0,r.kt)("p",null,"We will be using lets encrypt for as our certification authority.\nWe will also be using helm to deploy our cert-manager"),(0,r.kt)("p",null,"Add helm repo and update repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Add repo and update repo"',title:'"Add',repo:!0,and:!0,update:!0,'repo"':!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n")),(0,r.kt)("p",null,"Now we need to apply the custom resource definition (CRD)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.crds.yaml\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If cert-manager already exists you can remove it using "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"helm uninstall cert-manager --namespace cert-manager\n"))),(0,r.kt)("p",null,"Now let install cert manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.10.0  --create-namespace --set installCRDs=true\n\n")),(0,r.kt)("p",null,"After setting up the cert manager we need to set up a cluster issuer.\nThe cluster issuer is responsible for creating certificates in all namespaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cluster issuer"',title:'"Cluster','issuer"':!0},"kubectl apply -f - <<EOF\napiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: le-clusterissuer\n  namespace: cert-manager\nspec:\n  acme:\n    server: https://acme-v02.api.letsencrypt.org/directory\n    email: iot@nimbit.de\n    privateKeySecretRef:\n      name: le-clusterissuer\n    solvers:\n    - http01:\n        ingress:\n          class:  nginx\nEOF\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: udp-services\n  namespace: ingress-nginx\nEOF\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: tcp-services\n  namespace: ingress-nginx\nEOF\n\n")))}m.isMDXComponent=!0}}]);