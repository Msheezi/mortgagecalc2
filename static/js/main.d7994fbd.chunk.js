(this["webpackJsonpmortgage-calc"]=this["webpackJsonpmortgage-calc"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),i=a(9),l=a.n(i),s=(a(52),a(53),a(13)),o=a(33),j=a(12),d=a(88),u=a(98),x=a(100),m=a(101),h=a(91),b=a(93),p=a(94),O=a(95),y=a(96),g=a(97),S=a(60),v=Object(d.a)({container:{maxWidth:"800px",margin:"5px auto ",maxHeight:"400px",width:"95%",position:"relative"},table:{minWidth:650},pageContainer:{maxWidth:"800px",minWidth:"200px",margin:"0 auto","& th":{backgroundColor:"#54DEFD",padding:"2pt"}},root:{backgroundColor:"#54DEFD",color:"white","& th":{color:"white",fontSize:"0.8rem"}},body:{"& td":{padding:"1pt",fontSize:"0.8rem"}},footer:{margin:"5px auto",maxWidth:"800px",width:"95%","& td":{textAlign:"center",padding:"1pt",fontSize:"0.8rem"},"& th":{backgroundColor:"#54DEFD",color:"white",fontSize:"0.8rem",padding:"2pt",textAlign:"center"}}}),f=function(e){var t=e.paymentData,a=e.scheduledInterest,r=e.totalInterest,c=e.loanTerm,i=e.extraPayment,l=v(),s=t.map((function(e,t){var a=e.ttlPayment,r=e.interestPaid,c=e.principlePaid,i=e.remainingPrinciple;return Object(n.jsxs)(p.a,{hover:!0,children:[Object(n.jsx)(O.a,{align:"center",children:t+1}),Object(n.jsx)(O.a,{align:"center",children:a}),Object(n.jsx)(O.a,{align:"center",children:r}),Object(n.jsx)(O.a,{align:"center",children:c}),Object(n.jsx)(O.a,{align:"center",children:i})]},t)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{className:l.container,component:S.a,children:Object(n.jsxs)(h.a,{stickyHeader:"true",className:l.pageContainer,"aria-label":"simple table",children:[Object(n.jsx)(b.a,{className:l.root,xs:12,children:Object(n.jsxs)(p.a,{id:"head",children:[Object(n.jsx)(O.a,{align:"center",children:"Month"}),Object(n.jsx)(O.a,{align:"center",children:"Payment"}),Object(n.jsx)(O.a,{align:"center",children:"Interest"}),Object(n.jsx)(O.a,{align:"center",children:"Principle"}),Object(n.jsx)(O.a,{align:"center",children:"Balance"})]})}),Object(n.jsx)(y.a,{className:l.body,xs:12,children:s})]})}),Object(n.jsx)(g.a,{component:S.a,className:l.footer,children:function(){if(i.length){var e=parseFloat(a)-parseFloat(r);return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{children:"Months Early"}),Object(n.jsx)(O.a,{children:"Scheduled Interest"}),Object(n.jsx)(O.a,{children:"Interest Paid"}),Object(n.jsx)(O.a,{children:"Savings"})]})}),Object(n.jsx)(y.a,{children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{children:c-t.length}),Object(n.jsx)(O.a,{children:a.toLocaleString("en-US",{style:"currency",currency:"USD"})}),Object(n.jsx)(O.a,{children:r.toLocaleString("en-US",{style:"currency",currency:"USD"})}),Object(n.jsx)(O.a,{children:e.toLocaleString("en-US",{style:"currency",currency:"USD"})})]})})]})}return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(p.a,{children:Object(n.jsx)(O.a,{children:"Total Interest"})})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(p.a,{children:Object(n.jsx)(O.a,{children:r.toLocaleString("en-US",{style:"currency",currency:"USD"})})})})]})}()})]})},P=a(14),U=a.n(P),D=Object(d.a)({container:{marginTop:"30px",backgroundColor:"lightestgrey",textAlign:"center",height:"100%"},input:{margin:"5px"}}),C={loanAmt:"",interestRate:"",loanTerm:"",extraPayment:""},L=function(){var e=Object(r.useState)(C),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)([]),l=Object(j.a)(i,2),d=l[0],h=l[1],b=Object(r.useState)(),p=Object(j.a)(b,2),O=p[0],y=p[1],g=Object(r.useState)(),S=Object(j.a)(g,2),v=S[0],P=S[1],L=Object(r.useState)(!1),I=Object(j.a)(L,2),N=I[0],T=I[1],F=D(),w=function(e){var t=Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},e.target.name,e.target.value));return c(t)},k=function(e){var t=function(e){var t=e.loanAmt,a=e.interestRate,n=e.loanTerm,r=e.extraPayment,c=void 0===r?0:r,i=[],l=U()(t).value,s=U()(t).value,o=1*c,j=a/100/12,d=j*Math.pow(1+j,n),u=U()(l).multiply(d),x=Math.pow(1+j,n)-1,m=U()(u).divide(x),h=0,b=0;for(function(e){for(var t,a=e.value;s>0;)if(a<s){t=U()(s).multiply(j),b+=t.value;var n=e.subtract(t);s=U()(s).subtract(n).value}else t=U()(s).multiply(j),b+=t.value,e=s,s=0}(m);l>0;)if(m.value<l){var p=m.add(o),O=U()(l).multiply(j);h+=O.value;var y=p.subtract(O);l=U()(l).subtract(y).value;var g={ttlPayment:p.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),interestPaid:O.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),principlePaid:y.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),extraPayment:o,remainingPrinciple:l.toLocaleString("en-US",{style:"currency",currency:"USD"})};i.push(g)}else{var S=l,v=U()(l).multiply(j);h+=v.value;var f=S-v;l=0;var P={ttlPayment:S.toLocaleString("en-US",{style:"currency",currency:"USD"}),interestPaid:v.value.toLocaleString("en-US",{style:"currency",currency:"USD"}),principlePaid:f.toLocaleString("en-US",{style:"currency",currency:"USD"}),extraPayment:o,remainingPrinciple:l.toLocaleString("en-US",{style:"currency",currency:"USD"})};i.push(P)}return{paymentData:i,scheduledInterest:b,totalInterest:h}}(a);h(t.paymentData),y(t.scheduledInterest),P(t.totalInterest),T(!0)},A=N?Object(n.jsx)(f,{paymentData:d,loanTerm:a.loanTerm,scheduledInterest:O,totalInterest:v,extraPayment:a.extraPayment}):"",E=a.loanAmt,M=a.interestRate,R=a.loanTerm,W=a.extraPayment;return Object(n.jsxs)(u.a,{container:!0,className:F.container,children:[Object(n.jsx)(u.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:8,children:Object(n.jsxs)(u.a,{container:!0,children:[Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(x.a,{className:F.input,label:"Loan Amount",type:"text",onChange:w,value:E,name:"loanAmt",placeholder:"No Special Characters"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(x.a,{className:F.input,label:"Interest Rate",type:"text",onChange:w,value:M,name:"interestRate",placeholder:"ex.) 4.5"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(x.a,{className:F.input,label:"Loan Term",type:"text",onChange:w,value:R,name:"loanTerm",placeholder:"Enter Term in Months"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(x.a,{className:F.input,label:"Extra Payment",type:"text",onChange:w,value:W,name:"extraPayment",placeholder:"No Special Characters"})}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:4}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:4}),A]})}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(u.a,{style:{margin:"8px auto"},item:!0,xs:12,sm:4,children:Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)(m.a,{style:{margin:"5px"},variant:"outlined",color:"secondary",onClick:function(){return c(C),h([]),y(""),P(""),void T(!1)},children:"New Calc"}),Object(n.jsx)(m.a,{style:{margin:"5px"},variant:"outlined",color:"primary",onClick:function(e){return k()},children:"Calculate"})]})})]})},I=a(99),N=Object(d.a)({appbar:{textAlign:"center",height:"30px",lineHeight:"30px"}});var T=function(){var e=N();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I.a,{className:e.appbar,position:"fixed",children:" Mortagage Calculator"}),Object(n.jsx)(L,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.d7994fbd.chunk.js.map