(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=n(4),r=n(5),o=n(7),i=n(6),u=n(1),p=n.n(u),y=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={key:""},e.handleKeyUp=function(t){e.setState({key:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("p",{className:"App__message",children:this.state.key?"The last pressed key is [".concat(this.state.key,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);s.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3950b8eb.chunk.js.map