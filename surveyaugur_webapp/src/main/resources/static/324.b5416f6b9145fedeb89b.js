(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>p});var u=n(8583),i=n(1095),r=n(4655),s=n(7716),o=n(1841),c=n(2199),a=n(5939);function Z(t,e){if(1&t&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s._uU(3,"\xa0\xa0\xa0\xa0\xa0\xa0 "),s.TgZ(4,"td"),s._uU(5),s.qZA(),s._uU(6,"\xa0\xa0\xa0 "),s.TgZ(7,"td"),s.TgZ(8,"button",6),s._uU(9,"Preview"),s.qZA(),s.TgZ(10,"button",7),s._uU(11,"DeActivate"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit,n=e.index;s.xp6(2),s.hij(" ",n+1," "),s.xp6(3),s.hij(" ",t.surveyTitle," ")}}function g(t,e){if(1&t&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s._uU(3,"\xa0\xa0\xa0\xa0\xa0\xa0 "),s.TgZ(4,"td"),s._uU(5),s.qZA(),s._uU(6,"\xa0\xa0\xa0 "),s.TgZ(7,"td"),s.TgZ(8,"button",6),s._uU(9,"Preview"),s.qZA(),s.TgZ(10,"button",7),s._uU(11,"Activate"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit,n=e.index;s.xp6(2),s.hij(" ",n+1," "),s.xp6(3),s.hij(" ",t.title," ")}}const l=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.inactiveSurvey=[],this.activeSurvey=[]}ngOnInit(){this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey)}),this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{this.activeSurvey=t.result,console.log(t),console.log(this.activeSurvey)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(o.eN),s.Y36(c._))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-surveys"]],decls:34,vars:2,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],[1,"table","table-stripe"],[4,"ngFor","ngForOf"],["label","InActive Surveys"],["mat-raised-button","","color","accent"],["mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(s.TgZ(0,"p",0),s._uU(1,"Surveys"),s.qZA(),s._UZ(2,"hr",1),s.TgZ(3,"mat-tab-group"),s.TgZ(4,"mat-tab",2),s._uU(5,"List of Active Surveys "),s._UZ(6,"br"),s._UZ(7,"br"),s.TgZ(8,"table",3),s.TgZ(9,"tr"),s.TgZ(10,"th"),s._uU(11,"S no"),s.qZA(),s._uU(12,"\xa0\xa0\xa0 "),s.TgZ(13,"th"),s._uU(14,"SurveyTitle"),s.qZA(),s._uU(15,"\xa0\xa0\xa0 "),s.TgZ(16,"th"),s._uU(17,"Actions"),s.qZA(),s.qZA(),s.YNc(18,Z,12,2,"tr",4),s.qZA(),s.qZA(),s.TgZ(19,"mat-tab",5),s._uU(20,"List of InActive Surveys "),s._UZ(21,"br"),s._UZ(22,"br"),s.TgZ(23,"table",3),s.TgZ(24,"tr"),s.TgZ(25,"th"),s._uU(26,"S no"),s.qZA(),s._uU(27,"\xa0\xa0\xa0 "),s.TgZ(28,"th"),s._uU(29,"SurveyTitle"),s.qZA(),s._uU(30,"\xa0\xa0\xa0 "),s.TgZ(31,"th"),s._uU(32,"Actions"),s.qZA(),s.qZA(),s.YNc(33,g,12,2,"tr",4),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(18),s.Q6J("ngForOf",e.activeSurvey),s.xp6(15),s.Q6J("ngForOf",e.inactiveSurvey))},directives:[a.SP,a.uX,u.sg,i.lW],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[u.ez,v,a.Nh,o.JF,i.ot]]}),t})()}}]);