(this.webpackJsonppetfindertest=this.webpackJsonppetfindertest||[]).push([[0],{18:function(e,t,a){e.exports={selectedBreeds:"css_selectedBreeds__1Ki-g",filtersSelected:"css_filtersSelected__PZBlw",filtersSelectedIcon:"css_filtersSelectedIcon__4AriC",mainList:"css_mainList__1jASM",subList:"css_subList__a6dGT",directionsArrowsContainer:"css_directionsArrowsContainer__1hOjY",nextButton:"css_nextButton__3Nw9h",previousButton:"css_previousButton__2dmdI"}},31:function(e,t,a){e.exports={paper:"css_paper__3ruKn",petImageContainer:"css_petImageContainer__2p_o5",petImage:"css_petImage__3P6qz",nameContainer:"css_nameContainer__3TKD5",breedContainer:"css_breedContainer__G2Dma"}},36:function(e,t,a){e.exports={mainContainer:"css_mainContainer__366yK",subContainer:"css_subContainer__3oumP",filterContainer:"css_filterContainer__2U5qP",dataContainer:"css_dataContainer__2RSGw"}},47:function(e,t,a){e.exports={appbar:"css_appbar__3fe3V",logo:"css_logo__8nphV"}},57:function(e,t,a){e.exports=a.p+"static/media/logo.d1339207.png"},58:function(e,t,a){e.exports={container:"css_container__3EG3U"}},62:function(e,t,a){e.exports=a.p+"static/media/pet.4f325f55.png"},73:function(e,t,a){e.exports=a(86)},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),o=a(22),i=a(124),l=a(114),u=a(115),p=a(57),E=a.n(p),_=a(47),m=a.n(_);function d(){return r.a.createElement(l.a,{position:"static",className:m.a.appbar},r.a.createElement(u.a,null,r.a.createElement("img",{src:E.a,alt:"Logo",className:m.a.logo})))}var S=a(36),b=a.n(S),f=a(116),O=a(58),T=a.n(O);function h(){return r.a.createElement(i.a,{className:T.a.container},r.a.createElement(f.a,{disableShrink:!0,variant:"indeterminate",size:60}))}var y=a(17),x=function(e,t){return{type:e,payload:t}},v=a(43),R=a(118),j=a(59),g=a.n(j),C=a(119),N=a(117),I=a(125),B=a(128),G=a(120),A=a(129),L=a(126),k=a(48),P=a.n(k),w=a(49),D=a.n(w),F=a(121),M=a(64),Y=a(61),W=a.n(Y),U=a(60),H=a.n(U),J=a(18),K=a.n(J);var V=Object(M.a)({palette:{primary:{main:"#000"},secondary:{main:"#000"}}}),Z=Object(o.b)((function(e){return{filtersReducer:e.filtersReducer,petsReducer:e.petsReducer}}),(function(e){return Object(y.b)({actionDispatcher:x},e)}))((function(e){var t=e.filtersReducer,a=e.actionDispatcher,c=t.animalTypes,s=t.selectedAnimalTypeFilter,o=t.petsBreeds,l=t.showAnimalsTypesCollapsed,u=t.showANimalBreedsCollapsed,p=t.animalsBreedsShowFrom,E=t.animalsBreedsShowUntil,_=t.breedsSelected;return Object(n.useEffect)((function(){0===c.length&&a("GET_ANIMAL_TYPES_BEGIN")})),r.a.createElement(N.a,{component:"nav",className:K.a.mainList,subheader:r.a.createElement(R.a,{component:"div"},_.map((function(e,t){return r.a.createElement(C.a,{key:t,startIcon:r.a.createElement(g.a,{className:K.a.filtersSelectedIcon}),className:K.a.filtersSelected,onClick:function(){return m(e)}},e)})))},r.a.createElement(B.a,{button:!0,onClick:function(){return a("SET_ANIMALS_TYPES_COLLAPSED",{data:!l})}},r.a.createElement(A.a,{className:K.a.mainListTitle,primary:"Type"})," ",l?r.a.createElement(P.a,null):r.a.createElement(D.a,null)," "),c.map((function(e,t){return r.a.createElement(L.a,{in:l,timeout:"auto",unmountOnExit:!0,key:t},r.a.createElement(N.a,{component:"div",disablePadding:!0,className:K.a.subList},r.a.createElement(B.a,{button:!0,onClick:function(){return t=e.name,void(s!==t&&(a("SET_BREEDS_SELECTED",{data:[]}),a("SET_SELECTED_ANIMAL_TYPE_FILTER",{data:t}),a("GET_BREEDS_BY_ANIMAL_TYPE_BEGIN",{data:t}),a("GET_PETS_WITH_FILTER_BEGIN",{type:t})));var t}},r.a.createElement(G.a,null,r.a.createElement(F.a,{theme:V},r.a.createElement(I.a,{edge:"end",checked:e.name===s}))," "),r.a.createElement(A.a,{primary:e.name}))))})),r.a.createElement(B.a,{button:!0,onClick:function(){return a("SET_ANIMALS_BREEDS_COLLAPSED",{data:!u})}},r.a.createElement(A.a,{className:K.a.mainListTitle,primary:"Breeds"})," ",u?r.a.createElement(P.a,null):r.a.createElement(D.a,null)," "),o.slice(p,E).map((function(e,t){return r.a.createElement(L.a,{in:u,timeout:"auto",unmountOnExit:!0,key:t},r.a.createElement(N.a,{component:"div",disablePadding:!0,className:K.a.subList}," ",function(e,t){return o.slice(p,E).length-1===t?r.a.createElement(B.a,null,r.a.createElement(i.a,{className:K.a.directionsArrowsContainer},r.a.createElement(C.a,{variant:"contained",className:K.a.previousButton,onClick:function(){a("SET_SHOW_MORE_BREEDS",{data:{from:p+-10,until:E-10}})},disabled:0===p,startIcon:r.a.createElement(H.a,null)}),r.a.createElement(C.a,{variant:"contained",className:K.a.nextButton,onClick:function(){a("SET_SHOW_MORE_BREEDS",{data:{from:p+10,until:E+10}})},disabled:E>=o.length,endIcon:r.a.createElement(W.a,null)}))):r.a.createElement(B.a,{button:!0,onClick:function(){return m(e.name)}},r.a.createElement(G.a,null,r.a.createElement(F.a,{theme:V},r.a.createElement(I.a,{edge:"end",checked:-1!==_.indexOf(e.name)}))),r.a.createElement(A.a,{primary:e.name}))}(e,t)," "))})));function m(e){var t=_.indexOf(e),n=Object(v.a)(_);-1===t?n.push(e):n.splice(t,1),a("SET_BREEDS_SELECTED",{data:n}),a("GET_PETS_WITH_FILTER_BEGIN",{type:s,breed:n})}})),q=a(87),z=a(122),X=a(31),Q=a.n(X),$=a(62),ee=a.n($);var te=Object(o.b)((function(e){return{petsReducer:e.petsReducer}}),(function(e){return Object(y.b)({actionDispatcher:x},e)}))((function(e){var t=e.petsReducer,a=e.actionDispatcher,c=t.petsData;return Object(n.useEffect)((function(){0===c.length&&a("GET_PETS_BEGIN")})),r.a.createElement(z.a,{container:!0,spacing:3},c.map((function(e,t){return console.log(e),r.a.createElement(z.a,{item:!0,xs:6,sm:4,md:2,lg:2,key:t},r.a.createElement(q.a,{className:Q.a.paper},r.a.createElement(i.a,{className:Q.a.petImageContainer},r.a.createElement("img",{src:e.photos.length>0?e.photos[0].large:ee.a,className:Q.a.petImage,alt:"petImg"})),r.a.createElement(i.a,{className:Q.a.nameContainer},e.name),r.a.createElement(i.a,{className:Q.a.breedContainer},e.breeds.primary)))})))}));var ae=function(e){return e.progressOnReducer.visible?r.a.createElement(h,null):r.a.createElement(i.a,{className:b.a.mainContainer},r.a.createElement(d,null),r.a.createElement(i.a,{className:b.a.subContainer},r.a.createElement(i.a,{className:b.a.filterContainer,onScroll:function(e){return function(e){var t=e.target;t.scrollHeight,t.scrollTop,t.clientHeight}(e)}},r.a.createElement(Z,null)),r.a.createElement(i.a,{className:b.a.dataContainer},r.a.createElement(te,null))))},ne=Object(o.b)((function(e){return{progressOnReducer:e.progressOnReducer}}))(ae),re=a(10),ce={petsData:[]};var se={animalTypes:[],petsBreeds:[],selectedAnimalTypeFilter:"",showAnimalsTypesCollapsed:!0,showANimalBreedsCollapsed:!1,animalsBreedsShowFrom:0,animalsBreedsShowUntil:10,breedsSelected:[]};var oe={visible:!1};var ie=Object(y.c)({petsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PETS_SUCCESS":case"GET_PETS_WITH_FILTERS_SUCCESS":return Object(re.a)(Object(re.a)({},e),{},{petsData:t.payload.animals});default:return e}},filtersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ANIMAL_TYPES_SUCCESS":return Object(re.a)(Object(re.a)({},e),{},{animalTypes:t.payload.types});case"SET_SELECTED_ANIMAL_TYPE_FILTER":return Object(re.a)(Object(re.a)({},e),{},{selectedAnimalTypeFilter:t.payload.data});case"GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS":return Object(re.a)(Object(re.a)({},e),{},{petsBreeds:t.payload.breeds});case"SET_ANIMALS_TYPES_COLLAPSED":return Object(re.a)(Object(re.a)({},e),{},{showAnimalsTypesCollapsed:t.payload.data});case"SET_ANIMALS_BREEDS_COLLAPSED":return Object(re.a)(Object(re.a)({},e),{},{showANimalBreedsCollapsed:t.payload.data});case"SET_SHOW_MORE_BREEDS":return Object(re.a)(Object(re.a)({},e),{},{animalsBreedsShowFrom:t.payload.data.from,animalsBreedsShowUntil:t.payload.data.until});case"SET_BREEDS_SELECTED":return Object(re.a)(Object(re.a)({},e),{},{breedsSelected:t.payload.data});default:return e}},progressOnReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROGRESS_OFF":return Object(re.a)(Object(re.a)({},e),{},{visible:!1});case"SET_PROGRESS_ON":return Object(re.a)(Object(re.a)({},e),{},{visible:!0});default:return e}}}),le=a(65),ue=Object(le.a)();a(84);var pe=a(12),Ee=a.n(pe),_e=a(8),me=a(63),de="QjZE3qZXQnpsJ2iAWJLCv4AaTGJO8r4ki71V6g3RLZ8ZBu4cuG",Se="9i1e56VXsfo1Kn0b2c73VdFlCWCLJuRwEXgqycxh",be=function(){return localStorage.getItem("token","no-token")},fe=function(e,t){var a=new URL(e);return Object.keys(t).forEach((function(e){"object"===typeof t[e]?a.searchParams.append(e,Object(v.a)(t[e])):a.searchParams.append(e,t[e])})),a};function Oe(e,t,a){return Te.apply(this,arguments)}function Te(){return(Te=Object(me.a)(Ee.a.mark((function e(t,a,n){var r,c,s;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("POST"!==a){e.next=10;break}return(r=new FormData).append("grant_type","client_credentials"),r.append("client_id",de),r.append("client_secret",Se),e.next=7,fetch(t,{method:a,body:r}).then((function(e){return e.json()}));case 7:return e.abrupt("return",e.sent);case 10:if("GET"!==a){e.next=17;break}return c=be(),s=new URL(t),n&&(s=fe(t,n)),e.next=16,fetch(s,{method:a,headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=Ee.a.mark(ve),ye=Ee.a.mark(Re),xe=Ee.a.mark(je);function ve(){var e;return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_e.c)({type:"SET_PROGRESS_ON"});case 3:return t.next=5,Object(_e.b)(Oe,"https://api.petfinder.com/v2/types/","GET");case 5:if(!(e=t.sent).error){t.next=11;break}return t.next=9,console.log(e);case 9:t.next=13;break;case 11:return t.next=13,Object(_e.c)({type:"GET_ANIMAL_TYPES_SUCCESS",payload:e});case 13:return t.next=15,Object(_e.c)({type:"SET_PROGRESS_OFF"});case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(0),t.next=21,Object(_e.c)({type:"NEW_ERROR",payload:{message:t.t0.message,actionDispatched:"GET_ANIMAL_TYPES_BEGIN"}});case 21:case"end":return t.stop()}}),he,null,[[0,17]])}function Re(e){var t,a;return Ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://api.petfinder.com/v2/types/{type}/breeds".replace("{type}",e.payload.data),n.next=4,Object(_e.c)({type:"SET_PROGRESS_ON"});case 4:return n.next=6,Object(_e.b)(Oe,t,"GET");case 6:if(!(a=n.sent).error){n.next=12;break}return n.next=10,console.log(a);case 10:n.next=14;break;case 12:return n.next=14,Object(_e.c)({type:"GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS",payload:a});case 14:return n.next=16,Object(_e.c)({type:"SET_PROGRESS_OFF"});case 16:n.next=22;break;case 18:return n.prev=18,n.t0=n.catch(0),n.next=22,Object(_e.c)({type:"NEW_ERROR",payload:{message:n.t0.message,actionDispatched:"GET_BREEDS_BY_ANIMAL_TYPE_BEGIN"}});case 22:case"end":return n.stop()}}),ye,null,[[0,18]])}function je(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.d)("GET_ANIMAL_TYPES_BEGIN",ve);case 2:return e.next=4,Object(_e.d)("GET_BREEDS_BY_ANIMAL_TYPE_BEGIN",Re);case 4:case"end":return e.stop()}}),xe)}var ge=Ee.a.mark(Ne),Ce=Ee.a.mark(Ie);function Ne(e){var t;return Ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"Failed to fetch"!==e.payload.message){a.next=11;break}return a.next=4,Object(_e.b)(Oe,"https://api.petfinder.com/v2/oauth2/token/","POST");case 4:return t=a.sent,a.next=7,n=t.access_token,localStorage.setItem("token",n);case 7:return a.next=9,Object(_e.c)({type:e.payload.actionDispatched});case 9:a.next=13;break;case 11:alert("hubo un error :c"),console.log(e.payload);case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),console.log(a.t0);case 18:case"end":return a.stop()}var n}),ge,null,[[0,15]])}function Ie(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.d)("NEW_ERROR",Ne);case 2:case"end":return e.stop()}}),Ce)}var Be=Ee.a.mark(Le),Ge=Ee.a.mark(ke),Ae=Ee.a.mark(Pe);function Le(){var e;return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_e.c)({type:"SET_PROGRESS_ON"});case 3:return t.next=5,Object(_e.b)(Oe,"https://api.petfinder.com/v2/animals/","GET");case 5:if(!(e=t.sent).error){t.next=11;break}return t.next=9,console.log(e);case 9:t.next=13;break;case 11:return t.next=13,Object(_e.c)({type:"GET_PETS_SUCCESS",payload:e});case 13:return t.next=15,Object(_e.c)({type:"SET_PROGRESS_OFF"});case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(0),t.next=21,Object(_e.c)({type:"NEW_ERROR",payload:{message:t.t0.message,actionDispatched:"GET_PETS_BEGIN"}});case 21:case"end":return t.stop()}}),Be,null,[[0,17]])}function ke(e){var t;return Ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_e.c)({type:"SET_PROGRESS_ON"});case 3:return a.next=5,Object(_e.b)(Oe,"https://api.petfinder.com/v2/animals/","GET",e.payload);case 5:if(!(t=a.sent).error){a.next=11;break}return a.next=9,console.log(t);case 9:a.next=13;break;case 11:return a.next=13,Object(_e.c)({type:"GET_PETS_WITH_FILTERS_SUCCESS",payload:t});case 13:return a.next=15,Object(_e.c)({type:"SET_PROGRESS_OFF"});case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(0),a.next=21,Object(_e.c)({type:"NEW_ERROR",payload:{message:a.t0.message,actionDispatched:"GET_PETS_WITH_FILTER_BEGIN"}});case 21:case"end":return a.stop()}}),Ge,null,[[0,17]])}function Pe(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.d)("GET_PETS_BEGIN",Le);case 2:return e.next=4,Object(_e.d)("GET_PETS_WITH_FILTER_BEGIN",ke);case 4:case"end":return e.stop()}}),Ae)}var we=Ee.a.mark(De);function De(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.a)([je(),Ie(),Pe()]);case 2:case"end":return e.stop()}}),we)}var Fe=Object(re.a)(Object(re.a)({},Object(y.e)(ie,Object(y.a)(ue))),{},{runSaga:ue.run});Fe.runSaga(De),s.a.render(r.a.createElement(o.a,{store:Fe},r.a.createElement(ne,null)),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d4b9b347.chunk.js.map