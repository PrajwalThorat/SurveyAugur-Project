(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[637],{9637:(t,e,o)=>{"use strict";o.r(e),o.d(e,{questiongroupsModule:()=>$});var n=o(8583),a=o(8295),i=o(4655),r=o(6461),s=o(7716),c=o(2238),u=o(3679),l=o(3166),m=o(8341),p=o(1095),d=o(6627);function g(t,e){1&t&&(s.TgZ(0,"mat-icon",17),s._uU(1,"cancel"),s.qZA())}function h(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-chip",15),s.NdJ("removed",function(){const e=s.CHM(t).$implicit;return s.oxw().remove(e)}),s._uU(1),s.YNc(2,g,2,0,"mat-icon",16),s.qZA()}if(2&t){const t=e.$implicit,o=s.oxw();s.Q6J("selectable",o.selectable)("removable",o.removable),s.xp6(1),s.hij(" ",t.name," "),s.xp6(1),s.Q6J("ngIf",o.removable)}}let f=(()=>{class t{constructor(){this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[r.K5,r.OC],this.tags=[],this.questionGroupDetails={}}add(t){const e=(t.value||"").trim();e&&this.tags.push({name:e}),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}ngOnInit(){}getData(t){console.warn(t),this.questionGroupDetails=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-addquestiongroup"]],decls:27,vars:5,consts:[["mat-dialog-title","",2,"background-color","#f7703f","text-align","center"],[1,"mat-typography",2,"height","500px","width","500px"],[1,"example-form",3,"ngSubmit"],["basicForm","ngForm"],["cellspacing","0",1,"example-full-width",2,"margin-top","30px"],["appearance","fill",1,"example-full-width"],["matInput","","type","text","ngModel","","name","questionGroupName"],["appearance","fill",1,"example-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["type","text","ngModel","","name","questionTags","placeholder","New Tag",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["align","end"],["mat-button","","mat-dialog-close",""],["type","submit","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"h2",0),s._uU(1,"ADD QuestionGroup"),s.qZA(),s._UZ(2,"hr"),s.TgZ(3,"mat-dialog-content",1),s.TgZ(4,"form",2,3),s.NdJ("ngSubmit",function(){s.CHM(t);const o=s.MAs(5);return e.getData(o.value)}),s.TgZ(6,"table",4),s.TgZ(7,"tr"),s.TgZ(8,"td"),s.TgZ(9,"mat-form-field",5),s.TgZ(10,"mat-label"),s._uU(11,"QuestionGroup Name:"),s.qZA(),s._UZ(12,"input",6),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"tr"),s.TgZ(14,"td"),s.TgZ(15,"mat-form-field",7),s.TgZ(16,"mat-label"),s._uU(17,"Question Tags"),s.qZA(),s.TgZ(18,"mat-chip-list",8,9),s.YNc(20,h,3,4,"mat-chip",10),s.TgZ(21,"input",11),s.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(22,"mat-dialog-actions",12),s.TgZ(23,"button",13),s._uU(24,"Cancel"),s.qZA(),s.TgZ(25,"button",14),s._uU(26,"Submit"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.MAs(19);s.xp6(20),s.Q6J("ngForOf",e.tags),s.xp6(1),s.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),s.xp6(4),s.Q6J("mat-dialog-close",!0)}},directives:[c.uh,c.xY,u._Y,u.JL,u.F,a.KE,a.hX,l.Nt,u.Fj,u.JJ,u.On,m.qn,n.sg,m.oH,c.H8,p.lW,c.ZT,m.HS,n.O5,d.Hw,m.qH],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;font-size:medium;color:#f7703f}td[_ngcontent-%COMP%]{padding-right:8px}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),t})();var Z=o(1841);let w=(()=>{class t{constructor(t){this.http=t,this.userId="74ba1ba6-9cc4-4737-953e-a96fd2df8d60",this.save="/surveyauthor/api/v1/questiongroups/users/{user_id}",this.getQuesGrpByCreator="/surveyauthor/api/v1/questiongroups/users/",this.updateqQesGrp="/surveyauthor/api/v1//questiongroups/{questionGroup_id}",this.getQuesGrpByQId="/surveyauthor/api/v1/questiongroups/"}getByUserId(){return this.http.get(this.getQuesGrpByCreator+this.userId)}getByQuesGrpId(t){return this.http.get(this.getQuesGrpByQId+t)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(Z.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=o(2789),b=o(8590);function A(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"h2"),s._uU(2,"QuestionGroup-Home "),s.qZA(),s._UZ(3,"hr"),s._UZ(4,"br"),s._UZ(5,"br"),s._UZ(6,"br"),s.TgZ(7,"div"),s.TgZ(8,"h2",1),s._uU(9,"Create Your First QuestionGroup"),s.qZA(),s.qZA(),s._UZ(10,"br"),s._UZ(11,"br"),s._UZ(12,"br"),s.TgZ(13,"div",2),s.TgZ(14,"div",3),s.TgZ(15,"button",4),s.NdJ("click",function(){return s.CHM(t),s.oxw().openDialog()}),s.TgZ(16,"mat-icon",5),s._uU(17,"add"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}}function _(t,e){1&t&&(s.TgZ(0,"mat-header-cell",20),s._uU(1," SNo. "),s.qZA())}function C(t,e){1&t&&(s.TgZ(0,"mat-cell",21),s.TgZ(1,"b"),s._uU(2,"{{position}++}"),s.qZA(),s.qZA())}function T(t,e){1&t&&(s.TgZ(0,"mat-header-cell",20),s._uU(1," QuestionGroup Name "),s.qZA())}const y=function(t){return["questiongrouphome",t]};function x(t,e){if(1&t&&(s.TgZ(0,"mat-cell",22),s.TgZ(1,"a",23),s._uU(2),s.qZA(),s._UZ(3,"router-outlet"),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("routerLink",s.VKq(2,y,t.questionGroupId)),s.xp6(1),s.Oqu(t.name)}}function v(t,e){1&t&&(s.TgZ(0,"mat-header-cell",20),s._uU(1," Created On "),s.qZA())}function k(t,e){if(1&t&&(s.TgZ(0,"mat-cell",22),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.createdOn," ")}}function U(t,e){1&t&&(s.TgZ(0,"mat-header-cell",20),s._uU(1," Actions "),s.qZA())}function O(t,e){1&t&&(s.TgZ(0,"mat-cell"),s.TgZ(1,"mat-icon",24),s._uU(2,"edit"),s.qZA(),s.qZA())}function Q(t,e){1&t&&s._UZ(0,"mat-header-row")}function D(t,e){1&t&&s._UZ(0,"mat-row")}function M(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"h2"),s._uU(2,"QuestionGroup-Home "),s.qZA(),s._UZ(3,"hr"),s.TgZ(4,"div",6),s.TgZ(5,"mat-table",7),s.ynx(6,8),s.YNc(7,_,2,0,"mat-header-cell",9),s.YNc(8,C,3,0,"mat-cell",10),s.BQk(),s.ynx(9,11),s.YNc(10,T,2,0,"mat-header-cell",9),s.YNc(11,x,4,4,"mat-cell",12),s.BQk(),s.ynx(12,13),s.YNc(13,v,2,0,"mat-header-cell",9),s.YNc(14,k,2,1,"mat-cell",12),s.BQk(),s.ynx(15,14),s.YNc(16,U,2,0,"mat-header-cell",9),s.YNc(17,O,3,0,"mat-cell",15),s.BQk(),s.YNc(18,Q,1,0,"mat-header-row",16),s.YNc(19,D,1,0,"mat-row",17),s.qZA(),s.qZA(),s.TgZ(20,"div",18),s.TgZ(21,"button",19),s.NdJ("click",function(){return s.CHM(t),s.oxw().openDialog()}),s.TgZ(22,"mat-icon"),s._uU(23,"add"),s.qZA(),s.qZA(),s.qZA(),s._UZ(24,"router-outlet"),s.qZA()}if(2&t){const t=s.oxw();s.xp6(5),s.Q6J("dataSource",t.dataSource),s.xp6(13),s.Q6J("matHeaderRowDef",t.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",t.displayedColumns)}}function N(t,e){1&t&&(s.TgZ(0,"mat-header-cell",16),s._uU(1," SNo. "),s.qZA())}function I(t,e){if(1&t&&(s.TgZ(0,"mat-cell",17),s.TgZ(1,"b"),s._uU(2),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(2),s.Oqu(t.position+".")}}function B(t,e){1&t&&(s.TgZ(0,"mat-header-cell",16),s._uU(1," Question Body "),s.qZA())}function G(t,e){if(1&t&&(s.TgZ(0,"mat-cell",18),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij("",t.questionBody," ")}}function Y(t,e){1&t&&(s.TgZ(0,"mat-header-cell",16),s._uU(1," Question Type "),s.qZA())}function J(t,e){if(1&t&&(s.TgZ(0,"mat-cell",18),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.questionType," ")}}function P(t,e){1&t&&(s.TgZ(0,"mat-header-cell",16),s._uU(1," Actions "),s.qZA())}function H(t,e){1&t&&(s.TgZ(0,"mat-cell"),s.TgZ(1,"mat-icon",19),s._uU(2,"edit"),s.qZA(),s.TgZ(3,"mat-icon",20),s._uU(4,"delete"),s.qZA(),s.qZA())}function z(t,e){1&t&&s._UZ(0,"mat-header-row")}function S(t,e){1&t&&s._UZ(0,"mat-row")}const F=function(){return["questions"]},j=[{position:1,questionBody:"Is Java Object Oriented Language?",questionType:"Java"},{position:2,questionBody:"What is Spring?",questionType:"Spring"}],R=[{path:"",component:(()=>{class t{constructor(t,e,o){this.dialog=t,this.router=e,this.questionGrpService=o,this.questionGroups=[],this.position=1,this.displayedColumns=["position","name","createdOn","Actions"],this.dataSource=this.questionGroups}ngOnInit(){}openDialog(){this.dialog.open(f).afterClosed().subscribe(t=>{console.log(`Dialog result: ${t}`)})}getData(){this.questionGrpService.getByUserId().subscribe(t=>{this.questionGroups=t.result})}show(){return 0==this.questionGroups.length}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.uw),s.Y36(i.F0),s.Y36(w))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-questiongroups"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"text-align","center"],[1,"container"],[1,"center"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f","height","130px","width","130px",3,"click"],[2,"font-size","30px","text-align","center"],[2,"margin-top","20px"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","name"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","createdOn"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f",3,"click"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],[2,"text-decoration","none",3,"routerLink"],["matTooltip","Edit",1,"myIcons"]],template:function(t,e){1&t&&(s.YNc(0,A,18,0,"div",0),s.YNc(1,M,25,3,"div",0)),2&t&&(s.Q6J("ngIf",e.show()),s.xp6(1),s.Q6J("ngIf",!e.show()))},directives:[n.O5,p.lW,d.Hw,q.BZ,q.w1,q.fO,q.Dz,q.as,q.nj,i.lC,q.ge,q.ev,i.yS,b.gM,q.XQ,q.Gk],styles:[".container[_ngcontent-%COMP%]{height:200px;position:relative}.center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.demo-table[_ngcontent-%COMP%]{width:100%}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-createdOn[_ngcontent-%COMP%]{flex:0 0 20%!important;width:20%!important}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-createdOn[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important;justify-content:center}"]}),t})()},{path:"questiongrouphome/:id",component:(()=>{class t{constructor(){this.displayedColumns=["position","questionBody","questionType","Actions"],this.dataSource=j}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-questiongrouphome"]],decls:33,vars:5,consts:[["xmlns","http://www.w3.org/1999/html"],[1,"contents"],[1,"txtSize"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","questionBody"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","questionType"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","matTooltip","Click to Add Questions",2,"background-color","#f7703f",3,"routerLink"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],["matTooltip","Edit",1,"myIcons"],["matTooltip","Delete",1,"myIcons"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"h2"),s._uU(2,"Question Group Name"),s.qZA(),s._UZ(3,"hr"),s.qZA(),s.TgZ(4,"div",1),s._UZ(5,"br"),s.TgZ(6,"b",2),s._uU(7,"Question Group Tags :"),s.qZA(),s._UZ(8,"br"),s._UZ(9,"br"),s._UZ(10,"br"),s.TgZ(11,"b",2),s._uU(12,"Question Group creation Date :"),s.qZA(),s.qZA(),s.TgZ(13,"div"),s.TgZ(14,"mat-table",3),s.ynx(15,4),s.YNc(16,N,2,0,"mat-header-cell",5),s.YNc(17,I,3,1,"mat-cell",6),s.BQk(),s.ynx(18,7),s.YNc(19,B,2,0,"mat-header-cell",5),s.YNc(20,G,2,1,"mat-cell",8),s.BQk(),s.ynx(21,9),s.YNc(22,Y,2,0,"mat-header-cell",5),s.YNc(23,J,2,1,"mat-cell",8),s.BQk(),s.ynx(24,10),s.YNc(25,P,2,0,"mat-header-cell",5),s.YNc(26,H,5,0,"mat-cell",11),s.BQk(),s.YNc(27,z,1,0,"mat-header-row",12),s.YNc(28,S,1,0,"mat-row",13),s.qZA(),s.qZA(),s.TgZ(29,"div",14),s.TgZ(30,"button",15),s.TgZ(31,"mat-icon"),s._uU(32,"add"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(14),s.Q6J("dataSource",e.dataSource),s.xp6(13),s.Q6J("matHeaderRowDef",e.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns),s.xp6(2),s.Q6J("routerLink",s.DdM(4,F)))},directives:[q.BZ,q.w1,q.fO,q.Dz,q.as,q.nj,p.lW,b.gM,i.rH,d.Hw,q.ge,q.ev,q.XQ,q.Gk],styles:[".contents[_ngcontent-%COMP%]{height:20%;width:100%;background-color:#d3d3d3}.txtSize[_ngcontent-%COMP%]{font-size:medium;padding-left:40px}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-position[_ngcontent-%COMP%], .mat-column-questionBody[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-questionType[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;justify-content:center;-webkit-hyphens:auto;hyphens:auto}.mat-elevation-z8[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;margin-top:20px}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(R)],i.Bz]}),t})();var L=o(3738);let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,E,p.ot,d.Ps,c.Is,u.UX,a.lN,L.QW,l.c,m.Hi,u.u5,q.p0,b.AV,i.Bz,Z.JF],i.Bz]}),t})()}}]);