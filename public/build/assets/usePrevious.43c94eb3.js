import{r as v,j as y,a,L as O}from"./app.e7c842fd.js";import{P as f}from"./index.173378b6.js";import{_ as D,e as I,a as E,b as Y,i as P,c as A,d as M,f as B,g as R,h as C,s as $,j as H,k as K,l as N,m as k,n as F,o as z}from"./_baseAssignValue.88b5eb69.js";var G=["color","size","title"];function U(t,n){if(t==null)return{};var r=W(t,n),e,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)e=s[o],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(r[e]=t[e]))}return r}function W(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,s;for(s=0;s<e.length;s++)o=e[s],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}var _=v.exports.forwardRef(function(t,n){var r=t.color,e=t.size,o=t.title,s=U(t,G);return y("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:e,height:e,fill:r,...s,children:[o?a("title",{children:o}):null,a("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"})]})});_.propTypes={color:f.string,size:f.oneOfType([f.string,f.number]),title:f.string};_.defaultProps={color:"currentColor",size:"1em",title:null};var j=_;function Je({href:t,className:n,icon:r}){return a("div",{className:"fixed bottom-20  right-6 drop-shadow-lg hover:scale-110 transition-all",children:a(O,{href:t,className:"btn btn-circle "+n,as:"a",children:r})})}function Qe(){return a("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2",children:y("div",{className:"flex flex-col items-center gap-5 text-slate-500",children:[a(j,{className:"text-5xl"}),a("h1",{children:"Tidak ada data"})]})})}var q=D,V=I,J=Object.prototype,Q=J.hasOwnProperty;function X(t,n,r){var e=t[n];(!(Q.call(t,n)&&V(e,r))||r===void 0&&!(n in t))&&q(t,n,r)}var Z=X,ee=Z,te=E,re=Y,S=P,ne=A;function oe(t,n,r,e){if(!S(t))return t;n=te(n,t);for(var o=-1,s=n.length,i=s-1,l=t;l!=null&&++o<s;){var u=ne(n[o]),c=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(o!=i){var p=l[u];c=e?e(p,u,l):void 0,c===void 0&&(c=S(p)?p:re(n[o+1])?[]:{})}ee(l,u,c),l=l[u]}return t}var se=oe,ie=M,le=se,ae=E;function ue(t,n,r){for(var e=-1,o=n.length,s={};++e<o;){var i=n[e],l=ie(t,i);r(l,i)&&le(s,ae(i,t),l)}return s}var ce=ue,he=B,pe=he(Object.getPrototypeOf,Object),fe=pe,de=R,ve=fe,ge=C,me=$,ye=Object.getOwnPropertySymbols,_e=ye?function(t){for(var n=[];t;)de(n,ge(t)),t=ve(t);return n}:me,we=_e;function Se(t){var n=[];if(t!=null)for(var r in Object(t))n.push(r);return n}var be=Se,Te=P,Ee=H,Pe=be,Le=Object.prototype,xe=Le.hasOwnProperty;function Oe(t){if(!Te(t))return Pe(t);var n=Ee(t),r=[];for(var e in t)e=="constructor"&&(n||!xe.call(t,e))||r.push(e);return r}var De=Oe,Ie=K,Ye=De,Ae=N;function Me(t){return Ae(t)?Ie(t,!0):Ye(t)}var Be=Me,Re=k,Ce=we,$e=Be;function He(t){return Re(t,$e,Ce)}var Ke=He,Ne=F,ke=z,Fe=ce,ze=Ke;function Ge(t,n){if(t==null)return{};var r=Ne(ze(t),function(e){return[e]});return n=ke(n),Fe(t,r,function(e,o){return n(e,o[0])})}var Xe=Ge,m=function(t,n){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])},m(t,n)};function Ue(t,n){m(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var d=function(){return d=Object.assign||function(n){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},d.apply(this,arguments)};function We(t,n,r,e){var o,s=!1,i=0;function l(){o&&clearTimeout(o)}function u(){l(),s=!0}typeof n!="boolean"&&(e=r,r=n,n=void 0);function c(){var p=this,w=Date.now()-i,L=arguments;if(s)return;function g(){i=Date.now(),r.apply(p,L)}function x(){o=void 0}e&&!o&&g(),l(),e===void 0&&w>t?g():n!==!0&&(o=setTimeout(e?x:g,e===void 0?t-w:t))}return c.cancel=u,c}var h={Pixel:"Pixel",Percent:"Percent"},b={unit:h.Percent,value:.8};function T(t){return typeof t=="number"?{unit:h.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:h.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:h.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),b):(console.warn("scrollThreshold should be string or number"),b)}var Ze=function(t){Ue(n,t);function n(r){var e=t.call(this,r)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(o){e.lastScrollTop||(e.dragging=!0,o instanceof MouseEvent?e.startY=o.pageY:o instanceof TouchEvent&&(e.startY=o.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(o){!e.dragging||(o instanceof MouseEvent?e.currentY=o.pageY:o instanceof TouchEvent&&(e.currentY=o.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(o){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(o)},0);var s=e.props.height||e._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var i=e.props.inverse?e.isElementAtTop(s,e.props.scrollThreshold):e.isElementAtBottom(s,e.props.scrollThreshold);i&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=s.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:r.dataLength},e.throttledOnScrollListener=We(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return n.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},n.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},n.prototype.componentDidUpdate=function(r){this.props.dataLength!==r.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},n.getDerivedStateFromProps=function(r,e){var o=r.dataLength!==e.prevDataLength;return o?d(d({},e),{prevDataLength:r.dataLength}):null},n.prototype.isElementAtTop=function(r,e){e===void 0&&(e=.8);var o=r===document.body||r===document.documentElement?window.screen.availHeight:r.clientHeight,s=T(e);return s.unit===h.Pixel?r.scrollTop<=s.value+o-r.scrollHeight+1:r.scrollTop<=s.value/100+o-r.scrollHeight+1},n.prototype.isElementAtBottom=function(r,e){e===void 0&&(e=.8);var o=r===document.body||r===document.documentElement?window.screen.availHeight:r.clientHeight,s=T(e);return s.unit===h.Pixel?r.scrollTop+o>=r.scrollHeight-s.value:r.scrollTop+o>=s.value/100*r.scrollHeight},n.prototype.render=function(){var r=this,e=d({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return a("div",{style:s,className:"infinite-scroll-component__outerdiv",children:y("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(i){return r._infScroll=i},style:e,children:[this.props.pullDownToRefresh&&a("div",{style:{position:"relative"},ref:function(i){return r._pullDown=i},children:a("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},n}(v.exports.Component);function et(t){var n=v.exports.useRef();return v.exports.useEffect(function(){n.current=t}),n.current}export{Je as B,Qe as E,Ze as I,Xe as p,et as u};
