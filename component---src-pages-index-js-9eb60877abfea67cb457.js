(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"listQuery",function(){return u});a(35);var n=a(202),r=a(198),i=a(197),o=a(0),c=a.n(o),s=a(210),l=a(204);t.default=Object(r.withStyles)(function(e){e.palette;var t=e.spacing,a=e.typography;return{intro:Object.assign({},a.body2,{padding:2*t.unit}),post:{textDecoration:"none"}}})(function(e){var t=e.classes,a=e.data.allMarkdownRemark;return c.a.createElement(s.a,null,c.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),c.a.createElement("div",{className:t.intro},"My personal blog",c.a.createElement("br",null),"Previously as3 expert, now focused on JS"),c.a.createElement(n.d,{variant:"h3"},"Latest posts"),a.edges.map(function(e,a){var n=e.node;return c.a.createElement(i.a,{key:n.fields.slug,to:n.fields.slug,className:t.post},c.a.createElement("div",{className:"post-list"},c.a.createElement("h1",null,n.frontmatter.title),c.a.createElement("span",null,n.frontmatter.date),c.a.createElement("p",null,n.excerpt)))}))});var u="312020935"},197:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(201);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},201:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},204:function(e,t,a){"use strict";var n=a(205),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(221),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Helier Eric",description:"Senior Frontend Developer Toulouse",author:"@heliereric"}}}}},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Helier Eric"}}}}},207:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(61),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},210:function(e,t,a){"use strict";a(35);var n=a(206),r=a(198),i=a(202),o=a(213),c=a.n(o),s=a(214),l=a.n(s),u=a(197),d=a(4),m=a.n(d),p=a(0),g=a.n(p),f=a(222),y=function(e){var t=e.classes,a=e.siteTitle;return g.a.createElement("header",{className:t.root},g.a.createElement("div",{className:t.container},g.a.createElement(u.a,{to:"/",className:t.title},a),g.a.createElement(i.c,{centered:!0,classes:{centered:t.tabsAlign},className:t.tabs,value:0},g.a.createElement(i.b,{label:"Home",component:u.a,to:"/",className:t.tab}),g.a.createElement(i.b,{label:"Projects",component:u.a,to:"/projects",className:t.tab}),g.a.createElement(i.b,{label:"Blog",component:u.a,to:"/blog",className:t.tab}))))};y.propTypes={siteTitle:m.a.string},y.defaultProps={siteTitle:""};var h=Object(r.withStyles)(function(e){var t=e.palette,a=e.spacing,n=e.typography;return{root:{background:t.primary.dark,marginBottom:3*a.unit},container:{margin:"0 auto",maxWidth:960,padding:2*a.unit,color:"white",display:"flex"},title:Object.assign({},n.h3,{color:"white",textDecoration:"none"}),tabs:{flex:1},tabsAlign:{justifyContent:"flex-end"},tab:{minWidth:100}}})(y),b=Object(r.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[700],dark:c.a[900]},secondary:{light:l.a[300],main:l.a[600],dark:l.a[900]}}}),E=function(e){var t=e.children,a=e.classes;return g.a.createElement(u.b,{query:"755544856",render:function(e){return g.a.createElement(r.MuiThemeProvider,{theme:b},g.a.createElement(i.a,null),g.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),g.a.createElement("div",{className:a.root},g.a.createElement("main",{className:a.main},t),g.a.createElement("footer",{className:a.footer},g.a.createElement(f.SocialIcon,{url:"http://twitter.com/heliereric"}),g.a.createElement(f.SocialIcon,{url:"https://www.linkedin.com/in/heliereric/"}),g.a.createElement(f.SocialIcon,{url:"https://github.com/ricovitch"}))))},data:n})};E.propTypes={children:m.a.node.isRequired,classes:m.a.object.isRequired};t.a=Object(r.withStyles)(function(e){var t=e.spacing,a=e.typography;return{root:Object.assign({},a.body1,{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}),main:{margin:3*t.unit+"px 0"},footer:{"& a":{marginRight:t.unit}}}})(E)}}]);
//# sourceMappingURL=component---src-pages-index-js-9eb60877abfea67cb457.js.map