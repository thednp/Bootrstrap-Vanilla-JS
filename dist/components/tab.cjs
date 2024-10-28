"use strict";const e=require("./base-component-D3rSrWwH.js"),p=require("./event-listener-W3RGkfJ6.js"),b=require("./collapsingClass-CLblascz.js"),c=require("./activeClass-CxJYQAGN.js"),C=require("./fadeClass-Co6nOzNJ.js"),u=require("./showClass-D_Ms1FgG.js"),m=require("./dropdownClasses-CnEyz_iw.js"),I=require("./dataBsToggle-Dj-Ng54N.js"),T=require("./getTargetElement-DOtJ4BXO.js"),g="tab",y="Tab",w=`[${I.dataBsToggle}="${g}"]`,A=a=>e.getInstance(a,y),P=a=>new B(a),v=e.createCustomEvent(`show.bs.${g}`),H=e.createCustomEvent(`shown.bs.${g}`),f=e.createCustomEvent(`hide.bs.${g}`),L=e.createCustomEvent(`hidden.bs.${g}`),h=new Map,M=a=>{const{tabContent:s,nav:t}=a;s&&e.hasClass(s,b.collapsingClass)&&(s.style.height="",e.removeClass(s,b.collapsingClass)),t&&e.Timer.clear(t)},q=a=>{const{element:s,tabContent:t,content:n,nav:i}=a,{tab:l}=e.isHTMLElement(i)&&h.get(i)||{tab:null};if(t&&n&&e.hasClass(n,C.fadeClass)){const{currentHeight:o,nextHeight:r}=h.get(s)||{currentHeight:0,nextHeight:0};o!==r?setTimeout(()=>{t.style.height=`${r}px`,e.reflow(t),e.emulateTransitionEnd(t,()=>M(a))},50):M(a)}else i&&e.Timer.clear(i);H.relatedTarget=l,e.dispatchEvent(s,H)},x=a=>{const{element:s,content:t,tabContent:n,nav:i}=a,{tab:l,content:o}=i&&h.get(i)||{tab:null,content:null};let r=0;if(n&&t&&e.hasClass(t,C.fadeClass)&&([o,t].forEach(d=>{e.isHTMLElement(d)&&e.addClass(d,"overflow-hidden")}),r=e.isHTMLElement(o)?o.scrollHeight:0),v.relatedTarget=l,L.relatedTarget=s,e.dispatchEvent(s,v),!v.defaultPrevented){if(t&&e.addClass(t,c.activeClass),o&&e.removeClass(o,c.activeClass),n&&t&&e.hasClass(t,C.fadeClass)){const d=t.scrollHeight;h.set(s,{currentHeight:r,nextHeight:d,tab:null,content:null}),e.addClass(n,b.collapsingClass),n.style.height=`${r}px`,e.reflow(n),[o,t].forEach(E=>{E&&e.removeClass(E,"overflow-hidden")})}t&&t&&e.hasClass(t,C.fadeClass)?setTimeout(()=>{e.addClass(t,u.showClass),e.emulateTransitionEnd(t,()=>{q(a)})},1):(t&&e.addClass(t,u.showClass),q(a)),l&&e.dispatchEvent(l,L)}},$=a=>{const{nav:s}=a;if(!e.isHTMLElement(s))return{tab:null,content:null};const t=e.getElementsByClassName(c.activeClass,s);let n=null;t.length===1&&!m.dropdownMenuClasses.some(l=>e.hasClass(t[0].parentElement,l))?[n]=t:t.length>1&&(n=t[t.length-1]);const i=e.isHTMLElement(n)?T.getTargetElement(n):null;return{tab:n,content:i}},S=a=>{if(!e.isHTMLElement(a))return null;const s=e.closest(a,`.${m.dropdownMenuClasses.join(",.")}`);return s?e.querySelector(`.${m.dropdownMenuClasses[0]}-toggle`,s):null},k=a=>{const s=A(a.target);s&&(a.preventDefault(),s.show())};class B extends e.BaseComponent{static selector=w;static init=P;static getInstance=A;constructor(s){super(s);const{element:t}=this,n=T.getTargetElement(t);if(n){const i=e.closest(t,".nav"),l=e.closest(n,".tab-content");this.nav=i,this.content=n,this.tabContent=l,this.dropdown=S(t);const{tab:o}=$(this);if(i&&!o){const r=e.querySelector(w,i),d=r&&T.getTargetElement(r);d&&(e.addClass(r,c.activeClass),e.addClass(d,u.showClass),e.addClass(d,c.activeClass),e.setAttribute(t,e.ariaSelected,"true"))}this._toggleEventListeners(!0)}}get name(){return y}show(){const{element:s,content:t,nav:n,dropdown:i}=this;if(!(n&&e.Timer.get(n))&&!e.hasClass(s,c.activeClass)){const{tab:l,content:o}=$(this);if(n&&h.set(n,{tab:l,content:o,currentHeight:0,nextHeight:0}),f.relatedTarget=s,e.isHTMLElement(l)&&(e.dispatchEvent(l,f),!f.defaultPrevented)){e.addClass(s,c.activeClass),e.setAttribute(s,e.ariaSelected,"true");const r=e.isHTMLElement(l)&&S(l);if(r&&e.hasClass(r,c.activeClass)&&e.removeClass(r,c.activeClass),n){const d=()=>{l&&(e.removeClass(l,c.activeClass),e.setAttribute(l,e.ariaSelected,"false")),i&&!e.hasClass(i,c.activeClass)&&e.addClass(i,c.activeClass)};o&&(e.hasClass(o,C.fadeClass)||t&&e.hasClass(t,C.fadeClass))?e.Timer.set(n,d,1):d()}o&&(e.removeClass(o,u.showClass),e.hasClass(o,C.fadeClass)?e.emulateTransitionEnd(o,()=>x(this)):x(this))}}}_toggleEventListeners=s=>{(s?p.E:p.r)(this.element,e.mouseclickEvent,k)};dispose(){this._toggleEventListeners(),super.dispose()}}module.exports=B;
//# sourceMappingURL=tab.cjs.map
