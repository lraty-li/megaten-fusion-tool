(self.webpackChunkmegaten_fusion_tool=self.webpackChunkmegaten_fusion_tool||[]).push([[428],{8457:(e,s,t)=>{"use strict";t.d(s,{m:()=>o});var i=t(5539),n=t(5614),r=t(7967);let o=(()=>{class e{constructor(e,s){this.changeDetectorRef=e,this.fusionTrioService=s,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.fusionTrioService.squareChart.subscribe(e=>{this.normChart=e.normalChart,this.tripChart=e.tripleChart}))}ngOnDestroy(){for(const e of this.subscriptions)e.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(n.sBO),n.Y36(i.Ir))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-triple-fusion-chart"]],decls:1,vars:4,consts:[[3,"normChart","tripChart","normTitle","tripTitle"]],template:function(e,s){1&e&&n._UZ(0,"app-fusion-chart",0),2&e&&n.Q6J("normChart",s.normChart)("tripChart",s.tripChart)("normTitle","Normal Fusions")("tripTitle","Triple Fusions")},directives:[r.R],encapsulation:2,changeDetection:0}),e})()},8611:(e,s,t)=>{"use strict";t.d(s,{t:()=>n});var i=t(6829);class n extends i.g{constructor(e,s,t){super(),this.elementDemons=[],this.lvlModifier=.5,this.initCharts(e,t)}initCharts(e,s){const t=e.races,n=e.table,r=[];for(let i=0;i<t.length;i++)r.push(n[i].slice(s?0:i,s?i+1:t.length)),s||(r[i][0]="-");this.races=t,this.lvlModifier=s?4.25:.5,this.fissionChart=i.g.loadFissionTableJson(t,this.elementDemons,r),this.fusionChart=i.g.loadFusionTableJson(t,r),this.elementChart={}}}},110:(e,s,t)=>{"use strict";t.d(s,{V:()=>Q});var i=t(9185),n=t(5614),r=t(8327),o=t(6611),a=t(7089),c=t(1116);let p=(()=>{class e{constructor(e,s){this.translate=s,this.translate.use("zh-hans-p4g"),this.appCssClasses=e.compConfig.appCssClasses,this.otherLinks=[{title:"Shadow List",link:"shadows"}],e.appName.includes("Golden")&&this.otherLinks.push({title:"Recipe Generator",link:"recipes"})}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(r.Y),n.Y36(o.sK))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-p4-compendium"]],decls:1,vars:4,consts:[[3,"ngClass","hasSettings","mainList","otherLinks"]],template:function(e,s){1&e&&n._UZ(0,"app-demon-compendium",0),2&e&&n.Q6J("ngClass",s.appCssClasses)("hasSettings",!1)("mainList","persona")("otherLinks",s.otherLinks)},directives:[a.e,c.mk],styles:[".p3 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:50%;color:#0000}.p3 div.element-icon.i4096,.p3 div.element-icon.slash{background-image:url(/assets/images/p5/sword.png)}.p3 div.element-icon.i2048,.p3 div.element-icon.strike{background-image:url(/assets/images/p5/phys.png)}.p3 div.element-icon.i1024,.p3 div.element-icon.pierce{background-image:url(/assets/images/p5/gun.png)}.p3 div.element-icon.fire,.p3 div.element-icon.i512{background-image:url(/assets/images/p5/fire.png)}.p3 div.element-icon.i256,.p3 div.element-icon.ice{background-image:url(/assets/images/p5/ice.png)}.p3 div.element-icon.elec,.p3 div.element-icon.i128{background-image:url(/assets/images/p5/elec.png)}.p3 div.element-icon.i64,.p3 div.element-icon.wind{background-image:url(/assets/images/p5/wind.png)}.p3 div.element-icon.i32,.p3 div.element-icon.light{background-image:url(/assets/images/p5/bless.png)}.p3 div.element-icon.dark,.p3 div.element-icon.i16{background-image:url(/assets/images/p5/curse.png)}.p3 div.element-icon.i48,.p3 div.element-icon.lidark{background-image:url(/assets/images/p5/trait.png)}.p3 div.element-icon.ailment,.p3 div.element-icon.i4{background-image:url(/assets/images/p5/ailment.png)}.p3 div.element-icon.i3,.p3 div.element-icon.recovery{background-image:url(/assets/images/p5/healing.png)}.p3 div.element-icon.all,.p3 div.element-icon.almighty,.p3 div.element-icon.i0{background-image:url(/assets/images/p5/almighty.png)}.p3 div.element-icon.special,.p3 div.element-icon.support{background-image:url(/assets/images/p5/support.png)}.p3 div.element-icon.passive{background-image:url(/assets/images/p5/passive.png)}.p3 th.nav.active,.p3 th.nav.active a,.p3 th.title{color:#000;background-color:#4372aa}.p4 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:50%;color:#0000}.p4 div.element-icon.i1083,.p4 div.element-icon.phys{background-image:url(/assets/images/p5/phys.png)}.p4 div.element-icon.fire,.p4 div.element-icon.i1791{background-image:url(/assets/images/p5/fire.png)}.p4 div.element-icon.i1535,.p4 div.element-icon.ice{background-image:url(/assets/images/p5/ice.png)}.p4 div.element-icon.elec,.p4 div.element-icon.i1983{background-image:url(/assets/images/p5/elec.png)}.p4 div.element-icon.i1919,.p4 div.element-icon.wind{background-image:url(/assets/images/p5/wind.png)}.p4 div.element-icon.i1003,.p4 div.element-icon.light{background-image:url(/assets/images/p5/bless.png)}.p4 div.element-icon.dark,.p4 div.element-icon.i989{background-image:url(/assets/images/p5/curse.png)}.p4 div.element-icon.ailment{background-image:url(/assets/images/p5/ailment.png)}.p4 div.element-icon.i1007,.p4 div.element-icon.recovery{background-image:url(/assets/images/p5/healing.png)}.p4 div.element-icon.almighty,.p4 div.element-icon.i2047{background-image:url(/assets/images/p5/almighty.png)}.p4 div.element-icon.special,.p4 div.element-icon.support{background-image:url(/assets/images/p5/support.png)}.p4 div.element-icon.passive{background-image:url(/assets/images/p5/passive.png)}.p4 th.nav.active,.p4 th.nav.active a,.p4 th.title{color:#000;background-color:#ffe600}"],encapsulation:2,changeDetection:0}),e})();var l=t(5438),m=t(9624),h=t(4008);let u=(()=>{class e extends l.l{constructor(e,s,t,i){super(e,t,i),this.showAllies=!s.snapshot.data.showShadows,this.showEnemies=!this.showAllies,this.compConfig=i.compConfig,this.defaultSortFun=(e,s)=>200*(this.compConfig.raceOrder[e.race]-this.compConfig.raceOrder[s.race])+s.lvl-e.lvl,this.appName=`List of Personas - ${i.appName}`,this.statHeaders=this.compConfig.baseStats,this.resistHeaders=this.compConfig.resistElems,this.inheritOrder=this.compConfig.elemOrder,this.showEnemies&&(this.appName=`List of Shadows - ${i.appName}`,this.statHeaders=this.compConfig.enemyStats,this.resistHeaders=this.compConfig.enemyResists,this.inheritOrder=null)}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(m.Dx),n.Y36(i.gz),n.Y36(n.sBO),n.Y36(r.Y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-demon-list-container"]],features:[n.qOj],decls:2,vars:9,consts:[[3,"isEnemy","hasCurrLvl","raceOrder","statHeaders","resistHeaders","inheritOrder","rowData"]],template:function(e,s){1&e&&(n._UZ(0,"app-smt-demon-list",0),n.ALo(1,"async")),2&e&&n.Q6J("isEnemy",s.showEnemies)("hasCurrLvl",!s.showEnemies)("raceOrder",s.compConfig.raceOrder)("statHeaders",s.statHeaders)("resistHeaders",s.resistHeaders)("inheritOrder",s.inheritOrder)("rowData",n.lcZ(1,7,s.demons))},directives:[h.Q],pipes:[c.Ov],encapsulation:2,changeDetection:0}),e})();var d=t(9261),g=t(3787);let f=(()=>{class e extends d.e{constructor(e,s,t){super(e,s,t),this.compConfig=t.compConfig,this.appName=`List of Skills - ${t.appName}`,this.transferTitle=this.compConfig.hasSkillCards[t.gameAbbr]?"Skill Card":"",this.defaultSortFun=(e,s)=>1e4*(this.compConfig.elemOrder[e.element]-this.compConfig.elemOrder[s.element])+e.rank-s.rank}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(m.Dx),n.Y36(n.sBO),n.Y36(r.Y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-skill-list-container"]],features:[n.qOj],decls:2,vars:6,consts:[[3,"elemOrder","isPersona","transferTitle","rowData"]],template:function(e,s){1&e&&(n._UZ(0,"app-smt-skill-list",0),n.ALo(1,"async")),2&e&&n.Q6J("elemOrder",s.compConfig.elemOrder)("isPersona",!0)("transferTitle",s.transferTitle)("rowData",n.lcZ(1,4,s.skills))},directives:[g.J],pipes:[c.Ov],encapsulation:2,changeDetection:0}),e})();var v=t(2573),C=t(858),b=t(628),k=t(4209),D=t(4354),y=t(4897),O=t(3966);const w=function(){return["HP","MP"]};let S=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-enemy-entry"]],inputs:{name:"name",demon:"demon",compendium:"compendium",compConfig:"compConfig"},decls:19,vars:11,consts:[[3,"title","statHeaders","stats"],[1,"entry-table"],["colspan","2",1,"title"],[3,"resistHeaders","resists"],[3,"elemOrder","compendium","skillLevels"]],template:function(e,s){1&e&&(n._UZ(0,"app-demon-stats",0),n.TgZ(1,"table",1),n.TgZ(2,"thead"),n.TgZ(3,"tr"),n.TgZ(4,"th",2),n._uU(5,"Appearances"),n.qZA(),n.qZA(),n.TgZ(6,"tr"),n.TgZ(7,"th"),n._uU(8,"Areas"),n.qZA(),n.TgZ(9,"th"),n._uU(10,"Drops"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"tbody"),n.TgZ(12,"tr"),n.TgZ(13,"td"),n._uU(14),n.qZA(),n.TgZ(15,"td"),n._uU(16),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(17,"app-demon-resists",3),n._UZ(18,"app-demon-skills",4)),2&e&&(n.Q6J("title","Lvl "+s.demon.lvl+" "+s.demon.race+" "+s.demon.name)("statHeaders",n.DdM(10,w).concat(s.compConfig.baseStats))("stats",s.demon.stats.concat(s.demon.estats)),n.xp6(14),n.Oqu(s.demon.area),n.xp6(2),n.Oqu(s.demon.drop),n.xp6(1),n.Q6J("resistHeaders",s.compConfig.enemyResists)("resists",s.demon.resists),n.xp6(1),n.Q6J("elemOrder",s.compConfig.elemOrder)("compendium",s.compendium)("skillLevels",s.demon.skills))},directives:[v.O,C.I,k.n],encapsulation:2,changeDetection:0}),e})();function _(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"app-demon-stats",2),n.ALo(2,"translate"),n._UZ(3,"app-demon-resists",3),n._UZ(4,"app-demon-inherits",4),n._UZ(5,"app-demon-skills",5),n._UZ(6,"app-smt-fusions",6),n.BQk()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("title","Lvl "+e.demon.lvl+" "+e.demon.race+" "+n.lcZ(2,14,e.demon.name))("price",e.demon.price)("statHeaders",e.compConfig.baseStats)("stats",e.demon.stats)("inherits",e.demon.inherits),n.xp6(2),n.Q6J("resistHeaders",e.compConfig.resistElems)("resists",e.demon.resists),n.xp6(1),n.Q6J("hasChance",!0)("inheritHeaders",e.compendium.inheritHeaders)("inherits",e.compendium.getInheritElems(e.demon.inherits)),n.xp6(1),n.Q6J("elemOrder",e.compConfig.elemOrder)("compendium",e.compendium)("skillLevels",e.demon.skills),n.xp6(1),n.Q6J("hasTripleFusion",!0)}}function T(e,s){if(1&e&&n._UZ(0,"app-demon-missing",7),2&e){const e=n.oxw();n.Q6J("name",e.name)}}function Z(e,s){if(1&e&&n._UZ(0,"app-demon-entry",1),2&e){const e=n.oxw();n.Q6J("name",e.name)("demon",e.demon)("compConfig",e.compConfig)("compendium",e.compendium)}}function x(e,s){if(1&e&&n._UZ(0,"app-enemy-entry",1),2&e){const e=n.oxw();n.Q6J("name",e.name)("demon",e.demon)("compConfig",e.compConfig)("compendium",e.compendium)}}let A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-demon-entry"]],inputs:{name:"name",demon:"demon",compendium:"compendium",compConfig:"compConfig"},decls:2,vars:2,consts:[[4,"ngIf"],[3,"name",4,"ngIf"],[3,"title","price","statHeaders","stats","inherits"],[3,"resistHeaders","resists"],[3,"hasChance","inheritHeaders","inherits"],[3,"elemOrder","compendium","skillLevels"],[3,"hasTripleFusion"],[3,"name"]],template:function(e,s){1&e&&(n.YNc(0,_,7,16,"ng-container",0),n.YNc(1,T,1,1,"app-demon-missing",1)),2&e&&(n.Q6J("ngIf",s.demon),n.xp6(1),n.Q6J("ngIf",!s.demon))},directives:[c.O5,v.O,C.I,b.N,k.n,D.O,y.t],pipes:[o.X$],encapsulation:2,changeDetection:0}),e})(),L=(()=>{class e{constructor(e,s,t,i){this.route=e,this.title=s,this.currentDemonService=t,this.fusionDataService=i,this.subscriptions=[],this.appName="Test App",this.appName=i.appName,this.compConfig=i.compConfig}ngOnInit(){this.subscribeAll()}ngOnDestroy(){for(const e of this.subscriptions)e.unsubscribe()}subscribeAll(){this.subscriptions.push(this.fusionDataService.compendium.subscribe(e=>{this.compendium=e,this.getDemonEntry()})),this.subscriptions.push(this.currentDemonService.currentDemon.subscribe(e=>{this.name=e,this.getDemonEntry()})),this.route.params.subscribe(e=>{this.currentDemonService.nextCurrentDemon(e.demonName)})}getDemonEntry(){this.compendium&&this.name&&(this.title.setTitle(`${this.name} - ${this.appName}`),this.demon=this.compendium.getDemon(this.name))}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(i.gz),n.Y36(m.Dx),n.Y36(O.s),n.Y36(r.Y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-demon-entry-container"]],decls:2,vars:2,consts:[[3,"name","demon","compConfig","compendium",4,"ngIf"],[3,"name","demon","compConfig","compendium"]],template:function(e,s){1&e&&(n.YNc(0,Z,1,4,"app-demon-entry",0),n.YNc(1,x,1,4,"app-enemy-entry",0)),2&e&&(n.Q6J("ngIf",!s.demon||!s.demon.isEnemy),n.xp6(1),n.Q6J("ngIf",s.demon&&s.demon.isEnemy))},directives:[c.O5,A,S],encapsulation:2,changeDetection:0}),e})();var Y=t(3810);let J=(()=>{class e{constructor(e,s){this.fusionDataService=e,this.title=s,this.subscriptions=[],this.defaultDemon="Pixie",this.maxSkills=8;const t=this.fusionDataService.compConfig;this.recipeConfig={fissionCalculator:this.fusionDataService.fissionCalculator,fusionCalculator:this.fusionDataService.fusionCalculator,races:t.races,skillElems:t.skillElems,inheritElems:t.inheritElems,restrictInherits:!0,triExclusiveRaces:["Fool","Fortune","Tower","Judgement","Aeon","Jester"],triFissionCalculator:this.fusionDataService.triFissionCalculator,triFusionCalculator:this.fusionDataService.triFusionCalculator}}ngOnInit(){this.setTitle(),this.subscribeAll()}ngOnDestroy(){this.unsubscribeAll()}setTitle(){this.title.setTitle(`Recipe Generator - ${this.fusionDataService.appName}`)}subscribeAll(){this.subscriptions.push(this.fusionDataService.compendium.subscribe(e=>{this.compendium=e})),this.subscriptions.push(this.fusionDataService.squareChart.subscribe(e=>{this.squareChart=e}))}unsubscribeAll(){for(const e of this.subscriptions)e.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(r.Y),n.Y36(m.Dx))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-recipe-generator-container"]],decls:1,vars:5,consts:[[3,"defaultDemon","maxSkills","compendium","squareChart","recipeConfig"]],template:function(e,s){1&e&&n._UZ(0,"app-recipe-generator",0),2&e&&n.Q6J("defaultDemon",s.defaultDemon)("maxSkills",s.maxSkills)("compendium",s.compendium)("squareChart",s.squareChart)("recipeConfig",s.recipeConfig)},directives:[Y.X],encapsulation:2,changeDetection:0}),e})();var q=t(5946),E=t(2060),N=t(6926),H=t(6100);const I=[{path:"",redirectTo:"personas",pathMatch:"full"},{path:"",component:p,data:{fusionTool:"chart"},children:[{path:"chart",component:t(8457).m}]},{path:"",component:p,children:[{path:"shadows/:demonName",component:L},{path:"personas/:demonName",component:L,children:[{path:"fissions/triple",component:N.p},{path:"fusions/triple",component:H.n},{path:"fissions",component:q.t},{path:"fusions",component:E.$},{path:"**",redirectTo:"fissions",pathMatch:"full"}]},{path:"personas",component:u},{path:"shadows",component:u,data:{showShadows:!0}},{path:"skills",component:f},{path:"recipes",component:J}]},{path:"**",redirectTo:"personas",pathMatch:"full"}];let Q=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.Bz.forChild(I)],i.Bz]}),e})()},8327:(e,s,t)=>{"use strict";t.d(s,{Y:()=>p});var i=t(8512);class n{constructor(e,s){this.compConfig=e,this.gameAbbr=s,this.specialRecipes={},this.dlcDemons={},this.initImportedData(),this.updateDerivedData()}initImportedData(){const e={},s={},t={},i={},n={},r={},o={},a={},c=this.compConfig.races.includes("World")?0:1;for(const[p,l]of Object.entries(this.compConfig.inheritTypes)){const e=parseInt(l.map(e=>e<=c?"0":"1").join(""),2);o[p]=e,a[e]=l}for(const p of this.compConfig.demonData[this.gameAbbr])for(const[s,t]of Object.entries(p))e[s]={name:s,race:t.race,lvl:t.lvl,currLvl:t.lvl,price:Math.pow(t.stats.reduce((e,s)=>s+e,0),2)+2e3,inherits:o[t.inherits],stats:t.stats,resists:t.resists.split("").map(e=>this.compConfig.resistCodes[e]),skills:t.skills,fusion:t.fusion||"normal",prereq:t.prereq||""};for(const p of this.compConfig.enemyData[this.gameAbbr])for(const[e,t]of Object.entries(p)){let i=[];t.material&&"-"!==t.material&&i.push(t.material),t.gem&&"-"!==t.gem&&i.push(t.gem),t.drops&&(i=i.concat(t.drops)),i.length||i.push("-"),s[e]={name:e,race:t.race,lvl:t.lvl,currLvl:t.lvl,price:0,inherits:0,stats:t.stats.slice(0,2),estats:t.stats.slice(2),resists:t.resists.toLowerCase().split("").map(e=>this.compConfig.resistCodes[e]),skills:t.skills.reduce((e,s)=>(e[s]=0,e),{}),fusion:"normal",area:t.area,drop:i.join(", "),isEnemy:!0}}for(const p of this.compConfig.skillData[this.gameAbbr])for(const[s,i]of Object.entries(p)){const n=i.power||0,r=i.damage,o=i.target||"",a=i.effect;let c=i.effect;n?(c=n?r+" ("+n.toString()+") dmg":"",c+=o?" to "+o.toLowerCase():"",c+=a?", "+a:""):o&&(c+=("support"===i.element?" for ":" to ")+o.toLowerCase()),t[s]={name:s,element:i.element,cost:i.cost||0,rank:i.rank||99,effect:c,learnedBy:[],transfer:[],level:0},i.card&&(t[s].transfer=i.card.split(", ").map(s=>({demon:s,level:e[s]?0:-100})))}for(const[p,l]of Object.entries(this.compConfig.specialRecipes[this.gameAbbr])){const s=l;if(i[p]=s,e[p].fusion="special",2===s.length)for(const e of s)r[e]||(r[e]=[]),r[e].push(p)}for(const p of this.compConfig.races)n[p]={};for(const p of Object.values(e).sort((e,s)=>e.lvl-s.lvl)){"party"!==p.fusion&&(n[p.race][p.lvl]=p.name);for(const[e,s]of Object.entries(p.skills))t[e].learnedBy.push({demon:p.name,level:s})}this.demons=e,this.enemies=s,this.skills=t,this.specialRecipes=i,this.invertedDemons=n,this.invertedSpecials=r,this._inheritTypes=a}updateDerivedData(){const e={},s={},t=[];for(const r of Object.values(this.skills))r.learnedBy.length<1?r.rank=99:t.push(r);for(const r of this.compConfig.races)e[r]=[],s[r]=[];for(const[r,o]of Object.entries(this.demons))"party"!==o.fusion&&(e[o.race].push(o.lvl),this.specialRecipes.hasOwnProperty(r)||s[o.race].push(o.lvl));for(const r of this.compConfig.races)e[r].sort((e,s)=>e-s),s[r].sort((e,s)=>e-s);const i=Object.keys(this.demons).map(e=>this.demons[e]),n=Object.keys(this.enemies).map(e=>this.enemies[e]);this._allDemons=n.concat(i),this._allSkills=t,this.allIngredients=e,this.allResults=s}get allDemons(){return this._allDemons}get allSkills(){return this._allSkills}get specialDemons(){return Object.keys(this.specialRecipes).map(e=>this.demons[e])}get inheritHeaders(){return this.compConfig.inheritElems}getDemon(e){return this.demons[e]||this.enemies[e]}getSkill(e){return this.skills[e]}getSkills(e){const s=this.compConfig.elemOrder,t=e.map(e=>this.skills[e]);return t.sort((e,t)=>1e4*(s[e.element]-s[t.element])+e.rank-t.rank),t}getIngredientDemonLvls(e){return this.allIngredients[e]||[]}getResultDemonLvls(e){return this.allResults[e]||[]}getSpecialNameEntries(e){return this.specialRecipes[e]||[]}getSpecialNamePairs(e){return[]}getInheritElems(e){return this._inheritTypes[e]}reverseLookupDemon(e,s){return this.invertedDemons[e][s]}reverseLookupSpecial(e){return this.invertedSpecials[e]||[]}isElementDemon(e){return!1}}var r=t(8611),o=t(5539),a=t(5614),c=t(9185);let p=(()=>{class e{constructor(e,s){this.fissionCalculator=o.Bz,this.fusionCalculator=o.wC,this.triFissionCalculator=o.nL,this.triFusionCalculator=o.RD;const t=s.url.split("/")[1],a=e.demonData[t]?t:"p4";this.appName=e.gameTitles[a]+" Fusion Calculator",this.compConfig=e,this.gameAbbr=a,this._compendium=new n(e,a),this._compendium$=new i.X(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new r.t(e.normalTable[a],e.races),this._fusionChart$=new i.X(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable(),this._tripleChart=new r.t(e.normalTable[a],e.races,!0),this._squareChart$=new i.X({normalChart:this._fusionChart,tripleChart:this._tripleChart,raceOrder:e.raceOrder}),this.squareChart=this._squareChart$.asObservable()}nextDlcDemons(e){}}return e.\u0275fac=function(s){return new(s||e)(a.LFG(o.I7),a.LFG(c.F0))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})()},2428:(e,s,t)=>{"use strict";t.d(s,{R:()=>p});var i=t(1116),n=t(5425),r=t(6487),o=t(110),a=t(6611),c=t(5614);let p=(()=>{class e{static forRoot(){return{ngModule:e}}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,n.m,r.a,o.V,a.aw]]}),e})()}}]);