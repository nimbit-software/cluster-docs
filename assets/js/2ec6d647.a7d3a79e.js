"use strict";(self.webpackChunkcluster_docs=self.webpackChunkcluster_docs||[]).push([[672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==N&&(O(t),T(a),null!=h&&w(h,String(a)))},K=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:K,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},2615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const s={id:"kube-tools",title:"Kube Tools",sidebar_label:"Kube Tools",sidebar_position:1,tags:["Kubernetes","setup"]},i="Kube Tools",u={unversionedId:"setup/kube-tools",id:"setup/kube-tools",title:"Kube Tools",description:"For the most part everything we are gonna do is independent of the cluster provider.",source:"@site/docs/setup/kube-tools.mdx",sourceDirName:"setup",slug:"/setup/kube-tools",permalink:"/cluster-docs/docs/setup/kube-tools",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/kube-tools.mdx",tags:[{label:"Kubernetes",permalink:"/cluster-docs/docs/tags/kubernetes"},{label:"setup",permalink:"/cluster-docs/docs/tags/setup"}],version:"current",sidebarPosition:1,frontMatter:{id:"kube-tools",title:"Kube Tools",sidebar_label:"Kube Tools",sidebar_position:1,tags:["Kubernetes","setup"]},sidebar:"clusterDocs",previous:{title:"Setup",permalink:"/cluster-docs/docs/category/setup"},next:{title:"Docker",permalink:"/cluster-docs/docs/setup/docker"}},c={},p=[{value:"Minikube",id:"minikube",level:2},{value:"Hyper-V (For windows users)",id:"hyper-v-for-windows-users",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Cheat sheet",id:"cheat-sheet",level:3},{value:"Kubectl",id:"kubectl",level:2},{value:"Installation",id:"installation",level:3},{value:"Kube tools",id:"kube-tools-1",level:2},{value:"Krew",id:"krew",level:3},{value:"Kubectx and Kubens",id:"kubectx-and-kubens",level:3},{value:"K9s",id:"k9s",level:3},{value:"Helm",id:"helm",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kube-tools"},"Kube Tools"),(0,l.kt)("p",null,"For the most part everything we are gonna do is independent of the cluster provider. "),(0,l.kt)("p",null,"The best way to get started in so use minikube on you local pc to try out different kubernetes features. "),(0,l.kt)("h2",{id:"minikube"},"Minikube"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube")," provides the user with a nearly full featured kubernetes cluster running on a vm on your local machine. "),(0,l.kt)("p",null,"Its possible to use different vms with minikube but the most simple with windows is the integrated Hyper-V virtual machine. "),(0,l.kt)("p",null,"You can fine the official install documentation from minikube here ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install minikube")," "),(0,l.kt)("h3",{id:"hyper-v-for-windows-users"},"Hyper-V (For windows users)"),(0,l.kt)("p",null,"For windows users we can set Hyper-V as the default driver for minikube."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"minikube config set driver hyperv\n")),(0,l.kt)("p",null,"Or you can simply start minikube with hyper-v"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:'language-sh"'},"minikube start --driver=hyperv \n")),(0,l.kt)("h3",{id:"dashboard"},"Dashboard"),(0,l.kt)("p",null,"Minikube comes kube dashboard installed out of the box as a service it makes interacting with the cluster easier via a graphical interface. "),(0,l.kt)("p",null,"You can start it using. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"minikube dashboard\n")),(0,l.kt)("h3",{id:"cheat-sheet"},"Cheat sheet"),(0,l.kt)("p",null,"Here are you most useful minikube commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# Start minikube\nminikube start\n\n# Stop minikube \nminikube stop \n\n# Pause Cluster\nminikube pause\n\n# Unpause cluster\nminikube unpause\n\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"kubectl"},"Kubectl"),(0,l.kt)("p",null,"Your most important tool for interacting with your kubernetes cluster is kubectl. It allows you to interact with the kubernetes api via the command line and is essential when deploying apps to you cluster or interacting with the cluster in general. "),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"The easiest way to install kubectl on a windows machine is via Chocolatey(choco). "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you don't have choco installed, simply open powershell as and administrator and enter the following. "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) \n")),(0,l.kt)("p",{parentName:"admonition"},"To test that the installation was successful simply enter ",(0,l.kt)("strong",{parentName:"p"},"choco"))),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Choco",label:"Choco",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"choco install kubernetes-cli\n")),(0,l.kt)("p",null,"You can test the installation by running ",(0,l.kt)("strong",{parentName:"p"},"kubeclt")))),(0,l.kt)("p",null,"For auto complete in power-shell you can also run the following in power-shell "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=powershell",title:"powershell"},"kubectl completion powershell | Out-String | Invoke-Expression\n")),(0,l.kt)("h2",{id:"kube-tools-1"},"Kube tools"),(0,l.kt)("p",null,"Here are some of my favorite kubernetes tools that can make you life easier especially when dealing with\nmultiple clusters."),(0,l.kt)("h3",{id:"krew"},"Krew"),(0,l.kt)("p",null,"Krew is a great tool for managing and installing kubectl plugins.\nYou can find the installation information ",(0,l.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/#windows"},"here")),(0,l.kt)("p",null,"After having installed Krew here are a few useful plugins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cert-manager"),(0,l.kt)("li",{parentName:"ul"},"get-all"),(0,l.kt)("li",{parentName:"ul"},"ingress-nginx"),(0,l.kt)("li",{parentName:"ul"},"config-cleanup"),(0,l.kt)("li",{parentName:"ul"},"doctor"),(0,l.kt)("li",{parentName:"ul"},"multiforward"),(0,l.kt)("li",{parentName:"ul"},"deprecations")),(0,l.kt)("p",null,"Each of the plugins can be installed using the cli "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl krew install <plugin>\n\n# Example\nkubectl krew install get-all\n")),(0,l.kt)("h3",{id:"kubectx-and-kubens"},"Kubectx and Kubens"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ahmetb/kubectx"},"Kubectx")," is a great tool for managing the current context\nand allows you to quickly switch between kubernetes contexts."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kubens")," on the other hand allows you to quickly switch between namespaces without having to add the namespace with every command"),(0,l.kt)("p",null,"They can easily be installed using chocolatey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"choco install kubens kubectx\n")),(0,l.kt)("h3",{id:"k9s"},"K9s"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/derailed/k9s"},"K9s")," offers a different type of interface for\ninteracting with you cluster. It offers a terminal UI that you can use to easily navigate\nyour cluster and perform actions."),(0,l.kt)("p",null,"For more details please view the github page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"choco install k9s\n")),(0,l.kt)("h2",{id:"helm"},"Helm"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package manager for kubernetes and allows us to deploy apps as a complete\nbundle using a template mechanism. This allows us to easily adapt all aspects of the app\nto different customers simply by making changes to a values.yaml file"),(0,l.kt)("p",null,"The simplest way to install helm is once again with Chocolatey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"choco install kubernetes-helm\n")))}m.isMDXComponent=!0}}]);