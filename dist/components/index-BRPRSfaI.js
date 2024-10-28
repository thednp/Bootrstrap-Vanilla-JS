"use strict";const k=e=>e!=null&&typeof e=="object"||!1,p=e=>k(e)&&typeof e.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(t=>e.nodeType===t)||!1,f=e=>p(e)&&e.nodeType===1||!1,x=e=>typeof e=="function"||!1,m="PositionObserver Error";class B{entries;_tick;_root;_callback;constructor(t,i){if(!x(t))throw new Error(`${m}: ${t} is not a function.`);this.entries=[],this._callback=t,this._root=f(i?.root)?i.root:document?.documentElement,this._tick=0}observe=t=>{if(!f(t))throw new Error(`${m}: ${t} is not an instance of HTMLElement.`);if(!this._root.contains(t))return;const{clientWidth:i,clientHeight:o}=this._root,h=t.getBoundingClientRect(),{left:l,top:a,bottom:n,right:s,width:r,height:c}=h,u=a>1-c&&l>1-r&&n<=o+c-1&&s<=i+r-1;this.entries.push({target:t,boundingBox:h,isVisible:u}),this._tick||(this._tick=requestAnimationFrame(this._runCallback))};unobserve=t=>{const i=this.entries.findIndex(o=>o.target===t);this.entries.splice(i,1)};_runCallback=()=>{if(!this.entries.length)return;const t=[],{clientWidth:i,clientHeight:o}=this._root;this.entries.forEach((h,l)=>{const{target:a,boundingBox:n}=h,s=a.getBoundingClientRect(),{left:r,top:c,bottom:u,right:g,width:b,height:d}=s;if(n.left!==r||n.top!==c||n.right!==g||n.bottom!==u){const _=c>1-d&&r>1-b&&u<=o+d-1&&g<=i+b-1;this.entries[l].boundingBox=s,this.entries[l].isVisible=_,t.push({target:a,boundingBox:s,isVisible:_})}}),t.length&&this._callback(t),requestAnimationFrame(this._runCallback)};disconnect=()=>{cancelAnimationFrame(this._tick),this.entries.length=0,this._tick=0}}exports.x=B;
//# sourceMappingURL=index-BRPRSfaI.js.map
