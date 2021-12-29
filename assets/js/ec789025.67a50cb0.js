"use strict";(self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[]).push([[8211],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7942:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_label:"s3_list_bucket",title:"operators.extractors.s3_list_bucket"},l=void 0,c={unversionedId:"data_detective_airflow_api_reference/operators/extractors/s3_list_bucket",id:"data_detective_airflow_api_reference/operators/extractors/s3_list_bucket",isDocsHomePage:!1,title:"operators.extractors.s3_list_bucket",description:"S3ListBucket Objects",source:"@site/docs/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket.md",sourceDirName:"data_detective_airflow_api_reference/operators/extractors",slug:"/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket",editUrl:"https://github.com/tinkoff/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket.md",tags:[],version:"current",frontMatter:{sidebar_label:"s3_list_bucket",title:"operators.extractors.s3_list_bucket"},sidebar:"tutorialSidebar",previous:{title:"s3_dump",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/s3_dump"},next:{title:"tsftpoperator",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/tsftpoperator"}},u=[{value:"S3ListBucket Objects",id:"s3listbucket-objects",children:[{value:"execute",id:"execute",children:[],level:4}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"s3listbucket-objects"},"S3ListBucket Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class S3ListBucket(TBaseOperator)\n")),(0,i.kt)("p",null,"Lists keys in a bucket under prefix and not containing delimiter\nexecute returns\nDataFrame [","['","key","'",", ","'","lastmodified","'",", ","'","etag","'",", ","'","size","'",", ","'","storageclass","'",", ","'","owner","']","]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    Connection id\n    Bucket name\n    Limits the response to keys that begin with the specified prefix.\n    A delimiter is a character you use to group keys.\n    Pagination size.\n    Maximum items to return.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conn_id"),": Text"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bucket"),": Text"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix"),": Text"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delimiter"),": Text"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page_size"),": int"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_items"),": int"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional params for TBaseOperator")),(0,i.kt)("h4",{id:"execute"},"execute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def execute(context: Optional[dict])\n")),(0,i.kt)("p",null,"Extended implementation of  airflow.hooks.S3_hook.py:155 list_keys.\nlist_keys returns only keys. This implementation returns\nsize and date of last modification\n",(0,i.kt)("a",{parentName:"p",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.list_objects"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.list_objects")),(0,i.kt)("p",null,"A DataFrame is written to result:\n","['","key","'",", ","'","lastmodified","'",", ","'","etag","'",", ","'","size","'",", ","'","storageclass","'",", ","'","owner","']"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AirflowBadRequest"),": With the non-existent bucket")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": context")))}d.isMDXComponent=!0}}]);