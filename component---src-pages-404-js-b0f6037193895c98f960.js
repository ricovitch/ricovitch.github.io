(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(202),o=a(197);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},190:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(192);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},192:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},197:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(213),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Helier Eric",description:"Senior Frontend Developer Toulouse",author:"@heliereric"}}}}},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Helier Eric"}}}}},200:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(61),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},202:function(e,t,a){"use strict";a(34);var n=a(199),r=a(191),i=a(194),o=a(223),c=a.n(o),s=a(224),l=a.n(s),u=a(190),d=a(4),m=a.n(d),p=a(0),h=a.n(p),g=a(214),f=(a(216),function(e){var t=e.classes,a=e.siteTitle;return h.a.createElement("header",{className:t.root},h.a.createElement("div",{className:t.container},h.a.createElement(u.a,{to:"/",className:t.link},a)))});f.propTypes={siteTitle:m.a.string},f.defaultProps={siteTitle:""};var y=Object(r.withStyles)(function(e){var t=e.palette,a=e.spacing,n=e.typography;return{root:{background:t.primary.main,marginBottom:3*a.unit},container:Object.assign({},n.h3,{margin:"0 auto",maxWidth:960,padding:3*a.unit+"px "+2*a.unit+"px"}),link:{color:"white",textDecoration:"none"}}})(f),E=Object(r.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:l.a[300],main:l.a[500],dark:l.a[700]}}}),w=function(e){var t=e.children,a=e.classes;return h.a.createElement(u.b,{query:"755544856",render:function(e){return h.a.createElement(r.MuiThemeProvider,{theme:E},h.a.createElement(i.a,null),h.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),h.a.createElement("div",{className:a.root},h.a.createElement("main",{className:a.main},t),h.a.createElement("footer",{className:a.footer},h.a.createElement(g.SocialIcon,{url:"http://twitter.com/heliereric"}),h.a.createElement(g.SocialIcon,{url:"https://www.linkedin.com/in/heliereric/"}),h.a.createElement(g.SocialIcon,{url:"https://github.com/ricovitch"}))))},data:n})};w.propTypes={children:m.a.node.isRequired,classes:m.a.object.isRequired};t.a=Object(r.withStyles)(function(e){var t=e.spacing,a=e.typography;return{root:Object.assign({},a.body1,{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}),main:{margin:3*t.unit+"px 0"},footer:{"& a":{marginRight:t.unit}}}})(w)}}]);
//# sourceMappingURL=component---src-pages-404-js-b0f6037193895c98f960.js.map