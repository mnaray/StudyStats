"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,g=s["".concat(d,".").concat(k)]||s[k]||o[k]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"Documentation"},i=void 0,u={unversionedId:"Documentation",id:"Documentation",title:"Documentation",description:"Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.",source:"@site/docs/Documentation.md",sourceDirName:".",slug:"/Documentation",permalink:"/StudyStats/docs/Documentation",draft:!1,editUrl:"https://github.com/mnaray/StudyStats/edit/main/docs/docs/Documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Documentation"},sidebar:"tutorialSidebar",next:{title:"Instructions",permalink:"/StudyStats/docs/Instructions"}},d={},p=[{value:"Informieren",id:"informieren",level:2},{value:"Was versteht man unter React Native?",id:"was-versteht-man-unter-react-native",level:3},{value:"Was ist unser Ziel?",id:"was-ist-unser-ziel",level:3},{value:"Anforderungen",id:"anforderungen",level:3},{value:"Technologien",id:"technologien",level:3},{value:"Quellen",id:"quellen",level:3},{value:"Planen",id:"planen",level:2},{value:"Arbeitspakete",id:"arbeitspakete",level:3},{value:"Testf\xe4lle",id:"testf\xe4lle",level:3},{value:"Testumgebungen",id:"testumgebungen",level:4},{value:"Wireframes",id:"wireframes",level:3},{value:"Overview",id:"overview",level:4},{value:"Homepage",id:"homepage",level:4},{value:"Subjects",id:"subjects",level:4},{value:"All Tests",id:"all-tests",level:4}],m={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert."),(0,r.kt)("p",{parentName:"admonition"},"In diesem Projekt erstellen wir eine kleine React Native multiplatform App. Mit StudyStats soll man seine Noten tracken und managen k\xf6nnen um damit seine Noten im \xdcberblick zu haben. Unser Fokus liegt dabei auf das Arbeiten mit React Native.")),(0,r.kt)("h2",{id:"informieren"},"Informieren"),(0,r.kt)("p",null,"In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns \xfcber alles N\xf6tige informieren. Dazu geh\xf6ren die Anforderungen und die Auflistung ",(0,r.kt)("a",{parentName:"p",href:"#quellen"},(0,r.kt)("strong",{parentName:"a"},"aller verwendeten Quellen")),"."),(0,r.kt)("h3",{id:"was-versteht-man-unter-react-native"},"Was versteht man unter React Native?"),(0,r.kt)("p",null,"React Native ist ein Open-Source-Framework, das es Entwicklern erm\xf6glicht, mobile Anwendungen f\xfcr iOS und Android mit JavaScript und React zu erstellen. React Native nutzt die gleiche React-Syntax, die auch f\xfcr Webanwendungen verwendet wird, um Benutzeroberfl\xe4chen zu erstellen. Der gro\xdfe Vorteil besteht darin, dass Entwickler mit React Native plattform\xfcbergreifende mobile Apps schreiben k\xf6nnen, w\xe4hrend sie den Gro\xdfteil des Codes zwischen den verschiedenen Plattformen teilen k\xf6nnen"),(0,r.kt)("h3",{id:"was-ist-unser-ziel"},"Was ist unser Ziel?"),(0,r.kt)("p",null,"In diesem Projekt unser Ziel, eine einfache, funktionsf\xe4hige Notenapp zu entwickeln, mit der man seine Noten managen kann. Dabei liegt unser ziel auf das entwickeln einer ",(0,r.kt)("strong",{parentName:"p"},"multiplattform")," App."),(0,r.kt)("p",null,"Damit wollen wir unsere Kenntnisse in dem Modul 335: Mobile-Applikation realisieren vertiefen und uns auf die kommende Bewertung vorbereiten."),(0,r.kt)("h3",{id:"anforderungen"},"Anforderungen"),(0,r.kt)("p",null,"In der folgenden Tabelle sind die Anforderungen f\xfcr das Projekt."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Anf. Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Muss/Kann"),(0,r.kt)("th",{parentName:"tr",align:null},"Funk./Qual./Rand."),(0,r.kt)("th",{parentName:"tr",align:null},"Anforderung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktional"),(0,r.kt)("td",{parentName:"tr",align:null},"Die App muss auf mehreren Platformen laufen(React Native und TS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktional"),(0,r.kt)("td",{parentName:"tr",align:null},"Die Daten werden in der Cloud gespeichert.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktional"),(0,r.kt)("td",{parentName:"tr",align:null},"Die Authentifizierung erfolgt mit MS OAuth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Der Benutzer kann sich \xfcber das UI und die Middleware einloggen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Der Benutzer kann F\xe4cher \xfcber das UI erstellen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Der Benutzer kann Noten \xfcber das UI einf\xfcgen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Kann"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Man kann ein Bild seiner Pr\xfcfung hochladen. Mit einem Upload button \xfcbder das UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Es wird ein Notenschnitt berechnet und im UI asugegeben.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Das Ui besitzt unten zwei Felder, um die Tabs zu wechseln.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Das UI besitzt ein Logo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Das UI der Startseite hat eine Ausgabe von den F\xe4chern mit dem jeweiligen Durchschnit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Das UI der F\xe4cherpage hat eine Ausgabe von den F\xe4chern mit den jeweiligen Noten und deren Gewichtung.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Muss"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Das UI der F\xe4cherpage erm\xf6glichte es F\xe4cher und Noten nach CRUD zu bearbeiten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Kann"),(0,r.kt)("td",{parentName:"tr",align:null},"Rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Der Benutzer kann \xfcber das UI ageben, wie die Noten gewichtet werden.")))),(0,r.kt)("h3",{id:"technologien"},"Technologien"),(0,r.kt)("p",null,"F\xfcr dieses Projekt haben wir folgende Technologien verwendet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://deta.space"},"Deta Space")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"MS OAuth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev"},"React Native"))),(0,r.kt)("h3",{id:"quellen"},"Quellen"),(0,r.kt)("p",null,"Hier sind alle Quellen aufgelistet, welche w\xe4hrend dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://deta.space/docs/en"},"Deta Space Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/de/actions"},"GitHub Actions Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/getting-started"},"React Native"))),(0,r.kt)("h2",{id:"planen"},"Planen"),(0,r.kt)("h3",{id:"arbeitspakete"},"Arbeitspakete"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Frist"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"Geplante Zeit in Paketen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"9.11.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"16.11.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"23.11.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"30.11.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"1x Arbeitspaket = 45 Minuten = 1x Schullektion"),(0,r.kt)("p",{parentName:"admonition"},"1x Halbtag = 5x Arbeitspakete")),(0,r.kt)("h3",{id:"testf\xe4lle"},"Testf\xe4lle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testf.",(0,r.kt)("br",null),"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Anf.",(0,r.kt)("br",null),"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Voraussetzungen"),(0,r.kt)("th",{parentName:"tr",align:null},"Testumgebung"),(0,r.kt)("th",{parentName:"tr",align:null},"Eingabe/Aktion"),(0,r.kt)("th",{parentName:"tr",align:null},"Erw. Ausgabe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"testumgebungen"},"Testumgebungen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio Code (VSC)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: 1.78.2 (user setup)"),(0,r.kt)("li",{parentName:"ul"},"Commit: b3e4e68a0bc097f0ae7907b217c1119af9e03435"),(0,r.kt)("li",{parentName:"ul"},"Date: 2023-05-10T14:39:26.248Z"),(0,r.kt)("li",{parentName:"ul"},"Electron: 22.5.2"),(0,r.kt)("li",{parentName:"ul"},"Chromium: 108.0.5359.215"),(0,r.kt)("li",{parentName:"ul"},"Node.js: 16.17.1"),(0,r.kt)("li",{parentName:"ul"},"V8: 10.8.168.25-electron.0"),(0,r.kt)("li",{parentName:"ul"},"OS: Windows_NT x64 10.0.19045"),(0,r.kt)("li",{parentName:"ul"},"Sandboxed: Yes"))),(0,r.kt)("li",{parentName:"ul"},"Chrome (f\xfcr PDFs und Dokumentation)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: 114.0.5735.134 (Official Build) (64-bit)")))),(0,r.kt)("h3",{id:"wireframes"},"Wireframes"),(0,r.kt)("p",null,"These are the wireframes we came up with for the app. As they are only used for orientation when creating the frontend they are likely not going to make it into production the way they are seen here. Some minor changes and adjustments are to be expected."),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1181).Z,width:"3787",height:"2867"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5474).Z,width:"2468",height:"3013"})),(0,r.kt)("h4",{id:"homepage"},"Homepage"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4252).Z,width:"2465",height:"4338"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8506).Z,width:"3468",height:"3916"})),(0,r.kt)("h4",{id:"subjects"},"Subjects"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(361).Z,width:"2206",height:"3762"})),(0,r.kt)("h4",{id:"all-tests"},"All Tests"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9787).Z,width:"1811",height:"3870"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6193).Z,width:"1812",height:"3527"})))}s.isMDXComponent=!0},1181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145311_overwiev_full-157f984fd8939f814ecad6f668c1aac4.jpg"},5474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145416_overview_pages-1ec4bacf4946c74743d82fc99ce197cf.jpg"},4252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145431_homepage-7867ec2bac5eb5315e5eae4e4c2b3a97.jpg"},361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145443_subjects_page-780a221508d3703e0e5e3697f4005595.jpg"},9787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145456_all_tests_page-984726de292264dd7f5e16677495b830.jpg"},6193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145602_detailed_test_view-3d03605cfdafec7e3696718435a621a1.jpg"},8506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20231128_145646_new_entry_view-dd5bd7092b57f8c8bb892c5ea72070a9.jpg"}}]);