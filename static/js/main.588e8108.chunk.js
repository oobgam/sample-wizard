(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,n,t){e.exports=t(272)},272:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),i=t.n(l),o=t(40),u=t(41),c=t(45),m=t(42),s=t(46),d=t(2),h=t(3),b=t(12),p=t(5),f=[{value:"Staff Feedback",label:"Staff Feedback"},{value:"Checkout Feedback",label:"Checkout Feedback"},{value:"Product Feedback",label:"Product Feedback"}],g=p.object().shape({firstName:p.string().required(),lastName:p.string().required(),email:p.string().required().email(),phone:p.number()}),E=p.object().shape({lineOne:p.string().required(),lineTwo:p.string(),city:p.string(),state:p.string(),zip:p.number()}),v=p.object().shape({commentSubject:p.mixed().oneOf(f),comment:p.string().max(1e3)});function S(){var e=Object(d.a)(["\n    font-style: italic;\n    color: lightslategray;\n"]);return S=function(){return e},e}function j(){var e=Object(d.a)(["\n    margin: 0;\n    padding: 0;\n    font-size: 0.75rem;\n    color: red;\n"]);return j=function(){return e},e}function y(){var e=Object(d.a)(["\n    border-radius: 0.25rem;\n    font-size: 1rem;\n    border: 1px solid darkslategray;\n    padding: 0.5rem;\n    margin-bottom: 0.25rem;\n    ","\n"]);return y=function(){return e},e}function w(){var e=Object(d.a)(["\n    margin-bottom: 0.25rem;\n    font-size: 0.7rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    color: darkslategray;\n"]);return w=function(){return e},e}function O(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 0.75rem;\n"]);return O=function(){return e},e}var x=h.b.div(O()),k=h.b.label(w()),C=h.b.input(y(),function(e){return e.hasError?"border-color: red;":""}),V=h.b.p(j()),F=h.b.small(S()),B=function(e){var n=e.name,t=e.label,a=e.handleChange,l=e.handleBlur,i=e.type,o=e.value,u=e.hasError,c=e.errorMessage,m=e.placeholder,s=e.hint;return r.a.createElement(x,null,r.a.createElement(k,{htmlFor:"".concat(n,"-target")},t," ",s?r.a.createElement(F,null,s):""),r.a.createElement(C,{hasError:u,type:i||"text",id:"".concat(n,"-target"),name:n,value:o,onBlur:l,onChange:a,placeholder:m}),u&&r.a.createElement(V,null,c))};function N(){var e=Object(d.a)(["\n    background-color: lightsalmon;\n    color: white;\n    padding: 0.5rem 0.75rem;\n    border: 0;\n    font-size: 1rem;\n    border-radius: 0.25rem;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    &:hover {\n        background-color: HSL(17, 100%, 52%);\n    }\n"]);return N=function(){return e},e}var M=h.b.button(N()),z=function(e){var n=e.initialValues,t=e.currentStep,a=e.setFormValues;return r.a.createElement(b.a,{initialValues:n,onSubmit:function(e,n){n.setSubmitting;var r=Object.assign({},{stepOne:e},void 0!==t&&null!==t?{currentStep:t+1}:{showModal:!1});a(r)},validationSchema:g},function(e){var n=e.values,a=e.touched,l=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,u=e.handleSubmit;e.handleReset;return r.a.createElement("form",{onSubmit:u},r.a.createElement(B,{name:"firstName",label:"First Name",handleChange:i,handleBlur:o,value:n.firstName,hasError:l.firstName&&a.firstName,errorMessage:l.firstName}),r.a.createElement(B,{name:"lastName",label:"Last Name",handleChange:i,handleBlur:o,value:n.lastName,hasError:l.lastName&&a.lastName,errorMessage:l.lastName}),r.a.createElement(B,{name:"email",label:"e-mail",type:"email",handleChange:i,handleBlur:o,value:n.email,hasError:l.email&&a.email,errorMessage:l.email}),r.a.createElement(B,{name:"phone",label:"phone",type:"tel",handleChange:i,handleBlur:o,value:n.phone,hasError:l.phone&&a.phone,errorMessage:l.phone}),r.a.createElement(M,{type:"submit"},void 0!==t&&null!==t?"Next":"Update"))})},T=function(e){var n=e.initialValues,t=e.currentStep,a=e.setFormValues;return r.a.createElement(b.a,{initialValues:n,onSubmit:function(e,n){n.setSubmitting;var r=Object.assign({},{stepTwo:e},void 0!==t&&null!==t?{currentStep:t+1}:{showModal:!1});a(r)},validationSchema:E},function(e){var n=e.values,a=e.touched,l=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,u=e.handleSubmit;e.handleReset;return r.a.createElement("form",{onSubmit:u},r.a.createElement(B,{name:"lineOne",label:"Address Line 1",handleChange:i,handleBlur:o,hint:"Street address, P.O. box, company name, c/o",value:n.lineOne,hasError:l.lineOne&&a.lineOne,errorMessage:l.lineOne}),r.a.createElement(B,{name:"lineTwo",label:"Address Line 2",handleChange:i,hint:"Apartment, suite, unit, bldg, flr, etc...",handleBlur:o,value:n.lineTwo,hasError:l.lineTwo&&a.lineTwo,errorMessage:l.lineTwo}),r.a.createElement(B,{name:"city",label:"City",handleChange:i,handleBlur:o,value:n.city,hasError:l.city&&a.city,errorMessage:l.city}),r.a.createElement(B,{name:"state",label:"State",handleChange:i,handleBlur:o,value:n.state,hasError:l.state&&a.state,errorMessage:l.state}),r.a.createElement(B,{name:"zip",label:"Zip",handleChange:i,handleBlur:o,value:n.zip,hasError:l.zip&&a.zip,errorMessage:l.zip}),r.a.createElement(M,{type:"submit"},void 0!==t&&null!==t?"Next":"Update"))})},D=t(119);function A(){var e=Object(d.a)(["\n    border-radius: 0.25rem;\n    font-size: 1rem;\n    border: 1px solid darkslategray;\n    padding: 0.5rem;\n    margin-bottom: 0.25rem;\n    ",";\n"]);return A=function(){return e},e}function L(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 0.5rem;\n"]);return L=function(){return e},e}var P=h.b.div(L()),R=h.b.textarea(A(),function(e){return e.hasError?"border-color: red;":""}),q=function(e){var n=e.initialValues,t=e.currentStep,a=e.setFormValues;return r.a.createElement(b.a,{initialValues:n,onSubmit:function(e,n){n.setSubmitting;var r=Object.assign({},{stepThree:e},void 0!==t&&null!==t?{currentStep:t+1}:{showModal:!1});a(r)},validationSchema:v},function(e){var n=e.values,a=e.touched,l=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,u=e.handleSubmit,c=(e.handleReset,e.setFieldValue),m=e.setFieldTouched;return r.a.createElement("form",{onSubmit:u},r.a.createElement(J,{value:n.commentSubject,onChange:c,onBlur:m,error:l.commentSubject,touched:a.commentSubject}),r.a.createElement(P,null,r.a.createElement(k,{htmlFor:"commentBox"},"Comment"),r.a.createElement(R,{onBlur:o,onChange:i,name:"comment",rows:3,id:"commentBox",hasError:l.comment&&a.comment,value:n.comment}),l.comment&&a.comment?r.a.createElement(V,null,l.comment):null),r.a.createElement(M,{type:"submit"},void 0!==t&&null!==t?"Next":"Update"))})},J=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).handleChange=function(e){t.props.onChange("commentSubject",e)},t.handleBlur=function(e){t.props.onBlur("commentSubject",e)},t}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.touched,t=e.error,a=e.value;return r.a.createElement(P,null,r.a.createElement(k,{htmlFor:"commentSubject"},"Subject"),r.a.createElement(D.a,{id:"commentSubject",onChange:this.handleChange,onBlur:this.handleBlur,value:a,options:f}),Boolean(t)&&n?r.a.createElement(V,null,t):null)}}]),n}(a.Component),U=t(123);function W(){var e=Object(d.a)(["\n    padding-left: 0.25rem;\n    margin: 0;\n    list-style: none;\n\n    li {\n        margin-bottom: 0.5rem;\n        display: flex;\n        flex-direction: column-reverse;\n\n        span {\n            margin-top: 0.25rem;\n            margin-bottom: 0.5rem;\n            text-transform: uppercase;\n            font-size: 0.75rem;\n            color: lightslategray;\n            letter-spacing: 0.05em;\n        }\n    }\n"]);return W=function(){return e},e}function Z(){var e=Object(d.a)(["\n    margin-bottom: 1rem;\n\n    h3 {\n        text-transform: uppercase;\n        font-size: 0.75rem;\n        letter-spacing: 0.05em;\n    }\n"]);return Z=function(){return e},e}function H(){var e=Object(d.a)(["\n    font-size: 1.5rem;\n    margin: 0;\n    padding: 0;\n"]);return H=function(){return e},e}var I=h.b.h2(H()),$=h.b.div(Z()),G=h.b.ul(W()),K=function(e){var n=e.userDetails,t=e.address,a=e.comments,l=e.editDetail;e.initialValues;return r.a.createElement(b.a,{initialValues:Object(U.a)({},n,t,a),onSubmit:function(e,n){var t=n.setSubmitting;setTimeout(function(){alert(JSON.stringify(e,null,2)),t(!1)},500)}},function(e){e.values,e.touched,e.errors,e.dirty;var i=e.isSubmitting,o=(e.handleChange,e.handleBlur,e.handleSubmit);e.handleReset;return i?r.a.createElement("div",null,"Submitting..."):r.a.createElement("form",{onSubmit:o},r.a.createElement(I,null,"Review Submission"),r.a.createElement($,null,r.a.createElement("h3",null,"Details"," ",r.a.createElement(M,{onClick:l.bind(null,0)},"Edit")),r.a.createElement(G,null,r.a.createElement("li",null,r.a.createElement("span",null,"First Name"),n.firstName),r.a.createElement("li",null,r.a.createElement("span",null,"Last Name"),n.lastName),r.a.createElement("li",null,r.a.createElement("span",null,"Email"),n.email),r.a.createElement("li",null,r.a.createElement("span",null,"Phone"),n.phone?n.phone:"\u2014"))),r.a.createElement($,null,r.a.createElement("h3",null,"Address"," ",r.a.createElement(M,{onClick:l.bind(null,1)},"Edit")),r.a.createElement(G,null,r.a.createElement("li",null,r.a.createElement("span",null,"Address Line One"),t.lineOne?t.lineOne:"\u2014"),r.a.createElement("li",null,r.a.createElement("span",null,"Address Line Two"),t.lineTwo?t.lineTwo:"\u2014"),r.a.createElement("li",null,r.a.createElement("span",null,"City"),t.city?t.city:"\u2014"),r.a.createElement("li",null,r.a.createElement("span",null,"State"),t.state?t.state:"\u2014"),r.a.createElement("li",null,r.a.createElement("span",null,"Zip/Postal Code"),t.zip?t.zip:"\u2014"))),r.a.createElement($,null,r.a.createElement("h3",null,"Comment"," ",r.a.createElement(M,{onClick:l.bind(null,2)},"Edit")),r.a.createElement(G,null,r.a.createElement("li",null,r.a.createElement("span",null,"Subject"),a.commentSubject&&a.commentSubject.value?a.commentSubject.value:""),r.a.createElement("li",null,r.a.createElement("span",null,"Message"),a.comment?a.comment:"\u2014"))),r.a.createElement(M,{type:"submit"},"Submit"))})};function Q(){var e=Object(d.a)(["\n    background-color: transparent;\n    font-size: 1.5rem;\n    border: 0;\n    position: absolute;\n    right: 0.5rem;\n    top: 0;\n    cursor: pointer;\n    color: white;\n"]);return Q=function(){return e},e}function X(){var e=Object(d.a)(["\n    background-color: white;\n    padding: 2rem;\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n    background-color: darkslategray;\n    color: white;\n    padding: 0.5rem;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    position: relative;\n"]);return Y=function(){return e},e}function _(){var e=Object(d.a)(["\n    max-width: 500px;\n    width: 100%;\n    box-shadow: 8px 2px 8px 0 rgba(0, 0, 0, 0.2);\n    background-color: white;\n    border-radius: 4px;\n    overflow: hidden;\n"]);return _=function(){return e},e}function ee(){var e=Object(d.a)(["\n    position: fixed;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.5);\n"]);return ee=function(){return e},e}var ne=h.b.div(ee()),te=h.b.div(_()),ae=h.b.div(Y()),re=h.b.div(X()),le=h.b.button(Q()),ie=function(e){var n=e.children,t=e.closeModal;return r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Edit Details ",r.a.createElement(le,{onClick:t},"\xd7")),r.a.createElement(re,null,n)))};function oe(){var e=Object(d.a)(["\n    margin-top: 0;\n    margin-bottom: 1rem;\n    padding: 0;\n    font-size: 1.5rem;\n    color: darkslategray;\n"]);return oe=function(){return e},e}function ue(){var e=Object(d.a)(["\n    padding: 2rem 1rem;\n    border-radius: 4px;\n    max-width: 500px;\n    width: 100%;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n    border-top: 8px solid darkslategray;\n    background-color: white;\n"]);return ue=function(){return e},e}function ce(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background-color: gainsboro;\n    padding: 2rem;\n\n    ",";\n"]);return ce=function(){return e},e}function me(){var e=Object(d.a)(["\n    * {\n        box-sizing: border-box;\n    }\n\n    html,\n    body {\n        font-size: 100%;\n        margin: 0;\n        padding: 0;\n        font-family: sans-serif;\n    }\n"]);return me=function(){return e},e}var se=Object(h.a)(me()),de=h.b.div(ce(),function(e){return e.showModal?"overflow: hidden; max-height: 100vh;":""}),he=h.b.div(ue()),be=h.b.h1(oe()),pe={stepOne:{firstName:"",lastName:"",email:"",phone:""},stepTwo:{lineOne:"",lineTwo:"",city:"",state:"",zip:""},stepThree:{commentSubject:null,comment:""},currentStep:0,showModal:!1,currentEdit:0},fe=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state=pe,t}return Object(s.a)(n,e),Object(u.a)(n,[{key:"setFormValues",value:function(e){this.setState(e)}},{key:"editDetail",value:function(e,n){n.preventDefault(),this.setState({showModal:!0,currentEdit:e})}},{key:"render",value:function(){var e=this,n=this.state,t=n.stepOne,l=n.stepTwo,i=n.stepThree,o=n.currentStep,u=n.currentEdit,c=n.showModal,m=0===o,s=1===o,d=2===o,h=3===o,b=0===u,p=1===u,f=2===u;return r.a.createElement(a.Fragment,null,r.a.createElement(de,{showModal:c},r.a.createElement(he,null,r.a.createElement(be,null,"Step ",o+1),m&&r.a.createElement(z,{initialValues:t,currentStep:o,setFormValues:this.setFormValues.bind(this)}),s&&r.a.createElement(T,{initialValues:l,currentStep:o,setFormValues:this.setFormValues.bind(this)}),d&&r.a.createElement(q,{initialValues:i,currentStep:o,setFormValues:this.setFormValues.bind(this)}),h&&r.a.createElement(K,{editDetail:this.editDetail.bind(this),userDetails:t,address:l,comments:i})),r.a.createElement(se,null)),c&&r.a.createElement(ie,{closeModal:function(n){n.preventDefault(),e.setState({showModal:!1})}},b&&r.a.createElement(z,{initialValues:t,setFormValues:this.setFormValues.bind(this)}),p&&r.a.createElement(T,{initialValues:l,setFormValues:this.setFormValues.bind(this)}),f&&r.a.createElement(q,{initialValues:i,setFormValues:this.setFormValues.bind(this)})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,2,1]]]);
//# sourceMappingURL=main.588e8108.chunk.js.map