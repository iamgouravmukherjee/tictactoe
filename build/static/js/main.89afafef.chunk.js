(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=(n(14),n(1)),c=n(2),u=n(4),l=n(3),m=n(5),p=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="animated box "+this.props.idName;return r.a.createElement("div",{id:this.props.id,key:this.props.id,className:e,onClick:this.props.clickEvent})}}]),t}(a.Component)),v=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"text-wrap"},r.a.createElement("div",{className:"text my-3"},this.props.status),r.a.createElement("div",{className:"my-1 moves"},"You -> [ ",this.props.user.map(function(e){return e+" "}),"]"),r.a.createElement("div",{className:"moves"},"Computer -> [ ",this.props.computer.map(function(e){return e+" "}),"]")),r.a.createElement("div",{className:"again mt-5",onClick:this.props.playAgain}," Play Again "))}}]),t}(a.Component)),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={userMoves:[],computerMoves:[],possibilities:{1:[[2,3],[5,9],[4,7]],2:[[1,3],[5,8]],3:[[2,1],[6,9],[5,7]],4:[[1,7],[5,6]],5:[[2,8],[4,6],[3,7],[1,9]],6:[[4,5],[3,9]],7:[[1,4],[3,5],[8,9]],8:[[2,5],[7,9]],9:[[3,6],[1,5],[7,8]]},winner:"",turn:"user",filled:!1},n.playAgain=function(){n.setState({userMoves:[],computerMoves:[],winner:"",turn:"user",filled:!1})},n.showResults=function(e){console.log("".concat(e," won")),n.setState({winner:e})},n.isGameOver=function(e){console.log("called with ",e);for(var t=n.state,a=t.possibilities,r=t.userMoves,s=t.computerMoves,o=!1,i="user"===e?r:s,c=0;c<i.length;c++)for(var u=a[i[c]],l=0;l<u.length;l++){for(var m=u[l],p=0;p<m.length;p++){var v=m[p];if(console.log("checking for ".concat(v," in ").concat(i)),!i.includes(v)){o=!1;break}o=!0}if(console.log(m,o),o)return!0}return o},n.handleUserMove=function(e){if("user"===n.state.turn){console.log(n.state.userMoves.length);var t=e.target,a=n.state.userMoves,r=n.state.computerMoves;if(a.includes(parseInt(e.target.id))||r.includes(parseInt(e.target.id)))n.setState({filled:!0});else{a.push(parseInt(e.target.id)),n.setState({userMoves:a,turn:"computer",filled:!1}),t.innerHTML="X";var s=n.state.userMoves.length+n.state.computerMoves.length;if(n.state.userMoves.length>=3&&n.isGameOver("user"))return void n.showResults("user");if(s<8){var o=n.ComputerMoves();if(n.state.computerMoves.length>=3&&n.isGameOver("computer"))return void n.showResults("computer");setTimeout(function(){document.getElementById(o).innerHTML="O",n.setState({turn:"user"})},800),console.log(n.state)}else setTimeout(function(){n.setState({winner:"tie"})},100)}}},n.ComputerMoves=function(){for(var e=Math.floor(9*Math.random())+1,t=n.state,a=t.computerMoves,r=t.userMoves;a.includes(e)||r.includes(e);)e=Math.floor(9*Math.random())+1;return a.push(e),n.setState({computerMoves:a}),e},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.state.winner){var t=this.state.winner;return"user"===t?r.a.createElement(v,{playAgain:this.playAgain,user:this.state.userMoves,computer:this.state.computerMoves,status:"User Won"}):"computer"===t?r.a.createElement(v,{playAgain:this.playAgain,user:this.state.userMoves,computer:this.state.computerMoves,status:"Computer Won"}):r.a.createElement(v,{playAgain:this.playAgain,user:this.state.userMoves,computer:this.state.computerMoves,status:"Game tied"})}var n="user"===this.state.turn?"Your":"Computer's",a={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"},s=[1,2,3,4,5,6,7,8,9].map(function(t){return r.a.createElement("div",{className:"col-4 px-0",key:t},r.a.createElement(p,{id:t,idName:a[t],clickEvent:e.handleUserMove}))});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mt-5 heading"},"Tic Tac Toe "),r.a.createElement("div",{className:"row boxWrap mt-4"},s),r.a.createElement("div",{className:"mt-3 turn"},this.state.filled?"Box Already Filled !!":n+" turn")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("Main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.89afafef.chunk.js.map