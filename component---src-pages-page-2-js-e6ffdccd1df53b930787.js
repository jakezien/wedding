(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(153),c=a(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(146);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Anna & Jake's Wedding"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){e.exports=a.p+"static/zoetrope-88697c97258538796df192172ab68854.png"},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(162),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Anna & Jake's Wedding",description:"Anna Ewing and Jake Zien's wedding in Brooklyn, NYC, on October 19, 2019.",author:"@gatsbyjs"}}}}},153:function(e,t,a){"use strict";var n=a(148),r=(a(155),a(156),a(157),a(154),a(0)),i=a.n(r),o=a(4),c=a.n(o),s=a(147),l=a(158),u=a.n(l),d=function(e){return i.a.createElement("div",{id:e.id,class:u.a.container+(e.className?" "+e.className:"")},e.children)},m=a(159),p=a.n(m),f=a(160),g=a.n(f),y=a(150),E=a.n(y),h=function(){return i.a.createElement("div",{className:g.a.container},i.a.createElement("div",{className:g.a.imgWrap},i.a.createElement("img",{src:E.a,alt:"zoetrope"})))},w=function(e){return i.a.createElement("header",{id:p.a.siteHeader},i.a.createElement(h,null),i.a.createElement(d,null,i.a.createElement("h1",null,e.siteTitle)))};w.propTypes={siteTitle:c.a.string},w.defaultProps={siteTitle:"Anna & Jake's Wedding"};var v=w,b=a(161),k=a.n(b),q=function(){return i.a.createElement("footer",{id:k.a.siteFooter},i.a.createElement(d,null,"Footer!"))};a(163).a.initialize("UA-137874975-1");var T=function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(d,null,t),i.a.createElement(q,null))},data:n})};T.propTypes={children:c.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-page-2-js-e6ffdccd1df53b930787.js.map