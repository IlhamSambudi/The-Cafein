(window.blocksyJsonP=window.blocksyJsonP||[]).push([[7],{38:function(t,e,n){"use strict";n.r(e),n.d(e,"mount",(function(){return S}));var i=n(3),r=n.n(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=(t,e)=>"vertical"===e.options.orientation?t.top+t.height:t.right,h=(t,e)=>"vertical"===e.options.orientation?t.top:t.left,p=(t,e)=>"vertical"===e.options.orientation?t.height:t.width,u=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"container";const r=t.sliderContainer;let o=0;if("left"===n){let n=[...r.children].reduce((e,n)=>{let i=h(f(e,t.options.nullifyTransformEl),t);return h(f(n,t.options.nullifyTransformEl),t)<i?n:e},{getBoundingClientRect:()=>({left:1e11,bottom:1e11,top:1e11,right:1e11})});h(f(n,t.options.nullifyTransformEl),t)>("container"===i?h(f(r,t.options.nullifyTransformEl),t):0)&&(o=-1*p(f(r.firstElementChild,t.options.nullifyTransformEl),t),e=e===r.children.length?1:e+1)}if("right"===n){let n=[...r.children].reduce((e,n)=>d(f(e,t.options.nullifyTransformEl),t)>d(f(n,t.options.nullifyTransformEl),t)?e:n,{getBoundingClientRect:()=>({left:-1,bottom:-9999999999999,top:-1,right:-1})});d(f(n,t.options.nullifyTransformEl),t)<("container"===i?d(f(r,t.options.nullifyTransformEl),t):window.innerWidth)&&(o=p(f(r.firstElementChild,t.options.nullifyTransformEl),t),e=1===e?r.children.length:e-1)}return{relativeDelta:o,elementsOnBehind:e}};function f(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return null;if(t.getBoundingClientRect&&!t.firstElementChild)return t.getBoundingClientRect();e||(e=t);let{top:n,left:i,right:r,width:o,height:s}=t.getBoundingClientRect(),l=window.getComputedStyle(e).transform.split(/\(|,|\)/).slice(1,-1).map(t=>parseFloat(t));if(6!=l.length)return t.getBoundingClientRect();var a=l;let d=a[0]*a[3]-a[1]*a[2];return{width:o/a[0],height:s/a[3],left:(i*a[3]-n*a[2]+a[2]*a[5]-a[4]*a[3])/d,right:(r*a[3]-n*a[2]+a[2]*a[5]-a[4]*a[3])/d,top:(-i*a[1]+n*a[0]+a[4]*a[1]-a[0]*a[5])/d}}const c=t=>{if(t.options.pillsContainerSelector&&(t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),t.options.pillsContainerSelector.children[t.state.previousCurrentIndex].classList.add("active"),t.options.pillsFlexyInstance)){let e=t.options.pillsFlexyInstance.flexy,n=[...t.options.pillsContainerSelector.children],i=[...e.sliderContainer.children].indexOf([...e.sliderContainer.children].reduce((t,n)=>{let i=h(f(t,e.options.nullifyTransformEl),e),r=h(f(n,e.options.nullifyTransformEl),e);return Math.abs(r-h(f(e.sliderContainer,e.options.nullifyTransformEl),e))<Math.abs(i-h(f(e.sliderContainer,e.options.nullifyTransformEl),e))?n:t},{getBoundingClientRect:()=>({left:1e11,top:1e11})})),r=0;if("horizontal"===e.options.orientation){let i=Math.round(f(e.sliderContainer).width/f(e.sliderContainer.firstElementChild).width);r=t.state.previousCurrentIndex,5===i&&(t.state.previousCurrentIndex>2&&(r=t.state.previousCurrentIndex-2),n.length-1-t.state.previousCurrentIndex<3&&(r=n.length-5)),3===i&&(t.state.previousCurrentIndex>=1&&(r=t.state.previousCurrentIndex-1),n.length-1-t.state.previousCurrentIndex<1&&(r=n.length-3))}else r=t.state.previousCurrentIndex;let o=Math.abs(r-i),l=Math.min(i,r)+(n.length-Math.max(i,r)),a=Math.min(o,l)*(l>=o?i>r?1:-1:i>r?-1:1),d=100*Math.round(100*e.state.positionX/p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100)*p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100+p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*a;e.state=s(s({},e.state),{},{positionTarget:d})}},m=(t,e)=>{let n=[...t.sliderContainer.children].indexOf([...t.sliderContainer.children].reduce((e,n)=>{let i=h(f(e,t.options.nullifyTransformEl),t),r=h(f(n,t.options.nullifyTransformEl),t);return Math.abs(r-h(f(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(i-h(f(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e},{getBoundingClientRect:()=>({left:1e11,top:1e11})})),i=e(n);i<0&&(i=t.sliderContainer.children.length-1),i>t.sliderContainer.children.length-1&&(i=0);let r=Math.abs(i-n),o=Math.min(n,i)+(t.sliderContainer.children.length-Math.max(n,i)),l=Math.min(r,o)*(o>r?n>i?1:-1:n>i?-1:1),a=100*Math.round(100*t.state.positionX/p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*l;t.state=s(s({},t.state),{},{positionTarget:a})},y=t=>{if(!t.options.adjustHeight)return;let e=t.sliderContainer.children[t.state.previousCurrentIndex];t.sliderContainer.style.setProperty("--sliderHeight",(e.firstElementChild||e).getBoundingClientRect().height+"px")},g=(t,e,n)=>Math.min(Math.max(t,e),n);class C{constructor(t){var e=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var i;a(this,"getDefaultState",()=>({elementsOnBehind:1,positionSnapshot:0,positionX:0,positionTarget:0,velocity:0,containerInnerWidth:this.sliderContainer?p(f(this.sliderContainer,this.nullifyTransformEl),this):0,slideWidth:this.sliderContainer?p(f(this.sliderContainer.firstElementChild,this.sliderContainer),this):0,previousCurrentIndex:0,startX:0,endX:0,mouseDown:!1,lastTimeAnimated:1/0})),a(this,"state",this.getDefaultState()),a(this,"options",{onDragStart:()=>{},autoplay:!1,scaleRotateEffect:!1,pillsContainerSelector:null,pillsFlexyInstance:null,flexyAttributeEl:null,adjustHeight:!1,wrapAroundMode:"container",orientation:"horizontal",nullifyTransformEl:null,elementsThatDoNotStartDrag:[],hasDragAndDrop:!0}),a(this,"sliderContainer",null),a(this,"drawLoop",(function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t?1/0:e.state.positionX;if("__DESTROYED__"!==e.state.sliderActivated){var i,r;if(e.state.containerInnerWidth!==f(e.sliderContainer,e.nullifyTransformEl).width&&e.refreshActivation(),e.state=s(s(s(s({},e.state),e.state.sliderActivated?(i=e.state.velocity+(e.state.mouseDown?e.state.positionSnapshot+(e.state.endX-e.state.startX)-e.state.positionX-e.state.velocity:.02*(e.state.positionTarget-e.state.positionX)),{velocity:.72*(r=i),positionX:e.state.positionX+r}):{}),e.state.sliderActivated&&Math.abs(e.state.containerInnerWidth-p(f(e.sliderContainer,e.nullifyTransformEl),e))>1?{positionX:Math.round(p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*(100*Math.round(e.state.positionX/e.state.slideWidth))/100),positionTarget:Math.round(p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*(100*Math.round(e.state.positionX/e.state.slideWidth))/100)}:{}),{},{scrollPosition:{x:window.pageXOffset,y:window.pageYOffset},containerInnerWidth:p(f(e.sliderContainer,e.nullifyTransformEl),e),slideWidth:p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)}),(n!==e.state.positionX||Math.abs(e.state.positionX-e.state.positionTarget)>.1)&&!t&&e.state.sliderActivated){let{relativeDelta:t,elementsOnBehind:n}=u(e,e.state.elementsOnBehind,e.state.mouseDown?e.state.endX<=e.state.startX?"right":"left":e.state.positionX>=e.state.positionTarget?"right":"left",e.options.wrapAroundMode);e.state=s(s({},e.state),{},{elementsOnBehind:n,positionTarget:e.state.positionTarget+t,positionX:e.state.positionX+t,positionSnapshot:e.state.positionSnapshot+t})}if(e.options.autoplay&&e.state.sliderActivated&&Math.abs(e.state.positionX-e.state.positionTarget)<.5&&(new Date).getTime()/1e3-e.state.lastTimeAnimated/1e3>(parseFloat(e.options.autoplay,10)?parseFloat(e.options.autoplay,10):3)&&(e.state=s(s({},e.state),{},{positionTarget:e.state.positionX-p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)})),!e.state.mouseDown&&e.state.sliderActivated){Math.abs(e.state.positionX-e.state.positionTarget)<.2&&(e.state=s(s({},e.state),{},{positionX:e.state.positionTarget,velocity:0}));let t=e.state.previousCurrentIndex;e.state=s(s({},e.state),{},{previousCurrentIndex:g(e.state.elementsOnBehind>Math.round(Math.abs(e.state.positionTarget)/p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))?Math.round(Math.abs(e.state.positionTarget)/p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))+(e.sliderContainer.children.length-e.state.elementsOnBehind):Math.abs(Math.round(Math.abs(e.state.positionTarget)/p(f(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))-e.state.elementsOnBehind),0,e.sliderContainer.children.length-1)}),t!==e.state.previousCurrentIndex&&(c(e),y(e))}e.state.positionX!==n&&e.state.sliderActivated&&(e.render(),e.state=s(s({},e.state),{},{lastTimeAnimated:(new Date).getTime()})),requestAnimationFrame(()=>e.drawLoop())}})),this.options=s(s({},this.options),{},{flexyAttributeEl:t,nullifyTransformEl:t},n),this.sliderContainer=t,(t=>{if(!t.options.pillsContainerSelector)return;let e=[...t.options.pillsContainerSelector.children];e.map(n=>n.addEventListener("click",i=>{i.preventDefault();let r=[...t.sliderContainer.children].indexOf([...t.sliderContainer.children].reduce((e,n)=>{let i=h(f(e,t.options.nullifyTransformEl),t),r=h(f(n,t.options.nullifyTransformEl),t);return Math.abs(r-h(f(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(i-h(f(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e},{getBoundingClientRect:()=>({left:1e11})})),o=e.indexOf(n);t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),n.classList.add("active");let l=Math.abs(o-r),a=Math.min(r,o)+(e.length-Math.max(r,o)),d=Math.min(l,a)*(a>=l?r>o?1:-1:r>o?-1:1),u=100*Math.round(100*t.state.positionX/p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+p(f(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*d;t.state=s(s({},t.state),{},{positionTarget:u})}))})(this),(i=this).options.leftArrow&&i.options.leftArrow.addEventListener("click",t=>{t.preventDefault(),m(i,t=>t-1)}),i.options.rightArrow&&i.options.rightArrow.addEventListener("click",t=>{t.preventDefault(),m(i,t=>t+1)}),(t=>{const e=t.sliderContainer;t.options.autoplay&&(e.addEventListener("mouseenter",()=>t.options=s(s({},t.options),{},{autoplay:!1,_autoplay:t.options.autoplay})),e.addEventListener("mouseleave",()=>{t.options=s(s({},t.options),{},{autoplay:t.options._autoplay,_autoplay:!1}),t.state=s(s({},t.state),{},{lastTimeAnimated:(new Date).getTime()})}))})(this),((t,e,n)=>{if(!t.options.hasDragAndDrop)return;const i=t.sliderContainer,r=r=>{if(!e().sliderActivated)return;if(t.options.elementsThatDoNotStartDrag.reduce((t,e)=>!!t||(r.target.matches(e)||r.target.closest(e)),!1))return;r.stopPropagation(),"touchstart"!==r.type&&r.preventDefault(),t.options.onDragStart(r),n(s(s({},e()),{},{startX:r.pageX||r.touches[0].pageX,endX:r.pageX||r.touches[0].pageX,mouseDown:!0,downScrollPosition:{x:window.pageXOffset,y:window.pageYOffset},positionSnapshot:e().positionX}));const o=r=>{if(!e().mouseDown)return;r.stopPropagation(),n(s(s({},e()),{},{mouseDown:!1})),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",o);let a=e(),d=100*a.positionX/f(i.firstElementChild,t.options.nullifyTransformEl).width;n(s(s({},e()),{},{positionTarget:f(i.firstElementChild,t.options.nullifyTransformEl).width*(Math.abs(a.endX-a.startX)>50?a.endX-a.startX<0?100*Math.floor(d/100):100*Math.ceil(d/100):100*Math.round(d/100))/100}))},l=t=>{let{pageX:i}=t;if(i||(i=t.touches[0].pageX),!e().mouseDown)return;let r=e();n(s(s({},r),{},{endX:i})),(Math.abs(r.downScrollPosition.x-r.scrollPosition.x)>3||Math.abs(r.downScrollPosition.y-r.scrollPosition.y)>5)&&o(t)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",o),document.addEventListener("touchmove",l),document.addEventListener("touchend",o)};i.addEventListener("mousedown",r),i.addEventListener("touchstart",r)})(this,()=>this.state,t=>this.state=t),[...this.sliderContainer.children].map(t=>t.addEventListener("click",t=>Math.abs(this.state.startX-this.state.endX)>3&&t.preventDefault())),this.state=s(s({},this.state),{},{elementsOnBehind:1,positionX:-1*p(f(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this),positionTarget:-1*p(f(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this),containerInnerWidth:p(f(this.sliderContainer,this.nullifyTransformEl),this),slideWidth:p(f(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this)}),this.refreshActivation(),requestAnimationFrame(()=>this.drawLoop(!0)),y(this)}destroy(){this.state=s(s({},this.state),{},{sliderActivated:"__DESTROYED__"})}refreshActivation(){let t=p(f(this.sliderContainer.children[0],this.options.nullifyTransformEl)||{width:0,height:0},this)*this.sliderContainer.children.length;this.state=s(s({},this.state),{},{sliderActivated:!!this.sliderContainer&&(-1===getComputedStyle(this.sliderContainer,":after").content.indexOf("no-flexy")&&t>p(f(this.sliderContainer,this.options.nullifyTransformEl),this)+10)}),this.state.sliderActivated?this.options.flexyAttributeEl.dataset.flexy="":(this.options.flexyAttributeEl.removeAttribute("data-flexy"),[...this.sliderContainer.children].map(t=>t.removeAttribute("style")))}render(){[...this.sliderContainer.children].map(t=>{"vertical"===this.options.orientation?t.style.transform=`translate3d(0, ${this.state.positionX}px, 0)`:t.style.transform=`translate3d(${this.state.positionX}px, 0, 0)`}),this.state.mouseDown?this.options.flexyAttributeEl.dataset.flexyDragging="":this.options.flexyAttributeEl.removeAttribute("data-flexy-dragging"),this.state.elementsOnBehind>0?([...this.sliderContainer.children].slice(0,-1*this.state.elementsOnBehind).map(t=>t.style.order=2),[...this.sliderContainer.children].slice(-1*this.state.elementsOnBehind).map(t=>t.style.order=1)):[...this.sliderContainer.children].map(t=>t.style.order=1)}}var v=n(5),E=n(0),w=n.n(E),T=n(2);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const S=(t,e)=>{if(t.flexy)return;Object(v.a)(t.querySelector(".flexy-items")),Object(v.a)(t.querySelector(".flexy-pills"));let n=t.querySelector(".flexy-pills [data-flexy]");const i=new C(t.querySelector(".flexy-items"),x(x(x({flexyAttributeEl:t,elementsThatDoNotStartDrag:[".twentytwenty-handle"],adjustHeight:!!t.querySelector(".flexy-items").dataset.height},e.event?{initialDragEvent:e.event}:{}),{},{autoplay:!!(Object.keys(t.dataset).indexOf("autoplay")>-1&&parseInt(t.dataset.autoplay,10))&&t.dataset.autoplay},t.querySelector(".flexy-pills")?{pillsContainerSelector:t.querySelector(".flexy-pills").firstElementChild}:{}),{},{leftArrow:t.querySelector(".flexy .flexy-arrow-prev"),rightArrow:t.querySelector(".flexy .flexy-arrow-next"),scaleRotateEffect:!1,onDragStart:t=>{Array.from(t.target.closest(".flexy-items").querySelectorAll(".zoomImg")).map(t=>{r()(t).stop().fadeTo(120,0)})},wrapAroundMode:"viewport"===t.dataset.wrap?"viewport":"container"},n?{pillsFlexyInstance:n}:{}));if(n){const t=new C(n,x({elementsThatDoNotStartDrag:[".twentytwenty-handle"],wrapAroundMode:"viewport"===n.dataset.wrap?"viewport":"container",leftArrow:n.parentNode.querySelector(".flexy-arrow-prev"),rightArrow:n.parentNode.querySelector(".flexy-arrow-next"),hasDragAndDrop:!1},n.closest(".thumbs-left")&&"mobile"!==Object(T.a)({withTablet:!0})?{orientation:"vertical"}:{}));n.flexy=t}t.flexy=i};w.a.on("ct:flexy:update-height",()=>{[...document.querySelectorAll(".flexy-container")].map(t=>{t.flexy&&y(t.flexy)})})}}]);