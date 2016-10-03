function routes(a){a.when("/blank-survey",{templateUrl:"views/surveys/blank/blank-survey.tpl.html",controller:"BlankSurveyController",controllerAs:"blank"}).when("/fill-survey",{templateUrl:"views/surveys/fill/fill-survey.tpl.html",controller:"FillSurveyController",controllerAs:"fill"}).otherwise({redirectTo:"/blank-survey"})}function dataService(a,b,c){function d(c,d){var e=b+"/"+c;return angular.forEach(d,function(a,b){e=e+"&="+a}),a({url:e,method:"GET",header:{"User-Agent":"enriquezrene",Accept:"application/vnd.github.v3+json"},cache:!0}).then(function(a){return a.data})["catch"](f)}function e(a){return d("users/enriquezrene/repos",{})}function f(a){return c.error("XHR failed to SurveyService"),c.error(a),a}var g={getRepos:e};return g}angular.module("app",["app.routes","app.core","app.translate"]),angular.module("app.angular.default",["ui.bootstrap","ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch"]),angular.module("app.core",["app.services","ngAutocomplete"]),angular.module("app.routes",["ngRoute"]).config(routes),routes.$inject=["$routeProvider"],angular.module("app.services",[]),angular.module("app.translate",["pascalprecht.translate"]).config(["$translateProvider",function(a){a.translations("en",{"Menu.download.form":"Download Form","Menu.fill.form":"Fill Form","Basic.info.title":"Basic Information","Trailers.info.title":"Trailers","Btn.print.form":"Print Form","Label.name":"Name","Label.last.name":"Last Name","Label.email":"Email","Label.date":"Date","Label.city":"City","Label.theater":"Theater","Label.showtime":"Showtime Hour","Label.order":"Order","Label.duration":"Duration","Label.seconds":"seconds","Btn.add.trailer":"Add trailer","Label.no.records":"No records added"}),a.translations("es",{"Menu.download.form":"Descargar Formulario","Menu.fill.form":"Llenar Formulario","Basic.info.title":"Informacion Basica","Trailers.info.title":"Comerciales","Btn.print.form":"Imprimir Formulario","Label.name":"Nombre","Label.last.name":"Apellido","Label.email":"Email","Label.date":"Fecha","Label.city":"Ciudad","Label.theater":"Teatro","Label.showtime":"Hora de la Funcion","Label.order":"Orden","Label.duration":"Duracion","Label.seconds":"segundos","Btn.add.trailer":"Añadir Trailer","Label.no.records":"No se han agregado registros"}),a.translations("de",{"Menu.download.form":"Formular herunterladen","Menu.fill.form":"Formular ausfüllen","Basic.info.title":"Grundlagen ","Trailers.info.title":"Anhänger","Btn.print.form":"Druckform","Label.name":"Vorname","Label.last.name":"Zuname","Label.email":"E-Mail","Label.date":"Datum","Label.city":"City","Label.theater":"Schauspielhaus","Label.showtime":"Performanz - Stunde","Label.order":"Verordnung","Label.duration":"Dauer","Label.seconds":"sekunden","Btn.add.trailer":"Beifügen Handels","Label.no.records":"Keine Datensätze hinzugefügt"}),a.translations("fr",{"Menu.download.form":"Télécharger Form","Menu.fill.form":"Remplissez le formulaire","Basic.info.title":"Informations de base","Trailers.info.title":"Remorques","Btn.print.form":"Print Form","Label.name":"Nom","Label.last.name":"Le Nom","Label.email":"Email","Label.date":"Date","Label.city":"City","Label.theater":"Theater","Label.showtime":"Showtime Hour","Label.order":"Ordre","Label.duration":"Durée","Label.seconds":"secondes","Btn.add.trailer":"Ajouter commerciale","Label.no.records":"No records ajoutés"}),a.translations("it",{"Menu.download.form":"Scarica il modulo","Menu.fill.form":"Compilare il modulo","Basic.info.title":"Informazioni di base","Trailers.info.title":"Trailers","Btn.print.form":"Modulo di stampa","Label.name":"Nome","Label.last.name":"Cognome","Label.email":"e-mail","Label.date":"Data","Label.city":"City","Label.theater":"Teatro","Label.showtime":"Showtime Hour","Label.order":"Ordine","Label.duration":"Durata","Label.seconds":"secondi","Btn.add.trailer":"Aggiungi commerciale","Label.no.records":"Non ci sono record aggiunti"}),a.preferredLanguage("en")}]),angular.module("app.core").controller("BlankSurveyController",function(){}),angular.module("app.core").controller("FillSurveyController",function(){var a=this;a.options={types:"(cities)"},a.trailers_entered=[],a.add_trailer=function(){a.trailers_entered.push({trailer_order:a.trailer_order,trailer_name:a.trailer_name,trailer_duration:a.trailer_duration}),a.trailer_order="",a.trailer_name="",a.trailer_duration=""}}),angular.module("app.core").controller("i18nCtrl",["$translate","$scope",function(a,b){b.changeLanguage=function(b){a.use(b)}}]),angular.module("app").directive("bsActiveLink",["$location",function(a){return{restrict:"A",replace:!1,link:function(b,c){b.$on("$routeChangeSuccess",function(){var b=["/#"+a.path(),"#"+a.path(),a.path()];angular.forEach(c.find("a"),function(a){a=angular.element(a),-1!==b.indexOf(a.attr("href"))?a.parent().addClass("active"):a.parent().removeClass("active")})})}}}]),angular.module("ngAutocomplete",[]).directive("ngAutocomplete",function(){return{require:"ngModel",scope:{ngModel:"=",options:"=?",details:"=?"},link:function(a,b,c,d){var e,f=!1,g=function(){e={},a.options&&(f=a.options.watchEnter!==!0?!1:!0,a.options.types?(e.types=[],e.types.push(a.options.types),a.gPlace.setTypes(e.types)):a.gPlace.setTypes([]),a.options.bounds?(e.bounds=a.options.bounds,a.gPlace.setBounds(e.bounds)):a.gPlace.setBounds(null),a.options.country?(e.componentRestrictions={country:a.options.country},a.gPlace.setComponentRestrictions(e.componentRestrictions)):a.gPlace.setComponentRestrictions(null))};void 0==a.gPlace&&(a.gPlace=new google.maps.places.Autocomplete(b[0],{})),google.maps.event.addListener(a.gPlace,"place_changed",function(){var c=a.gPlace.getPlace();void 0!==c&&(void 0!==c.address_components?a.$apply(function(){a.details=c,d.$setViewValue(b.val())}):f&&h(c))});var h=function(c){var e=new google.maps.places.AutocompleteService;c.name.length>0&&e.getPlacePredictions({input:c.name,offset:c.name.length},function(c,e){if(null==c||0==c.length)a.$apply(function(){a.details=null});else{var f=new google.maps.places.PlacesService(b[0]);f.getDetails({reference:c[0].reference},function(c,e){e==google.maps.GeocoderStatus.OK&&a.$apply(function(){d.$setViewValue(c.formatted_address),b.val(c.formatted_address),a.details=c;b.on("focusout",function(a){b.val(c.formatted_address),b.unbind("focusout")})})})}})};d.$render=function(){var a=d.$viewValue;b.val(a)},a.watchOptions=function(){return a.options},a.$watch(a.watchOptions,function(){g()},!0)}}}),angular.module("app.services").constant("GH_BASE_URL","https://api.github.com").factory("SurveyService",dataService),dataService.$inject=["$http","GH_BASE_URL","$log"];