(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1069:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},696:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(1069)),s={id:"classic-interfaces-relay-network-layer",title:"RelayNetworkLayer",original_id:"classic-interfaces-relay-network-layer"},i={unversionedId:"classic-interfaces-relay-network-layer",id:"version-classic/classic-interfaces-relay-network-layer",isDocsHomePage:!1,title:"RelayNetworkLayer",description:"Custom network layers that must conform to the RelayNetworkLayer interface.",source:"@site/versioned_docs/version-classic/Classic-Interfaces-NetworkLayer.md",slug:"/classic-interfaces-relay-network-layer",permalink:"/docs/classic/classic-interfaces-relay-network-layer",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Interfaces-NetworkLayer.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614364367,sidebar:"version-classic/docs",previous:{title:"RelayMutationRequest",permalink:"/docs/classic/classic-interfaces-relay-mutation-request"},next:{title:"RelayQueryRequest",permalink:"/docs/classic/classic-interfaces-relay-query-request"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"sendMutation",id:"sendmutation",children:[]},{value:"sendQueries",id:"sendqueries",children:[]},{value:"supports",id:"supports",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom network layers that must conform to the ",Object(o.b)("inlineCode",{parentName:"p"},"RelayNetworkLayer")," interface."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Methods")),Object(o.b)("ul",{className:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#sendmutation"},Object(o.b)("pre",null,"sendMutation(mutationRequest)"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#sendqueries"},Object(o.b)("pre",null,"sendQueries(queryRequests)"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#supports"},Object(o.b)("pre",null,"supports(...options)")))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"sendmutation"},"sendMutation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsendMutation(mutationRequest: RelayMutationRequest): ?Promise\n\n")),Object(o.b)("p",null,"Implement this method to send mutations to the server. When the server response is obtained, this method must either call ",Object(o.b)("inlineCode",{parentName:"p"},"mutationRequest.resolve")," with the response data, or ",Object(o.b)("inlineCode",{parentName:"p"},"mutationRequest.reject")," with an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," object."),Object(o.b)("p",null,"This method can optionally return a promise in order to facilitate proper error propagation."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsendMutation(mutationRequest) {\n  return fetch(...).then(result => {\n    if (result.errors) {\n      mutationRequest.reject(new Error(...))\n    } else {\n      mutationRequest.resolve({response: result.data});\n    }\n  });\n}\n\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-interfaces-relay-mutation-request"}),"RelayMutationRequest")," for methods available on the argument object."),Object(o.b)("h3",{id:"sendqueries"},"sendQueries"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsendQueries(queryRequests: Array<RelayQueryRequest>): ?Promise\n\n")),Object(o.b)("p",null,"Implement this method to send queries to the server. For each query request, when the server response is received, this method must either call ",Object(o.b)("inlineCode",{parentName:"p"},"resolve")," with the response data, or ",Object(o.b)("inlineCode",{parentName:"p"},"reject")," with an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," object."),Object(o.b)("p",null,"This method receives an array of queries (instead of a single query) in order to facilitate batching queries to improve network efficiency."),Object(o.b)("p",null,"This method can optionally return a promise in order to facilitate proper error propagation."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsendQueries(queryRequests) {\n  return Promise.all(queryRequests.map(\n    queryRequest => fetch(...).then(result => {\n      if (result.errors) {\n        queryRequest.reject(new Error(...));\n      } else {\n        queryRequest.resolve({response: result.data});\n      }\n    })\n  ));\n}\n\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-interfaces-relay-query-request"}),"RelayQueryRequest")," for methods available on the argument objects."),Object(o.b)("h3",{id:"supports"},"supports"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsupports(...options: Array<string>): boolean\n\n")),Object(o.b)("p",null,"Implement this method to return true when the supplied options are supported by this network layer. This is used to declare which features the network layer supports."),Object(o.b)("p",null,"In the future, advanced capabilities in Relay may be dependent on the network layer being able to support certain features."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nsupports(...options) {\n  return options.every(option => {\n    if (option === 'future-feature') {\n      return true;\n    }\n    return false;\n  });\n}\n\n")))}u.isMDXComponent=!0}}]);