(window.webpackJsonpweek5_90sec_game=window.webpackJsonpweek5_90sec_game||[]).push([[0],{36:function(e,t,n){e.exports=n(86)},40:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var o=n(6),a=n.n(o),i=n(35),c=n.n(i),r=(n(40),n(10)),d=n(22),u=n(18),m=n(19),s=n(23),v=n(20),h=n(24),l=n(8),w=n(17),k=n.n(w),g=n(21),y=n.n(g),b=(a.a.Component,function(){var e=y()("".concat("/Week5_90sec_game","/images/img_BG.png")),t=Object(d.a)(e,1)[0];return a.a.createElement(l.Image,{image:t,x:window.innerWidth/2-375,y:0,width:750,height:window.innerHeight})}),f=function(e){var t=e.moveX,n=void 0===t?0:t,o=e.moveY,i=void 0===o?0:o,c=y()("".concat("/Week5_90sec_game","/images/duck_normal_01.png")),r=Object(d.a)(c,1)[0];return a.a.createElement(l.Image,{image:r,width:180,height:160,x:window.innerWidth/2-90+n,y:window.innerHeight/2+200+i})},p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(v.a)(t).call(this,e))).state={moveX:0,moveY:0},n.duckKeyboardMove=n.duckKeyboardMove.bind(Object(r.a)(n)),n.duckGoFoward=n.duckGoFoward.bind(Object(r.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(t){e.duckKeyboardMove(t)}),setInterval(this.duckGoFoward,1e3)}},{key:"componentWillMount",value:function(){var e=this;document.removeEventListener("keyup",function(t){e.duckKeyboardMove(t)})}},{key:"duckKeyboardMove",value:function(e){var t=this.state.moveX;(console.log(e),39===e.keyCode||37===e.keyCode)&&(t+=50*(39===e.keyCode?1:-1));this.setState({moveX:t})}},{key:"duckGoFoward",value:function(){var e=this.state.moveY;e-=80,this.setState({moveY:e})}},{key:"render",value:function(){return a.a.createElement(l.Stage,{width:window.innerWidth,height:window.innerHeight},a.a.createElement(l.Layer,null,a.a.createElement(b,null),a.a.createElement(f,{moveX:this.state.moveX,moveY:this.state.moveY})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.f9ef50aa.chunk.js.map