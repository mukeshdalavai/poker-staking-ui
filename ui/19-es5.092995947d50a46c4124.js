function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"22g1":function(e,n,t){"use strict";t.d(n,"a",(function(){return S}));var o=t("3Pt+"),r=t("fXoL"),i=t("TEn/"),a=t("SSuX"),c=t("ofXK");function l(e,n){if(1&e&&(r.Rb(0),r.Tb(1,"small",13),r.Ac(2),r.Sb(),r.Qb()),2&e){var t=r.fc().$implicit;r.Cb(2),r.Bc(t.message)}}function b(e,n){if(1&e&&(r.Tb(0,"div"),r.yc(1,l,3,1,"ng-container",12),r.Sb()),2&e){var t=n.$implicit,o=r.fc();r.Cb(1),r.lc("ngIf",o.formInputFields.controls.platform.hasError(t.type)&&(o.formInputFields.controls.platform.dirty||o.formInputFields.controls.platform.touched))}}function s(e,n){if(1&e&&(r.Rb(0),r.Tb(1,"small",13),r.Ac(2),r.Sb(),r.Qb()),2&e){var t=r.fc().$implicit;r.Cb(2),r.Bc(t.message)}}function u(e,n){if(1&e&&(r.Tb(0,"div"),r.yc(1,s,3,1,"ng-container",12),r.Sb()),2&e){var t=n.$implicit,o=r.fc();r.Cb(1),r.lc("ngIf",o.formInputFields.controls.tName.hasError(t.type)&&(o.formInputFields.controls.tName.dirty||o.formInputFields.controls.tName.touched))}}function m(e,n){if(1&e&&(r.Rb(0),r.Tb(1,"small",13),r.Ac(2),r.Sb(),r.Qb()),2&e){var t=r.fc().$implicit;r.Cb(2),r.Bc(t.message)}}function f(e,n){if(1&e&&(r.Tb(0,"div"),r.yc(1,m,3,1,"ng-container",12),r.Sb()),2&e){var t=n.$implicit,o=r.fc();r.Cb(1),r.lc("ngIf",o.formInputFields.controls.buyIn.hasError(t.type)&&(o.formInputFields.controls.buyIn.dirty||o.formInputFields.controls.buyIn.touched))}}function p(e,n){if(1&e&&(r.Rb(0),r.Tb(1,"small",13),r.Ac(2),r.Sb(),r.Qb()),2&e){var t=r.fc().$implicit;r.Cb(2),r.Bc(t.message)}}function d(e,n){if(1&e&&(r.Tb(0,"div"),r.yc(1,p,3,1,"ng-container",12),r.Sb()),2&e){var t=n.$implicit,o=r.fc();r.Cb(1),r.lc("ngIf",o.formInputFields.controls.markUp.hasError(t.type)&&(o.formInputFields.controls.markUp.dirty||o.formInputFields.controls.markUp.touched))}}function g(e,n){if(1&e&&(r.Rb(0),r.Tb(1,"small",13),r.Ac(2),r.Sb(),r.Qb()),2&e){var t=r.fc().$implicit;r.Cb(2),r.Bc(t.message)}}function y(e,n){if(1&e&&(r.Tb(0,"div"),r.yc(1,g,3,1,"ng-container",12),r.Sb()),2&e){var t=n.$implicit,o=r.fc();r.Cb(1),r.lc("ngIf",o.formInputFields.controls.stakeAvailable.hasError(t.type)&&(o.formInputFields.controls.stakeAvailable.dirty||o.formInputFields.controls.stakeAvailable.touched))}}var S=function(){var e=function(){function e(n,t,o){_classCallCheck(this,e),this.formBuilder=n,this.modalController=t,this.playerService=o,this.errorMessages={platform:[{type:"required",message:"platform is required"},{type:"pattern",message:" please enter a valid platform"}],tName:[{type:"required",message:"name of the tournament is required"},{type:"minlength",message:" please enter a valid name having more than 4 characters"},{type:"pattern",message:"please enter a valid name"}],buyIn:[{type:"required",message:"please enter the value"},{type:"pattern",message:"Character found..."},{type:"maxlength",message:"Length exceeded"},{type:"minlength",message:"Length insufficient"}],markUp:[{type:"required",message:" please enter the value"}],stakeAvailable:[{type:"required",message:" please enter the value"}]}}return _createClass(e,[{key:"ngOnInit",value:function(){this.formInputFields=this.formBuilder.group({platform:["",[o.o.required]],tName:["",[o.o.required,o.o.minLength(4)]],buyIn:["",[o.o.required,o.o.min(0),o.o.pattern("^[0-9]+$")]],markUp:["",[o.o.required,o.o.min(1),o.o.pattern("^[0-9]+$")]],stakeAvailable:["",[o.o.required,o.o.min(0),o.o.max(100),o.o.pattern("^[0-9]+$")]]})}},{key:"submit",value:function(){var e=this;console.log("Added new staff.."),console.log(this.formInputFields);var n={username:sessionStorage.getItem("username"),tournament:this.formInputFields.value};console.log(n),this.playerService.addTournament(n).subscribe((function(n){e.modalController.dismiss({added:!0})}))}},{key:"onClose",value:function(){this.modalController.dismiss()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Nb(o.c),r.Nb(i.F),r.Nb(a.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-add-tournament"]],decls:48,vars:6,consts:[[1,"ion-text-center"],[1,"ion-padding"],[3,"formGroup"],["size","8","offset","2"],["position","floating"],["formControlName","platform"],[4,"ngFor","ngForOf"],["formControlName","tName"],["formControlName","buyIn"],["formControlName","markUp"],["formControlName","stakeAvailable"],[1,"ion-text-capitalize","ion-margin",3,"click"],[4,"ngIf"],[1,"error-message"]],template:function(e,n){1&e&&(r.Tb(0,"ion-header"),r.Tb(1,"ion-toolbar",0),r.Tb(2,"ion-title"),r.Ac(3,"New Tournament"),r.Sb(),r.Sb(),r.Sb(),r.Tb(4,"ion-content"),r.Tb(5,"ion-grid",1),r.Tb(6,"form",2),r.Tb(7,"ion-row"),r.Tb(8,"ion-col",3),r.Tb(9,"ion-item"),r.Tb(10,"ion-label",4),r.Ac(11,"Platform"),r.Sb(),r.Ob(12,"ion-input",5),r.Sb(),r.yc(13,b,2,1,"div",6),r.Sb(),r.Sb(),r.Tb(14,"ion-row"),r.Tb(15,"ion-col",3),r.Tb(16,"ion-item"),r.Tb(17,"ion-label",4),r.Ac(18,"Tournament Name"),r.Sb(),r.Ob(19,"ion-input",7),r.Sb(),r.yc(20,u,2,1,"div",6),r.Sb(),r.Sb(),r.Tb(21,"ion-row"),r.Tb(22,"ion-col",3),r.Tb(23,"ion-item"),r.Tb(24,"ion-label",4),r.Ac(25,"Buy In"),r.Sb(),r.Ob(26,"ion-input",8),r.Sb(),r.yc(27,f,2,1,"div",6),r.Sb(),r.Sb(),r.Tb(28,"ion-row"),r.Tb(29,"ion-col",3),r.Tb(30,"ion-item"),r.Tb(31,"ion-label",4),r.Ac(32,"Mark Up"),r.Sb(),r.Ob(33,"ion-input",9),r.Sb(),r.yc(34,d,2,1,"div",6),r.Sb(),r.Sb(),r.Tb(35,"ion-row"),r.Tb(36,"ion-col",3),r.Tb(37,"ion-item"),r.Tb(38,"ion-label",4),r.Ac(39,"Proposed Stake"),r.Sb(),r.Ob(40,"ion-input",10),r.Sb(),r.yc(41,y,2,1,"div",6),r.Sb(),r.Sb(),r.Tb(42,"ion-row",0),r.Tb(43,"ion-col"),r.Tb(44,"ion-button",11),r.bc("click",(function(){return n.onClose()})),r.Ac(45," Cancel "),r.Sb(),r.Tb(46,"ion-button",11),r.bc("click",(function(){return n.submit()})),r.Ac(47," Submit "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Cb(6),r.lc("formGroup",n.formInputFields),r.Cb(7),r.lc("ngForOf",n.errorMessages.platform),r.Cb(7),r.lc("ngForOf",n.errorMessages.tName),r.Cb(7),r.lc("ngForOf",n.errorMessages.buyIn),r.Cb(7),r.lc("ngForOf",n.errorMessages.markUp),r.Cb(7),r.lc("ngForOf",n.errorMessages.stakeAvailable))},directives:[i.n,i.C,i.B,i.k,i.m,o.p,o.k,o.e,i.x,i.j,i.q,i.r,i.p,i.K,o.j,o.d,c.k,i.c,c.l],styles:[""]}),e}()},cECI:function(e,n,t){"use strict";t.r(n),t.d(n,"PlayerPageModule",(function(){return T}));var o=t("ofXK"),r=t("3Pt+"),i=t("bv9b"),a=t("TEn/"),c=t("tyNb"),l=t("mrSG"),b=t("22g1"),s=t("fXoL"),u=t("SSuX");function m(e,n){if(1&e&&(s.Tb(0,"ion-button",4),s.Ob(1,"ion-icon",5),s.Ac(2),s.gc(3,"currency"),s.Sb()),2&e){var t=s.fc();s.Cb(2),s.Cc(" \xa0\xa0",s.ic(3,1,t.player.walletBalance,"INR","symbol","3.2-2")," ")}}function f(e,n){if(1&e&&(s.Tb(0,"ion-row",11),s.Tb(1,"ion-col",12),s.Tb(2,"ion-title"),s.Ac(3,"Platform"),s.Sb(),s.Tb(4,"ion-label",13),s.Ac(5),s.Sb(),s.Sb(),s.Tb(6,"ion-col",12),s.Tb(7,"ion-title"),s.Ac(8,"Tournament Name"),s.Sb(),s.Tb(9,"ion-label",13),s.Ac(10),s.Sb(),s.Sb(),s.Tb(11,"ion-col",12),s.Tb(12,"ion-title"),s.Ac(13,"Buy In"),s.Sb(),s.Tb(14,"ion-label",13),s.Ac(15),s.gc(16,"currency"),s.Sb(),s.Sb(),s.Tb(17,"ion-col",12),s.Tb(18,"ion-title"),s.Ac(19,"Mark Up"),s.Sb(),s.Tb(20,"ion-label",13),s.Ac(21),s.Sb(),s.Sb(),s.Tb(22,"ion-col",12),s.Tb(23,"ion-title"),s.Ac(24,"Stake Available"),s.Sb(),s.Tb(25,"ion-label",13),s.Ac(26),s.Sb(),s.Sb(),s.Ob(27,"mat-progress-bar",14),s.Sb()),2&e){var t=n.$implicit;s.Cb(5),s.Bc(t.platform),s.Cb(5),s.Bc(t.tName),s.Cb(5),s.Bc(s.ic(16,6,t.buyIn,"INR","symbol","3.2-2")),s.Cb(6),s.Bc(t.markUp),s.Cb(5),s.Cc("",t.stakeAvailable," %"),s.Cb(1),s.mc("value",100-t.stakeAvailable)}}function p(e,n){if(1&e){var t=s.Ub();s.Tb(0,"ion-content"),s.Ob(1,"div",6),s.Tb(2,"div",7),s.Tb(3,"h2"),s.Ac(4,"My Tournaments"),s.Sb(),s.Sb(),s.Tb(5,"ion-row"),s.Tb(6,"ion-button",8),s.bc("click",(function(){return s.sc(t),s.fc().addTournament()})),s.Ob(7,"ion-icon",9),s.Ac(8," \xa0Add Tournament "),s.Sb(),s.Sb(),s.Tb(9,"ion-grid"),s.yc(10,f,28,11,"ion-row",10),s.Sb(),s.Sb()}if(2&e){var o=s.fc();s.Cb(10),s.lc("ngForOf",o.player.stakings)}}var d,g,y,S=[{path:"",component:(d=function(){function e(n,t){_classCallCheck(this,e),this.playerService=n,this.modalController=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.username=sessionStorage.getItem("username"),this.fetchPlayer()}},{key:"fetchPlayer",value:function(){var e=this;this.playerService.fetchPlayer(this.username).subscribe((function(n){e.player=n,console.log(e.player)}))}},{key:"addTournament",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:b.a});case 2:return(n=e.sent).onDidDismiss().then((function(e){e.data.added&&t.fetchPlayer()})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}(),d.\u0275fac=function(e){return new(e||d)(s.Nb(u.a),s.Nb(a.F))},d.\u0275cmp=s.Hb({type:d,selectors:[["app-player"]],decls:8,vars:2,consts:[["slot","start"],["menu","m1",1,"menubutton"],["slot","end","color","light",4,"ngIf"],[4,"ngIf"],["slot","end","color","light"],["name","wallet-outline"],[2,"height","5%"],[1,"ion-text-center"],["color","primary",3,"click"],["name","add-outline"],["class","row",4,"ngFor","ngForOf"],[1,"row"],["size","2",1,"item"],[2,"padding-top","3%"],["color","warn","mode","determinant",3,"value"]],template:function(e,n){1&e&&(s.Tb(0,"ion-header"),s.Tb(1,"ion-toolbar"),s.Tb(2,"ion-buttons",0),s.Ob(3,"ion-menu-button",1),s.Sb(),s.Tb(4,"ion-title"),s.Ac(5,"Poker-Staking"),s.Sb(),s.yc(6,m,4,6,"ion-button",2),s.Sb(),s.Sb(),s.yc(7,p,11,1,"ion-content",3)),2&e&&(s.Cb(6),s.lc("ngIf",n.player),s.Cb(1),s.lc("ngIf",n.player))},directives:[a.n,a.C,a.d,a.u,a.B,o.l,a.c,a.o,a.k,a.x,a.m,o.k,a.j,a.r,i.a],pipes:[o.d],styles:[".row[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;margin-bottom:5%}.item[_ngcontent-%COMP%]{margin-top:2%;margin-bottom:2%;margin-right:2%;text-align:center;background-color:#eff7ff;color:#007bff;border-radius:10px}"]}),d)},{path:"add-tournament",loadChildren:function(){return t.e(25).then(t.bind(null,"/xGN")).then((function(e){return e.AddTournamentPageModule}))}}],h=((y=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:y}),y.\u0275inj=s.Kb({factory:function(e){return new(e||y)},imports:[[c.i.forChild(S)],c.i]}),y),T=((g=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:g}),g.\u0275inj=s.Kb({factory:function(e){return new(e||g)},imports:[[o.c,r.f,r.n,a.D,i.b,h]]}),g)}}]);