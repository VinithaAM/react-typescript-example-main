(this["webpackJsonptypescript-react-boilerplate"]=this["webpackJsonptypescript-react-boilerplate"]||[]).push([[17],{101:function(e,t,c){"use strict";c.d(t,"a",(function(){return H}));var a=c(1),s=c(0),n=c(111),r=c(21),i=c(253),l=c(181),j=i.a.SubMenu,o=i.a.ItemGroup,b=l.a.useBreakpoint,d=function(){var e=b().md;return Object(a.jsxs)(i.a,{mode:e?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item",to:"/",children:"Home"})},"key-home"),Object(a.jsxs)(j,{title:"Services",children:[Object(a.jsxs)(o,{title:"Features",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{to:"/feature1",children:"Option 1"})},"setting:1"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{to:"/feature2",children:"Option 2"})},"setting:2")]}),Object(a.jsxs)(o,{title:"Demo",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{to:"/demo1",children:"Option 1"})},"setting:3"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{to:"/demo2",children:"Option 2"})},"setting:4")]})]},"sub1"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item",to:"/about",children:"About"})},"key-about"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item",to:"/contact",children:"Contact"})},"key-contact")]})},m=c(443),h=c(26),u=c(17),O=c(4),x=l.a.useBreakpoint,p={logout:h.c},f=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),p)((function(e){var t=e.isAuthenticated,c=e.logout,s=e.user,n=x().md,l=Object(a.jsxs)(i.a,{mode:n?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item primary",to:O.a.LOGIN,children:"Sign In"})},"menukey-login"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item",to:O.a.REGISTER,children:"Register"})},"menukey-signup")]}),j=Object(a.jsxs)(i.a,{mode:n?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsxs)(r.c,{className:"navbar-item primary",to:O.a.PROFILE,children:["Hi ",Object(a.jsx)("strong",{children:s.username})]})},"menukey-profile"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(r.c,{className:"navbar-item primary",to:O.a.HOME,onClick:function(){return c()},children:Object(a.jsxs)("span",{children:[Object(a.jsx)(m.a,{}),"Log Out"]})})},"menukey-login")]});return Object(a.jsx)(a.Fragment,{children:t?j:l})})),v=c(146),g=c(430),N=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(a.jsx)("div",{className:"navbar-section",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar-logo",children:Object(a.jsx)(r.c,{to:"/",className:"navbar-item",activeClassName:"is-active",children:"REACT TS"})}),Object(a.jsxs)("div",{className:"navbar-menu",children:[Object(a.jsx)("div",{className:"navbar-left-menu",children:Object(a.jsx)(d,{})}),Object(a.jsx)("div",{className:"navbar-right-menu",children:Object(a.jsx)(f,{})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(v.a,{className:"navbar-btnBars",type:"primary",onClick:function(){i(!0)},children:Object(a.jsx)("span",{className:"navbar-btnBars-span"})}),Object(a.jsxs)(g.a,{title:"Drawer navbar",placement:"right",closable:!0,onClose:function(){i(!1)},visible:c,children:[Object(a.jsx)(d,{}),Object(a.jsx)(f,{})]})]})]})})})},y=c(444),w=c(445),k=c(446),I=c(447),S=c(441),z=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"footer-inner",children:[Object(a.jsx)("div",{className:"footer-logo",children:Object(a.jsx)("a",{href:"/",children:"REACT TS"})}),Object(a.jsxs)("ul",{className:"footer-socials",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/tienduy-nguyen",children:Object(a.jsx)(y.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitter.com/tienduy_nguyen",children:Object(a.jsx)(w.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/",children:Object(a.jsx)(k.a,{})})})]}),Object(a.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020 REACT TS"}),Object(a.jsx)(S.a,{children:Object(a.jsx)("div",{className:"go-top",children:Object(a.jsx)(I.a,{})})})]})})})},C=c(416),E=C.a.Header,M=C.a.Content,A=C.a.Footer,H=function(e){var t=e.children;return Object(a.jsxs)(C.a,{className:"main-layout",children:[Object(a.jsx)(E,{children:Object(a.jsx)(N,{})}),Object(a.jsx)(M,{className:"layout-children",children:t}),Object(a.jsx)(A,{children:Object(a.jsx)(z,{})})]})}},411:function(e,t,c){"use strict";var a=c(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},n=c(109),r=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:s}))};r.displayName="UserOutlined";t.a=a.forwardRef(r)},412:function(e,t,c){"use strict";var a=c(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},n=c(109),r=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:s}))};r.displayName="LockOutlined";t.a=a.forwardRef(r)},432:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),n=c.n(s),r=c(12),i=c.n(r),l=c(19),j=c(111),o=c(424),b=c(427),d=c(146),m=c(411),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},u=c(109),O=function(e,t){return s.createElement(u.a,Object.assign({},e,{ref:t,icon:h}))};O.displayName="MailOutlined";var x=s.forwardRef(O),p=c(412),f=c(17),v=c(3),g=c(21),N=c(26),y=c(4),w={register:N.d},k=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),w)((function(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),n=(c[0],c[1]),r=e.register,h=e.isAuthenticated,u=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),n(e.t0.payload.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return h?Object(a.jsx)(v.a,{to:y.a.HOME}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"login-form-wrap",children:[Object(a.jsxs)("h1",{className:"login-form-title",children:[Object(a.jsx)("img",{alt:" logo ",src:" https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg "}),"SIGNUP"]}),Object(a.jsxs)(o.a,{name:"login_form",className:"login-form",initialValues:{remember:!0},onFinish:u,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(o.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(b.a,{prefix:Object(a.jsx)(m.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(o.a.Item,{name:"email",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(b.a,{prefix:Object(a.jsx)(x,{className:"site-form-item-icon"}),placeholder:"Email",type:"email"})}),Object(a.jsx)(o.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(b.a,{prefix:Object(a.jsx)(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsxs)(o.a.Item,{children:[Object(a.jsx)(d.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Sign Up"}),Object(a.jsxs)("div",{className:"login-form-register-link-wrapper",children:["Or"," ",Object(a.jsx)(g.b,{to:y.a.LOGIN,className:"login-form-register-link",children:"Log in now!"})]})]})]})]})})})),I=c(101),S=function(){return Object(a.jsx)(I.a,{children:Object(a.jsx)(k,{})})},z=n.a.memo(S);t.default=z}}]);
//# sourceMappingURL=17.158f0397.chunk.js.map