(this["webpackJsonpmortgage-calc"]=this["webpackJsonpmortgage-calc"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a.n(r),i=a(9),l=a.n(i),s=(a(52),a.p,a(53),a(12)),o=a(33),j=a(15),m=a(88),x=a(99),u=a(101),d=a(102),b=a(91),g=a(93),h=a(94),p=a(60),O=a(95),y=a(96),v=a(97),S=a(98),P=Object(m.a)({container:{maxWidth:"800px",margin:"5px auto ",maxHeight:"400px",width:"95%"},table:{minWidth:650},pageContainer:{maxWidth:"800px",minWidth:"200px",margin:"0 auto","& th":{backgroundColor:"#54DEFD",padding:"2pt"}},root:{backgroundColor:"#54DEFD",color:"white","& th":{color:"white",fontSize:"0.8rem"}},body:{"& td":{padding:"1pt",fontSize:"0.8rem"}},footer:{margin:"0 auto"}}),f=function(e){var t=e.paymentData,a=P(),r=t.map((function(e,t){var a=e.ttlPayment,r=e.interestPaid,c=e.principlePaid,i=(e.extraPayment,e.remainingPrinciple);return Object(n.jsxs)(b.a,{hover:!0,children:[Object(n.jsx)(g.a,{align:"center",children:t+1}),Object(n.jsx)(g.a,{align:"center",children:a}),Object(n.jsx)(g.a,{align:"center",children:r}),Object(n.jsx)(g.a,{align:"center",children:c}),Object(n.jsx)(g.a,{align:"center",children:i})]},t)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{className:a.container,component:p.a,children:Object(n.jsxs)(O.a,{stickyHeader:!0,className:a.pageContainer,"aria-label":"simple table",children:[Object(n.jsx)(y.a,{className:a.root,xs:12,children:Object(n.jsxs)(b.a,{id:"head",children:[Object(n.jsx)(g.a,{align:"center",children:"Month"}),Object(n.jsx)(g.a,{align:"center",children:"Payment"}),Object(n.jsx)(g.a,{align:"center",children:"Interest"}),Object(n.jsx)(g.a,{align:"center",children:"Principle"}),Object(n.jsx)(g.a,{align:"center",children:"Balance"})]})}),Object(n.jsx)(v.a,{className:a.body,xs:12,children:r})]})}),Object(n.jsx)(S.a,{className:a.footer,stickyHeader:!0,children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(g.a,{align:"center",children:"Months Early 10"}),Object(n.jsx)(g.a,{align:"center",children:"Interest Payments 1000000"}),Object(n.jsx)(g.a,{align:"center",children:"Savings 11000"}),Object(n.jsx)(g.a,{align:"center"})]})})]})},C=a(21),U=a.n(C),D=Object(m.a)({container:{marginTop:"30px",backgroundColor:"lightestgrey",textAlign:"center",height:"100%"},input:{margin:"5px"}}),N=function(){var e=Object(r.useState)({loanAmt:"",interestRate:"",loanTerm:"",extraPayment:""}),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)([]),l=Object(j.a)(i,2),m=l[0],b=l[1],g=D(),h=function(e){var t=Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},e.target.name,e.target.value));return c(t)},p=function(e){var t=function(e){var t=e.loanAmt,a=e.interestRate,n=e.loanTerm,r=e.extraPayment,c=void 0===r?0:r,i=[],l=U()(t).value,s=1*c;console.log(l,s);var o=a/100/12,j=o*Math.pow(1+o,n),m=U()(l).multiply(j),x=Math.pow(1+o,n)-1;console.log(l,m.value);var u=U()(m).divide(x);console.log(u);for(var d=0;l>0;){if(u.value<l){var b=u.add(s),g=U()(l).multiply(o);d+=g.value;var h=b.subtract(g);l=U()(l).subtract(h).value,console.log();var p={ttlPayment:b.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),interestPaid:g.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),principlePaid:h.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),extraPayment:s,remainingPrinciple:l.toLocaleString("en-US",{style:"currency",currency:"USD"})};i.push(p)}else{var O=l,y=U()(l).multiply(o);d+=y.value;var v=O-y;l=0;var S={ttlPayment:O.toLocaleString("en-US",{style:"currency",currency:"USD"}),interestPaid:y.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),principlePaid:v.toLocaleString("en-US",{style:"currency",currency:"USD"}),extraPayment:s,remainingPrinciple:l.toLocaleString("en-US",{style:"currency",currency:"USD"})};i.push(S)}console.log(d)}return i}(a);b(t)},O=a.loanAmt,y=a.interestRate,v=a.loanTerm,S=a.extraPayment;return Object(n.jsxs)(x.a,{container:!0,className:g.container,children:[Object(n.jsx)(x.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(x.a,{item:!0,xs:12,sm:8,children:Object(n.jsxs)(x.a,{container:!0,children:[Object(n.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(u.a,{className:g.input,label:"Loan Amount",type:"text",onChange:h,value:O,name:"loanAmt",placeholder:"No Commas or Periods"})}),Object(n.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(u.a,{className:g.input,label:"Interest Rate",type:"text",onChange:h,value:y,name:"interestRate",placeholder:"ex.) 4.5"})}),Object(n.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(u.a,{className:g.input,label:"Loan Term",type:"text",onChange:h,value:v,name:"loanTerm",placeholder:"Enter Term in Months"})}),Object(n.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(u.a,{className:g.input,label:"Extra Payment",type:"text",onChange:h,value:S,name:"extraPayment",placeholder:"No Commas or Periods"})}),Object(n.jsx)(x.a,{item:!0,xs:!1,sm:4}),Object(n.jsx)(x.a,{item:!0,xs:!1,sm:4}),Object(n.jsx)(f,{paymentData:m})]})}),Object(n.jsx)(x.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(x.a,{style:{margin:"8px auto"},item:!0,xs:12,sm:4,children:Object(n.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(e){return p()},children:"Calculate"})})]})},L=a(100),T=Object(m.a)({appbar:{textAlign:"center",height:"30px",lineHeight:"30px"}});var k=function(){var e=T();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L.a,{className:e.appbar,position:"fixed",children:" Mortagage Calculator"}),Object(n.jsx)(N,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.eda02c5c.chunk.js.map