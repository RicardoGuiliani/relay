(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1070:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(1073));const o=["internal","external"];let c;try{c=t(1071).usePluginData}catch(p){c=null}function s(e){return u(e),m()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function m(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}n.fbContent=s,n.fbInternalOnly=function(e){return s({internal:e})},n.validateFbContentArgs=u,n.isInternal=m,n.FbInternalOnly=function(e){return m()?e.children:null},n.OssOnly=function(e){return m()?null:e.children}}).call(this,t(1072))},1071:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1072:function(e,n){var t,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,l=[],u=!1,m=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):m=-1,l.length&&d())}function d(){if(!u){var e=c(p);u=!0;for(var n=l.length;n;){for(s=l,l=[];++m<n;)s&&s[m].run();m=-1,n=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function b(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new f(e,n)),1!==l.length||u||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1073:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1074);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},1075:function(e,n,t){"use strict";t(60);var r=t(1070),a=t(0);var i=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Thank you for letting us know!"):a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};n.a=function(){return Object(r.fbContent)({internal:a.createElement(o,null),external:a.createElement(i,null)})}},585:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),i=(t(0),t(1069)),o=t(1075),c=(t(1070),{id:"fragments",title:"Fragments",slug:"/guided-tour/rendering/fragments/"}),s={unversionedId:"guided-tour/rendering/fragments",id:"guided-tour/rendering/fragments",isDocsHomePage:!1,title:"Fragments",description:"Fragments",source:"@site/docs/guided-tour/rendering/fragments.md",slug:"/guided-tour/rendering/fragments/",permalink:"/docs/next/guided-tour/rendering/fragments/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/rendering/fragments.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614364367,sidebar:"docs",previous:{title:"Compiler",permalink:"/docs/next/guided-tour/setup/compiler/"},next:{title:"Queries",permalink:"/docs/next/guided-tour/rendering/queries/"}},l=[{value:"Fragments",id:"fragments",children:[{value:"Fetching data for a fragment",id:"fetching-data-for-a-fragment",children:[]},{value:"Rendering Fragments",id:"rendering-fragments",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]}]}],u={toc:l};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"fragments"},"Fragments"),Object(i.b)("p",null,"The main building block for declaring data dependencies for React Components in Relay are GraphQL fragments, which are essentially a selection of fields on a GraphQL Type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n}\n")),Object(i.b)("p",null,"In order to declare a fragment inside your Javascript code, you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," tag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('react-relay');\n\nconst userFragment = graphql`\n  fragment UserFragment_user on User {\n    name\n    age\n    profile_picture(scale: 2) {\n      uri\n    }\n  }\n`;\n")),Object(i.b)("h3",{id:"fetching-data-for-a-fragment"},"Fetching data for a fragment"),Object(i.b)("p",null,"Fragments in Relay allow declaring data dependencies for a component, but they can't be fetched by themselves; they need to be included by a query, either directly or transitively. This implies that ",Object(i.b)("em",{parentName:"p"},"all fragments must belong to a query when they are rendered"),", or in other words, they must be ",Object(i.b)("em",{parentName:"p"},"rooted")," under some query. Note that a single fragment can still be included by multiple queries, but when rendering a specific ",Object(i.b)("em",{parentName:"p"},"instance")," of a fragment component, it must have been included as part of a specific query request."),Object(i.b)("h3",{id:"rendering-fragments"},"Rendering Fragments"),Object(i.b)("p",null,"In order to ",Object(i.b)("em",{parentName:"p"},"render")," the data for a fragment, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"useFragment")," Hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>\n        <img src={data.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useFragment")," takes a fragment definition and a ",Object(i.b)("em",{parentName:"li"},"fragment reference"),", and returns the corresponding ",Object(i.b)("inlineCode",{parentName:"li"},"data")," for that fragment and reference."),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"fragment reference")," is an object that Relay uses to ",Object(i.b)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the ",Object(i.b)("inlineCode",{parentName:"li"},"UserComponent_user")," fragment itself just declares fields on the ",Object(i.b)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",Object(i.b)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference *",Object(i.b)("em",{parentName:"li"}," is like "),"a pointer to a specific instance of a type* that we want to read data from."),Object(i.b)("li",{parentName:"ul"},"Note that ",Object(i.b)("em",{parentName:"li"},"the component is automatically subscribed to updates to the fragment data"),": if the data for this particular ",Object(i.b)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),Object(i.b)("li",{parentName:"ul"},"Relay ** will automatically generate Flow types for any declared fragments when the compiler is run, so you can use these types to declare the type for your Component's ",Object(i.b)("inlineCode",{parentName:"li"},"props"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The generated Flow types include a type for the fragment reference, which is the type with the ",Object(i.b)("inlineCode",{parentName:"li"},"$key")," suffix: ",Object(i.b)("inlineCode",{parentName:"li"},"*<fragment_name>*"),"$key",Object(i.b)("inlineCode",{parentName:"li"},", and a type for the shape of the data, which is the type with the `$data` suffix:  "),Object(i.b)("em",{parentName:"li"},"<fragment_name>"),Object(i.b)("inlineCode",{parentName:"li"},"$data"),"; these types are available to import from files that are generated with the following name: ",Object(i.b)("inlineCode",{parentName:"li"},"*<fragment_name>*.graphql.js"),"."),Object(i.b)("li",{parentName:"ul"},"We use our ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/relayjs/eslint-plugin-relay"}),"lint rule")," to enforce that the type of the fragment reference prop is correctly declared when using ",Object(i.b)("inlineCode",{parentName:"li"},"useFragment"),". By using a properly typed fragment reference as input, the type of the returned ",Object(i.b)("inlineCode",{parentName:"li"},"data")," will automatically be Flow typed without requiring an explicit annotation."),Object(i.b)("li",{parentName:"ul"},"In our example, we're typing the ",Object(i.b)("inlineCode",{parentName:"li"},"user")," prop as the fragment reference we need for ",Object(i.b)("inlineCode",{parentName:"li"},"useFragment"),", which corresponds to the ",Object(i.b)("inlineCode",{parentName:"li"},"UserComponent_user$key")," imported from  ",Object(i.b)("inlineCode",{parentName:"li"},"UserComponent_user.graphql"),", which means that the type of ",Object(i.b)("inlineCode",{parentName:"li"},"data")," above would be: ",Object(i.b)("inlineCode",{parentName:"li"},"{ name: ?string, profile_picture: ?{ uri: ?string } }"),"."))),Object(i.b)("li",{parentName:"ul"},"Fragment names need to be globally unique. In order to easily achieve this, we name fragments using the following convention based on the module name followed by an identifier: ",Object(i.b)("inlineCode",{parentName:"li"},"*<module_name>*_*<property_name>*"),". This makes it easy to identify which fragments are defined in which modules and avoids name collisions when multiple fragments are defined in the same module.")),Object(i.b)("p",null,"If you need to render data from multiple fragments inside the same component, you can use  ",Object(i.b)("inlineCode",{parentName:"p"},"useFragment")," multiple times:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\nimport type {UserComponent_viewer$key} from 'UserComponent_viewer.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n  viewer: UserComponent_viewer$key,\n};\n\nfunction UserComponent(props: Props) {\n  const userData = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const viewerData = useFragment(\n    graphql`\n      fragment UserComponent_viewer on Viewer {\n        actor {\n          name\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (\n    <>\n      <h1>{userData.name}</h1>\n      <div>\n        <img src={userData.profile_picture?.uri} />\n        Acting as: {viewerData.actor?.name ?? 'Unknown'}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(i.b)("h3",{id:"composing-fragments"},"Composing Fragments"),Object(i.b)("p",null,"In GraphQL, fragments are reusable units, which means they can include ",Object(i.b)("em",{parentName:"p"},"other")," fragments, and consequently a fragment can be included within other fragments or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../queries/"}),"queries"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n  ...AnotherUserFragment\n}\n\nfragment AnotherUserFragment on User {\n  username\n  ...FooUserFragment\n}\n")),Object(i.b)("p",null,"With Relay, you can compose fragment components in a similar way, using both component composition and fragment composition. Each React component is responsible for fetching the data dependencies of its direct children - just as it has to know about its children's props in order to render them correctly. This pattern means that developers are able to reason locally about components - what data they need, what components they render - but Relay is able to derive a global view of the data dependencies of an entire UI tree."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UsernameSection.react.js\n *\n * Child Fragment Component\n */\n\nimport type {UsernameSection_user$key} from 'UsernameSection_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UsernameSection_user$key,\n};\n\nfunction UsernameSection(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UsernameSection_user on User {\n        username\n      }\n    `,\n    props.user,\n  );\n\n  return <div>{data.username ?? 'Unknown'}</div>;\n}\n\nmodule.exports = UsernameSection;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UserComponent.react.js\n *\n * Parent Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\nconst UsernameSection = require('./UsernameSection.react');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const user = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        age\n        profile_picture(scale: 2) {\n          uri\n        }\n\n        # Include child fragment:\n        ...UsernameSection_user\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <div>\n        <img src={user.profile_picture?.uri} />\n        {user.age}\n\n        {/* Render child component, passing the _fragment reference_: */}\n        <UsernameSection user={user} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(i.b)("p",null,"There are a few things to note here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UserComponent")," both renders *",Object(i.b)("em",{parentName:"li"}," ",Object(i.b)("inlineCode",{parentName:"em"},"UsernameSection"),", "),"and* includes the fragment declared by ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection")," inside its own ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," fragment declaration."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection")," expects a ",Object(i.b)("em",{parentName:"li"},"fragment reference")," as the ",Object(i.b)("inlineCode",{parentName:"li"},"user")," prop. As we've mentioned before, a fragment reference is an object that Relay uses to ",Object(i.b)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the child ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection_user")," fragment itself just declares fields on the ",Object(i.b)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",Object(i.b)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference *",Object(i.b)("em",{parentName:"li"}," is like "),"a pointer to a specific instance of a type* that we want to read data from."),Object(i.b)("li",{parentName:"ul"},"Note that in this case the ",Object(i.b)("inlineCode",{parentName:"li"},"user")," passed to ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection"),", i.e. the fragment reference, ",Object(i.b)("em",{parentName:"li"},"doesn't actually contain any of the data declared by the child ",Object(i.b)("inlineCode",{parentName:"em"},"UsernameSection")," component"),"; instead, ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection")," will use the fragment reference to read the data ",Object(i.b)("em",{parentName:"li"},"it")," declared internally, using ",Object(i.b)("inlineCode",{parentName:"li"},"useFragment"),". This prevents the parent from implicitly creating dependencies on data declared by its children, and vice-versa, which allows us to reason locally about our components and modify them without worrying about affecting other components. If this wasn't the case, and the parent had access to the child's data, modifying the data declared by the child could break the parent. This is known as ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../../principles-and-architecture/thinking-in-relay/"}),Object(i.b)("em",{parentName:"a"},"data masking")),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("em",{parentName:"li"},"fragment reference")," that the child (i.e.  ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection"),") expects is the result of reading a parent fragment that ",Object(i.b)("em",{parentName:"li"},"includes")," the child ** fragment. In our particular example, that means the result of reading a fragment that includes ",Object(i.b)("inlineCode",{parentName:"li"},"...UsernameSection_user")," will be the fragment reference that ",Object(i.b)("inlineCode",{parentName:"li"},"UsernameSection")," expects. In other words, the data obtained as a result of reading a fragment via ",Object(i.b)("inlineCode",{parentName:"li"},"useFragment")," also serves as the fragment reference for any child fragments included in that fragment.")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);