(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a.p+"static/media/BG1.5b931fc6.png"},123:function(e,t,a){e.exports=a.p+"static/media/BG2.4ca3ca0d.png"},124:function(e,t,a){e.exports=a.p+"static/media/BG3.bb846d3d.png"},125:function(e,t,a){e.exports=a.p+"static/media/BG4.619dd64d.png"},126:function(e,t,a){e.exports=a.p+"static/media/BG5.b1217cd4.png"},129:function(e,t,a){e.exports=a(308)},134:function(e,t,a){},305:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"onLobbyCreated",function(){return ve}),a.d(n,"onLobbyJoined",function(){return Ee}),a.d(n,"onLobbyFailed",function(){return we}),a.d(n,"onGameStarting",function(){return Ce}),a.d(n,"onGameJoined",function(){return xe});var r={};a.r(r),a.d(r,"events",function(){return Ae}),a.d(r,"send",function(){return Ne}),a.d(r,"createLobby",function(){return Pe}),a.d(r,"joinLobby",function(){return Le}),a.d(r,"takeSlot",function(){return Je}),a.d(r,"setReady",function(){return Be}),a.d(r,"startGame",function(){return We}),a.d(r,"setName",function(){return He}),a.d(r,"reconnect",function(){return Ue});var c=a(0),o=a.n(c),s=a(31),i=a.n(s),l=(a(134),a(19)),u=a(20),d=a(23),p=a(21),b=a(24),h=a(312),y=a(314),m=a(313),f=a(315),O=a(8),j=a.n(O),v=a(26),k=a(27),E=a(7),g=a(18),w=a(22),S=a(28),C=a.n(S),R=a(29),x=a.n(R),G=a(116),A=a.n(G),N=a(34),I=a.n(N),P=a(35),T=a.n(P),L=T()(),D="ws://disastles.herokuapp.com/api/ws",J=null,_=null;M();var B={init:function(){return _},send:function(e){e.action||console.error("No action specified in",e);J.send(JSON.stringify(e))},reconnect:M,onEvent:L.listen};function M(){J=new WebSocket(D),_=new Promise(function(e,t){J.onopen=e}),J.onmessage=W}function W(e){try{var t=JSON.parse(e.data)}catch(a){console.error(a.message||a),console.error("Failed to parse server message: "+e.data),console.error(e)}L.broadcast(t)}var F=a(40),H=a(32),z=a(3),U=a(30),Y={};function V(e,t){!function(e,t){Y[e]||(Y[e]=T()());Y[e].listen(function(e){delete(e=Object(z.a)({},e)).event,Oe.dispatch(t(e))})}(t,Object(U.partial)($,e,t))}function $(e,t,a){return{type:e,data:a}}var q="CARD_REVEALED",K="JOINED_GAME",Q="CARD_DRAWN_TO_SHOP",X="CARD_DISCARDED",Z="TURN_CHANGED",ee="ROOM_BUILT";V(K,"JoinedGame"),V(Q,"CardDrawnToShop"),V(X,"CardDiscarded"),V(Z,"TurnChanged"),V(q,"CardRevealed"),V(ee,"RoomBuilt");var te="HELLO",ae="NAME_CHANGED",ne="ACTIONS_CHANGED";V(te,"Hello"),V(ne,"ActionsChanged");var re="SELECT_CARD";var ce={inGame:!1,drawPileSize:0,players:[],sacrifices:[],seed:0,castles:{},shop:[],playerCards:[],disasters:[],discardPile:[],currentTurn:null,roundTurn:null,actions:[],selectedCard:null};var oe="LOBBY_SNAPSHOT",se="PLAYER_JOINED",ie="PLAYER_LEAVE",le="PLAYER_SLOT_CHANGED",ue="STATUS_CHANGED",de="ALL_READY";var pe={id:null,isReady:!1,allReady:!1,playerStatus:{},players:[]};var be={knownCards:{100:"asdf",101:"fdsa"}};var he=a(114),ye={playerId:"test",name:a.n(he)()(),playerNames:{}};var me=Object(F.c)({game:function(e,t){switch(e||(e=ce),t.type){case ne:e=Object(z.a)({},e,{actions:t.data.actions});break;case K:console.log(t.data),e=Object(z.a)({},e,{inGame:!0,drawPileSize:t.data.snapshot.drawPileSize,players:t.data.snapshot.players,sacrifices:t.data.snapshot.sacrifices,seed:t.data.snapshot.seed,castles:{},shop:t.data.snapshot.shop,playerCards:t.data.snapshot.playerCards,disasters:t.data.snapshot.disasters,discardPile:t.data.snapshot.discardPile,currentTurn:t.data.snapshot.currentTurn,roundTurn:t.data.snapshot.roundTurn}),t.data.snapshot.castles.forEach(function(t){e.castles[t.player]=t});break;case Q:console.log("Added to shop!"),(e=Object(z.a)({},e,{shop:Object(H.a)(e.shop),drawPileSize:t.data.drawPileSize})).shop.push(t.data.card);break;case X:console.log("card discarded",t),(e=Object(z.a)({},e,{discardPile:Object(H.a)(e.discardPile),discardPileSize:t.data.discardPileSize,shop:Object(H.a)(e.shop)})).discardPile.push({card:t.data.card}),e.shop=e.shop.filter(function(e){return e!==t.data.card});break;case re:e=Object(z.a)({},e,{selectedCard:t.card});break;case ee:console.log(t.data);var a=t.data.castleOwner,n=Object(z.a)({},t.data);delete n.castleOwner,(e=Object(z.a)({},e,{castles:Object(z.a)({},e.castles,Object(k.a)({},a,Object(z.a)({},e.castles[a],{nodes:Object(H.a)(e.castles[a].nodes).concat([n])}))),shop:Object(H.a)(e.shop)})).shop=e.shop.filter(function(e){return e!==n.card});break;case Z:console.log("turn change",t)}return e},lobby:function(e,t){switch(e||(e=pe),t.type){case te:e=Object(z.a)({},e,{playerId:t.data.playerId,playerStatus:Object(z.a)({},e.playerStatus,Object(k.a)({},t.data.playerId,{ready:!1}))});break;case se:(e=Object(z.a)({},e,{playerStatus:Object(z.a)({},e.playerStatus,Object(k.a)({},t.player.player,{ready:!1})),players:Object(H.a)(e.players).concat([t.player.player]),slots:Object(H.a)(e.slots)})).slots[t.player.slot]=t.player.player;break;case ie:(e=Object(z.a)({},e,{playerStatus:Object(z.a)({},e.playerStatus),players:Object(H.a)(e.players),slots:Object(H.a)(e.slots)})).slots[t.data.slot]=null,e.players.splice(e.players.indexOf(t.data.player),1),delete e.playerStatus[t.data.player];break;case oe:console.log("snapshot",t),(e=Object(z.a)({},e,{players:t.snapshot.players,id:t.snapshot.id,settings:t.snapshot.settings,slots:t.snapshot.slots,playerStatus:{}})).players.forEach(function(t){e.playerStatus[t]={ready:!1}});break;case le:(e=Object(z.a)({},e,{slots:Object(H.a)(e.slots)})).slots[t.data.from]=null,e.slots[t.data.to]=t.data.player;break;case ue:e=Object(z.a)({},e,{playerStatus:Object(z.a)({},e.playerStatus,Object(k.a)({},t.player,{ready:t.ready,state:t.status}))}),t.player===e.playerId&&(e.isReady=t.ready);break;case de:e=Object(z.a)({},e,{allReady:t.allReady})}return e},cards:function(e,t){switch(e||(e=be),t.type){case q:e=Object(z.a)({},e,{knownCards:Object(z.a)({},e.knownCards,Object(k.a)({},t.data.card,t.data.asset))});break;case K:console.log(t.data),e=Object(z.a)({},e,{knownCards:Object(z.a)({},e.knownCards)}),Object.keys(t.data.snapshot.deck).forEach(function(a){var n=t.data.snapshot.deck[a];n.asset&&(e.knownCards[a]=n.asset)})}return e},global:function(e,t){switch(e||(e=ye),t.type){case ne:e=Object(z.a)({},e,{actions:t.data.actions});break;case te:console.log("hello",t),sessionStorage.token=t.data.reconnectionToken,e=Object(z.a)({},e,{playerId:t.data.playerId,reconnectionToken:t.data.reconnectionToken,playerNames:Object(z.a)({},e.playerNames,Object(k.a)({},t.data.playerId,e.name))});break;case oe:e=Object(z.a)({},e,{playerNames:Object(z.a)({},e.playerNames)}),t.snapshot.players.forEach(function(t){console.log(t),e.playerNames[t.id]=t.name});break;case ae:e=Object(z.a)({},e,{playerNames:Object(z.a)({},e.playerNames,Object(k.a)({},t.data.player,t.data.name))});break;case ie:delete(e=Object(z.a)({},e,{playerNames:Object(z.a)({},e.playerNames)})).playerNames[t.data.player]}return e}}),fe=a(115),Oe=Object(F.d)(me,Object(F.a)(fe.a)),je=T()(),ve=je.listen,ke=T()(),Ee=ke.listen,ge=T()(),we=ge.listen,Se=T()(),Ce=Se.listen,Re=T()(),xe=Re.listen,Ge=!1;B.onEvent(function e(t){if(Array.isArray(t))return t.map(e);var a,n,r=function(e){return!!Y[e.event]&&(Y[e.event].broadcast(e),!0)}(t);switch(t.event){case"NameChanged":Oe.dispatch({type:ae,data:t});break;case"Disconnect":!function(e){if(e.reason.startsWith("lobby does not exist"))return void ge.broadcast(404);console.log("Unknown disconnect reason:",e.reason)}(t),B.reconnect();break;case"Ping":break;case"LobbyCreated":je.broadcast(t.id);break;case"JoinedLobby":Oe.dispatch((n=t.snapshot,{type:oe,snapshot:n})),ke.broadcast(t.snapshot);break;case"PlayerDisconnected":delete t.event,Oe.dispatch(function(e){return{type:ie,data:e}}(t));break;case"PlayerJoined":delete t.event,Oe.dispatch({type:se,player:t});break;case"SlotSwitched":delete t.event,Oe.dispatch({type:le,data:t});break;case"ActionsChanged":!function(e){var t=!1;e.actions.map(function(e){switch(e.action){case"StartGame":t=!0}}),console.log(e.actions),Ge!==t&&(Ge=t,Oe.dispatch(function(e){return{type:de,allReady:e}}(t)))}(t);break;case"StatusChanged":delete t.event,Oe.dispatch((a=t,Object(z.a)({type:ue},a)));break;case"GameStarting":Se.broadcast({});break;case"JoinedGame":Re.broadcast({});break;default:if(r)break;console.log("Unknown event type:",t.event),console.log(t)}});var Ae=n;function Ne(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:B.send(t);case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Pe(){return Te.apply(this,arguments)}function Te(){return(Te=Object(v.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:return e.abrupt("return",new Promise(function(e,t){Ve(ve,e),B.send({action:"CreateLobby"})}));case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Le(e){return De.apply(this,arguments)}function De(){return(De=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:return e.abrupt("return",new Promise(function(e,a){Ve(Ee,e),B.send({action:"JoinLobby",id:t})}));case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Je(e){return _e.apply(this,arguments)}function _e(){return(_e=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:return e.abrupt("return",new Promise(function(e,a){Ve(Ee,e),B.send({action:"TakeSlot",slot:t})}));case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Be(e){return Me.apply(this,arguments)}function Me(){return(Me=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:B.send({action:"SetStatus",status:"",ready:t});case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function We(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:B.send({action:"StartGame"});case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function He(e){return ze.apply(this,arguments)}function ze(){return(ze=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:B.send({action:"SetName",name:t});case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Ue(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.init();case 2:B.send({action:"Reconnect",token:t});case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Ve(e,t){var a=e(function(){a(),t.apply(this,arguments)});return a}var $e=r,qe=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){return function(a){e.setState(Object(k.a)({},t,a.target.value))}},e.onNewGame=e.onNewGame.bind(Object(E.a)(Object(E.a)(e))),e.onJoinGame=e.onJoinGame.bind(Object(E.a)(Object(E.a)(e))),e.state={lobbyId:""},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onNewGame",value:function(){var e=Object(v.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Start new game or something..."),e.next=3,$e.createLobby();case 3:return t=e.sent,e.next=6,$e.joinLobby(t);case 6:this.props.history.push("/lobby/"+t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onJoinGame",value:function(){var e=Object(v.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.history.push("/lobby/"+this.state.lobbyId);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(I.a,null,"This is a lobby view!"),o.a.createElement(x.a,{onClick:this.onNewGame,variant:"outlined"},"New Game"),o.a.createElement(A.a,{id:"lobby-id",label:"Lobby ID",value:this.state.lobbyId,onChange:this.handleChange("lobbyId")}),o.a.createElement(x.a,{onClick:this.onJoinGame,variant:"outlined"},"Join Game"))}}]),t}(c.Component),Ke=C()({}),Qe=Object(g.withStyles)(function(e){return{root:{}}})(Object(w.b)(Ke)(qe)),Xe=a(36),Ze=a(117),et=a.n(Ze),tt=a(118),at=a(121),nt=a.n(at),rt=a(120),ct=a.n(rt),ot=a(119),st=a.n(ot),it=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this))).state={name:e.name},a.renderPlayerSlot=a.renderPlayerSlot.bind(Object(E.a)(Object(E.a)(a))),a.takeSlot=a.takeSlot.bind(Object(E.a)(Object(E.a)(a))),a.toggleReady=a.toggleReady.bind(Object(E.a)(Object(E.a)(a))),a.startGame=a.startGame.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("props",e),e.name!==this.props.name&&this.setState({name:e.name})}},{key:"componentDidMount",value:function(){var e=this;if(this.unlisten=et()(),this.unlisten($e.events.onLobbyFailed(function(){return e.props.history.push("/lobby")})),this.unlisten($e.events.onGameJoined(function(){return e.props.history.push("/game/"+e.props.reconnectionToken)})),this.unlisten(Object(tt.timeout)(function(){return $e.setName(e.state.name)},1e3)),!this.props.lobbyId){var t=this.props.match.params.id;console.log("We're not in a lobby yet!",t,this.state.name),$e.joinLobby(t)}}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"takeSlot",value:function(){var e=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.takeSlot(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"toggleReady",value:function(){$e.setReady(!this.props.isReady)}},{key:"startGame",value:function(){$e.startGame()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(Xe.If,{condition:!!this.props.lobbyId,render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{variant:"h3"},e.props.lobbyId),o.a.createElement(I.a,null,"You're in a lobby!"),e.props.players.map(e.renderPlayerSlot),o.a.createElement("br",null),o.a.createElement(x.a,{variant:"contained",onClick:e.toggleReady},o.a.createElement(Xe.If,{condition:!e.props.isReady,render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(st.a,null)," Not Ready")}}),o.a.createElement(Xe.If,{condition:!!e.props.isReady,render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ct.a,null)," Ready!")}})),o.a.createElement(Xe.If,{condition:!!e.props.allReady,render:function(){return o.a.createElement(x.a,{variant:"contained",onClick:e.startGame},"Start Game!")}}))}}),o.a.createElement(Xe.If,{condition:!this.props.lobbyId,render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement(nt.a,{size:128}),o.a.createElement(I.a,{variant:"subheading"},"Joining lobby...")))}}))}},{key:"renderPlayerSlot",value:function(e,t){if(e){var a=this.props.playerNames[e]||e;return o.a.createElement("div",{key:t},"Player ",t+1,": ",a)}return o.a.createElement("div",{key:t},"Player ",t+1,":",o.a.createElement(x.a,{onClick:Object(U.partial)(this.takeSlot,t)},"Take slot"))}}]),t}(c.Component),lt=C()({reconnectionToken:"global.reconnectionToken",lobbyId:"lobby.id",players:"lobby.slots",isReady:"lobby.isReady",allReady:"lobby.allReady",name:"global.name",playerNames:"global.playerNames"}),ut=Object(g.withStyles)(function(e){return{root:{}}})(Object(w.b)(lt)(it)),dt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={nodes:[],actions:[]},a.renderRow=a.renderRow.bind(Object(E.a)(Object(E.a)(a))),a.renderCell=a.renderCell.bind(Object(E.a)(Object(E.a)(a))),a.sendAction=a.sendAction.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("Getting new castles",e),this.setState(Object(z.a)({},e.castles[e.playerId||"test"],{actions:e.actions.filter(function(t){return"BuildRoom"!==t.action||t.card===e.selectedCard})}))}},{key:"sendAction",value:function(){var e=Object(v.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(z.a)({},t,{effects:[]}),$e.send(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state.actions);var e=0,t=0,a=0,n=0,r={};this.state.nodes.forEach(function(c){e=Math.min(e,c.x),t=Math.max(t,c.x),a=Math.min(a,c.y),n=Math.max(n,c.y),r[c.x]||(r[c.x]={}),r[c.x][c.y]=c});for(var c=++t- --e+1,s=++n- --a+1,i=[],l=0;l<s;++l){for(var u=[],d=0;d<c;++d)r[d+e]?u.push(r[d+e][l+a]):u.push(null);i.push(u)}return console.log(r,c,s,i),o.a.createElement("div",null,i.map(Object(U.partial)(this.renderRow,e,a)))}},{key:"renderRow",value:function(e,t,a,n){var r=n+t;return o.a.createElement("div",{key:r},a.map(Object(U.partial)(this.renderCell,r,e)))}},{key:"renderCell",value:function(e,t,a,n){var r=this,c=n+t,s=c+":"+e,i=this.state.actions.reduce(function(t,n){return n.x===c&&n.y===e?n:a&&n.room===a.card?n:t},!1);return!i&&a&&(i=this.props.actions.reduce(function(e,t){return t.card===a.card?t:e},null)),o.a.createElement("div",{key:s,className:this.props.classes.node},o.a.createElement(Xe.If,{condition:!a,render:function(){return o.a.createElement(o.a.Fragment,null,"Empty room!")}}),o.a.createElement(Xe.If,{condition:!!a,render:function(){return o.a.createElement(o.a.Fragment,null,r.props.cards[a.card])}}),o.a.createElement(Xe.If,{condition:!!i,render:function(){return o.a.createElement(x.a,{onClick:Object(U.partial)(r.sendAction,i)},i.action)}}))}}]),t}(c.Component),pt=C()({selectedCard:"game.selectedCard",actions:"game.actions",playerId:"global.playerId",castles:"game.castles",cards:"cards.knownCards"}),bt=Object(g.withStyles)(function(e){return{root:{},node:{display:"inline-block",width:200,height:200}}})(Object(w.b)(pt)(dt)),ht=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).renderCard=e.renderCard.bind(Object(E.a)(Object(E.a)(e))),e.selectCard=e.selectCard.bind(Object(E.a)(Object(E.a)(e))),e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"selectCard",value:function(e){this.props.dispatch(function(e){return{type:re,card:e}}(e))}},{key:"render",value:function(){var e=this.props.shop||[];return o.a.createElement("div",null,e.map(this.renderCard))}},{key:"renderCard",value:function(e){var t=!1;return this.props.actions.forEach(function(a){"BuildRoom"==a.action&&a.card===e&&(t=!0)}),console.log(e),t?o.a.createElement(x.a,{onClick:Object(U.partial)(this.selectCard,e),key:e},this.props.cards[e]):o.a.createElement(x.a,{disabled:!0,key:e},this.props.cards[e])}}]),t}(c.Component),yt=C()({cards:"cards.knownCards",actions:"game.actions",shop:"game.shop"}),mt=Object(g.withStyles)(function(e){return{root:{},card:{display:"inline-block"}}})(Object(w.b)(yt)(ht)),ft=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={actions:[]},e.sendAction=e.sendAction.bind(Object(E.a)(Object(E.a)(e))),e.renderAction=e.renderAction.bind(Object(E.a)(Object(E.a)(e))),e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("actions for actions",e.actions),this.setState({actions:e.actions.filter(function(e){switch(e.action){case"SkipText":case"SkipTurn":case"SkipMultiChoice":case"UnmarkRooms":case"AcceptSacrifice":return!0;default:return!1}})})}},{key:"sendAction",value:function(e){$e.send(e)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.actions.map(this.renderAction))}},{key:"renderAction",value:function(e){return o.a.createElement(x.a,{key:e.action,variant:"contained",onClick:Object(U.partial)(this.sendAction,e)},e.action)}}]),t}(c.Component),Ot=C()({actions:"game.actions"}),jt=Object(g.withStyles)(function(e){return{root:{}}})(Object(w.b)(Ot)(ft)),vt=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"this is a minimap!")}}]),t}(c.Component),kt=C()({}),Et=Object(g.withStyles)(function(e){return{root:{}}})(Object(w.b)(kt)(vt)),gt=a(122),wt=a.n(gt),St=a(123),Ct=a.n(St),Rt=a(124),xt=a.n(Rt),Gt=a(125),At=a.n(Gt),Nt=a(126),It=a.n(Nt),Pt=[wt.a,Ct.a,xt.a,At.a,It.a][~~(5*Math.random())],Tt=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.inGame||$e.reconnect(this.props.match.params.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.classes.root},o.a.createElement(mt,null),o.a.createElement(jt,null),"This is a game!",o.a.createElement(bt,null),o.a.createElement(Et,null))}}]),t}(c.Component),Lt=C()({inGame:"game.inGame"}),Dt=Object(g.withStyles)(function(e){return{root:{width:"100%",minHeight:"100%",backgroundImage:"url("+Pt+")",backgroundSize:"cover"}}})(Object(w.b)(Lt)(Tt)),Jt=(a(305),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(h.a,null,o.a.createElement(f.a,{exact:!0,path:"/",render:function(){return o.a.createElement(y.a,{to:"/lobby"})}}),o.a.createElement(f.a,{exact:!0,path:"/lobby",component:Qe}),o.a.createElement(f.a,{path:"/lobby/:id",component:ut}),o.a.createElement(f.a,{path:"/game/:id",component:Dt})))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _t=a(127),Bt=a.n(_t);i.a.render(o.a.createElement(w.a,{store:Oe},o.a.createElement(o.a.Fragment,null,o.a.createElement(Bt.a,null),o.a.createElement(Jt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,2,1]]]);
//# sourceMappingURL=main.8c2e33ab.chunk.js.map