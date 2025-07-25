import{r as j,a as y}from"./index._OACqPSs.js";/* empty css                       */var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function h(){if(R)return o;R=1;var c=j(),a=Symbol.for("react.element"),p=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,f=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function n(u,e,x){var r,i={},m=null,_=null;x!==void 0&&(m=""+x),e.key!==void 0&&(m=""+e.key),e.ref!==void 0&&(_=e.ref);for(r in e)s.call(e,r)&&!l.hasOwnProperty(r)&&(i[r]=e[r]);if(u&&u.defaultProps)for(r in e=u.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:a,type:u,key:m,ref:_,props:i,_owner:f.current}}return o.Fragment=p,o.jsx=n,o.jsxs=n,o}var v;function E(){return v||(v=1,d.exports=h()),d.exports}var t=E();function k({children:c,count:a}){const[p,s]=y.useState(a),f=()=>s(n=>n+1),l=()=>s(n=>n-1);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"counter",children:[t.jsx("button",{onClick:l,children:"-"}),t.jsx("pre",{children:p}),t.jsx("button",{onClick:f,children:"+"})]}),t.jsx("div",{className:"counter-message",children:c})]})}export{k as default};
