"use strict";(self.webpackChunkcluster_docs=self.webpackChunkcluster_docs||[]).push([[672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:d,groupId:b,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==N&&(O(t),T(n),null!=b&&w(b,String(n)))},K=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:K,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},2615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const s={id:"kube-tools",title:"Kube Tools",sidebar_label:"Kube Tools",sidebar_position:1,tags:["Kubernetes","setup"]},i="Kube Tools",u={unversionedId:"setup/kube-tools",id:"setup/kube-tools",title:"Kube Tools",description:"For the most part everything we are gonna do is independent of the cluster provider.",source:"@site/docs/setup/kube-tools.mdx",sourceDirName:"setup",slug:"/setup/kube-tools",permalink:"/cluster-docs/docs/setup/kube-tools",draft:!1,editUrl:"https://github.com/nimbit-software/cluster-docs/blob/master/docs/setup/kube-tools.mdx",tags:[{label:"Kubernetes",permalink:"/cluster-docs/docs/tags/kubernetes"},{label:"setup",permalink:"/cluster-docs/docs/tags/setup"}],version:"current",sidebarPosition:1,frontMatter:{id:"kube-tools",title:"Kube Tools",sidebar_label:"Kube Tools",sidebar_position:1,tags:["Kubernetes","setup"]},sidebar:"clusterDocs",previous:{title:"Setup",permalink:"/cluster-docs/docs/category/setup"},next:{title:"Docker",permalink:"/cluster-docs/docs/setup/docker"}},c={},p=[{value:"Minikube",id:"minikube",level:2},{value:"Hyper-V (For windows users)",id:"hyper-v-for-windows-users",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Cheat sheet",id:"cheat-sheet",level:3},{value:"Kubectl",id:"kubectl",level:2},{value:"Installation",id:"installation",level:3},{value:"Kube tools",id:"kube-tools-1",level:2},{value:"Krew",id:"krew",level:3},{value:"Kubectx and Kubens",id:"kubectx-and-kubens",level:3},{value:"K9s",id:"k9s",level:3},{value:"Helm",id:"helm",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kube-tools"},"Kube Tools"),(0,l.kt)("p",null,"For the most part everything we are gonna do is independent of the cluster provider. "),(0,l.kt)("p",null,"The best way to get started in so use minikube on you local pc to try out different kubernetes features. "),(0,l.kt)("h2",{id:"minikube"},"Minikube"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube")," provides the user with a nearly full featured kubernetes cluster running on a vm on your local machine. "),(0,l.kt)("p",null,"Its possible to use different vms with minikube but the most simple with windows is the integrated Hyper-V virtual machine. "),(0,l.kt)("p",null,"You can fine the official install documentation from minikube here ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install minikube")," "),(0,l.kt)("h3",{id:"hyper-v-for-windows-users"},"Hyper-V (For windows users)"),(0,l.kt)("p",null,"For windows users we can set Hyper-V as the default driver for minikube."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube config set driver hyperv\n")),(0,l.kt)("p",null,"Or you can simply start minikube with hyper-v"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:'language-bash"'},"minikube start --driver=hyperv \n")),(0,l.kt)("h3",{id:"dashboard"},"Dashboard"),(0,l.kt)("p",null,"Minikube comes kube dashboard installed out of the box as a service it makes interacting with the cluster easier via a graphical interface. "),(0,l.kt)("p",null,"You can start it using. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube dashboard\n")),(0,l.kt)("h3",{id:"cheat-sheet"},"Cheat sheet"),(0,l.kt)("p",null,"Here are you most useful minikube commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Start minikube\nminikube start\n\n# Stop minikube \nminikube stop \n\n# Pause Cluster\nminikube pause\n\n# Unpause cluster\nminikube unpause\n\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"kubectl"},"Kubectl"),(0,l.kt)("p",null,"Your most important tool for interacting with your kubernetes cluster is kubectl. It allows you to interact with the kubernetes api via the command line and is essential when deploying apps to you cluster or interacting with the cluster in general. "),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"The easiest way to install kubectl on a windows machine is via Chocolatey(choco). "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you don't have choco installed, simply open powershell as and administrator and enter the following. "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) \n")),(0,l.kt)("p",{parentName:"admonition"},"To test that the installation was successful simply enter ",(0,l.kt)("strong",{parentName:"p"},"choco"))),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Choco",label:"Choco",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install kubernetes-cli\n")),(0,l.kt)("p",null,"You can test the installation by running ",(0,l.kt)("strong",{parentName:"p"},"kubeclt")))),(0,l.kt)("p",null,"For auto complete in power-shell you can also run the following in power-shell "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=powershell",title:"powershell"},"kubectl completion powershell | Out-String | Invoke-Expression\n")),(0,l.kt)("h2",{id:"kube-tools-1"},"Kube tools"),(0,l.kt)("p",null,"Here are some of my favorite kubernetes tools that can make you life easier especially when dealing with\nmultiple clusters."),(0,l.kt)("h3",{id:"krew"},"Krew"),(0,l.kt)("p",null,"Krew is a great tool for managing and installing kubectl plugins.\nYou can find the installation information ",(0,l.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/#windows"},"here")),(0,l.kt)("p",null,"After having installed Krew here are a few useful plugins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cert-manager"),(0,l.kt)("li",{parentName:"ul"},"get-all"),(0,l.kt)("li",{parentName:"ul"},"ingress-nginx"),(0,l.kt)("li",{parentName:"ul"},"config-cleanup"),(0,l.kt)("li",{parentName:"ul"},"doctor"),(0,l.kt)("li",{parentName:"ul"},"multiforward"),(0,l.kt)("li",{parentName:"ul"},"deprecations")),(0,l.kt)("p",null,"Each of the plugins can be installed using the cli "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl krew install <plugin>\n\n# Example\nkubectl krew install get-all\n")),(0,l.kt)("h3",{id:"kubectx-and-kubens"},"Kubectx and Kubens"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ahmetb/kubectx"},"Kubectx")," is a great tool for managing the current context\nand allows you to quickly switch between kubernetes contexts."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kubens")," on the other hand allows you to quickly switch between namespaces without having to add the namespace with every command"),(0,l.kt)("p",null,"They can easily be installed using chocolatey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install kubens kubectx\n")),(0,l.kt)("h3",{id:"k9s"},"K9s"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/derailed/k9s"},"K9s")," offers a different type of interface for\ninteracting with you cluster. It offers a terminal UI that you can use to easily navigate\nyour cluster and perform actions."),(0,l.kt)("p",null,"For more details please view the github page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install k9s\n")),(0,l.kt)("h2",{id:"helm"},"Helm"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package manager for kubernetes and allows us to deploy apps as a complete\nbundle using a template mechanism. This allows us to easily adapt all aspects of the app\nto different customers simply by making changes to a values.yaml file"),(0,l.kt)("p",null,"The simplest way to install helm is once again with Chocolatey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install kubernetes-helm\n")))}d.isMDXComponent=!0}}]);