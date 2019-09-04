(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_client_analysits_client_analysits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/client-analysits/client-analysits.component */ "./src/app/components/client-analysits/client-analysits.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"] },
    { path: 'analysits', component: _components_client_analysits_client_analysits_component__WEBPACK_IMPORTED_MODULE_3__["ClientAnalysitsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-client-intercorp-retail';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_client_analysits_client_analysits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/client-analysits/client-analysits.component */ "./src/app/components/client-analysits/client-analysits.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _components_client_prom_client_prom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client-prom/client-prom.component */ "./src/app/components/client-prom/client-prom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_client_client_component__WEBPACK_IMPORTED_MODULE_9__["ClientComponent"],
                _components_client_analysits_client_analysits_component__WEBPACK_IMPORTED_MODULE_10__["ClientAnalysitsComponent"],
                _components_client_prom_client_prom_component__WEBPACK_IMPORTED_MODULE_12__["ClientPromComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig, 'app-client-intercorp'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/client-analysits/client-analysits.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/client-analysits/client-analysits.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client-analysits/client-analysits.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/client-analysits/client-analysits.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-content\">\n      <span class=\"card-title\"><strong>Búsqueda de clientes</strong></span>\n      <form class=\"col s6\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input type=\"text\" name=\"apellido\" id=\"apellido\" placeholder=\"Apellido\" (input)=\"filterByLastname($event.target.value)\">\n            <label> Apellido </label>\n          </div>\n        </div>\n      </form>\n      <div> (*) No necesitas un boton buscar, es automatico</div>\n    </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-content\">\n    <strong class=\"card-title\">Lista de clientes</strong>\n    <table>\n        <thead>\n          <tr>\n              <th>Nombre</th>\n              <th>Apellido</th>\n              <th>Edad</th>\n              <th>Fecha Nac</th>\n              <th>Edad Muerte</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor= \"let cliente of clientList\">\n            <td>{{ cliente.nombre }}</td>\n            <td>{{ cliente.apellido }}</td>\n            <td>{{ cliente.edad }}</td>\n            <td>{{ cliente.fecha_nac }}</td>\n            <td>{{ cliente.edadMuerte }}</td> \n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/client-analysits/client-analysits.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/client-analysits/client-analysits.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientAnalysitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAnalysitsComponent", function() { return ClientAnalysitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientAnalysitsComponent = /** @class */ (function () {
    function ClientAnalysitsComponent(clientService) {
        this.clientService = clientService;
        this.client = {
            nombre: '',
            apellido: '',
            edad: 0,
            fecha_nac: ''
        };
    }
    ClientAnalysitsComponent.prototype.ngOnInit = function () { };
    ClientAnalysitsComponent.prototype.filterByLastname = function (value) {
        var _this = this;
        this.clientService.getClientesByLastname(value).subscribe(function (clientes) {
            clientes.forEach(function (item, index) {
                item.edadMuerte = Math.floor(Math.random() * (100 - item.edad)) + item.edad;
            });
            _this.clientList = clientes;
        });
    };
    ClientAnalysitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-analysits',
            template: __webpack_require__(/*! ./client-analysits.component.html */ "./src/app/components/client-analysits/client-analysits.component.html"),
            styles: [__webpack_require__(/*! ./client-analysits.component.css */ "./src/app/components/client-analysits/client-analysits.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientAnalysitsComponent);
    return ClientAnalysitsComponent;
}());



/***/ }),

/***/ "./src/app/components/client-prom/client-prom.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/client-prom/client-prom.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client-prom/client-prom.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/client-prom/client-prom.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client-prom works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/client-prom/client-prom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/client-prom/client-prom.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientPromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPromComponent", function() { return ClientPromComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientPromComponent = /** @class */ (function () {
    function ClientPromComponent() {
    }
    ClientPromComponent.prototype.ngOnInit = function () {
    };
    ClientPromComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-prom',
            template: __webpack_require__(/*! ./client-prom.component.html */ "./src/app/components/client-prom/client-prom.component.html"),
            styles: [__webpack_require__(/*! ./client-prom.component.css */ "./src/app/components/client-prom/client-prom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientPromComponent);
    return ClientPromComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/client/client.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\"><strong>Creación de clientes</strong></span>\n    <form (ngSubmit)=\"onGuardarCliente(formNew)\" #formNew=\"ngForm\" class=\"col s6\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input [(ngModel)]=\"client.nombre\" #nombre=\"ngModel\" type=\"text\" name=\"nombre\" id=\"nombre\" placeholder=\"Nombre\">\n          <label> Nombre </label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input [(ngModel)]=\"client.apellido\" #apellido=\"ngModel\" type=\"text\" name=\"apellido\" id=\"apellido\" placeholder=\"Apellido\">\n          <label> Apellido </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input [(ngModel)]=\"client.edad\" #edad=\"ngModel\" type=\"number\" name=\"edad\" id=\"edad\" placeholder=\"Edad\">\n          <label> Edad </label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input [(ngModel)]=\"client.fecha_nac\" #fecha_nac=\"ngModel\" type=\"text\" name=\"fecha_nac\" id=\"fecha_nac\" placeholder=\"Fecha de Nacimiento\">\n          <label> Fecha Nac. </label>\n        </div>\n        <button class=\"btn waves-effect waves-light right blue\" type=\"submit\" name=\"action\">Guardar\n            <i class=\"material-icons right\">send</i>\n        </button>\n        <br>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-container\">\n      <div class=\"row\">\n          <ul class=\"collection\">\n            <li class=\"collection-item\">\n              <strong>Estadísticas de clientes</strong>\n              <br>\n                <blockquote>Promedio de edad</blockquote>\n                <div class=\"container center\">\n                  <strong>{{ promedio }}</strong>\n                </div>\n              <br>\n                <blockquote>Desviación estándar</blockquote>\n                <div class=\"container center\">\n                  <strong>{{ std }}</strong>\n                </div>\n              <br>\n            </li>\n          </ul>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService) {
        this.clientService = clientService;
        this.client = {
            nombre: '',
            apellido: '',
            edad: 0,
            fecha_nac: ''
        };
        this.standardDeviation = function (arr, usePopulation) {
            if (usePopulation === void 0) { usePopulation = false; }
            var mean = arr.reduce(function (acc, val) { return acc + val; }, 0) / arr.length;
            return Math.sqrt(arr.reduce(function (acc, val) { return acc.concat(Math.pow((val - mean), 2)); }, []).reduce(function (acc, val) { return acc + val; }, 0) /
                (arr.length - (usePopulation ? 0 : 1)));
        };
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.calculate();
    };
    ClientComponent.prototype.calculate = function () {
        var _this = this;
        var ages = [];
        this.clientService.getClientes().subscribe(function (clientes) {
            clientes.forEach(function (item, index) {
                ages.push(item.edad);
            });
            _this.promedio = Math.round((ages.reduce(function (a, b) { return a + b; })) / ages.length);
            _this.std = Math.round(_this.standardDeviation(ages, true));
        });
    };
    ClientComponent.prototype.onGuardarCliente = function (myForm) {
        this.clientService.addCliente(this.client);
        this.calculate();
        this.resetform();
    };
    ClientComponent.prototype.resetform = function () {
        this.client.edad = 0;
        this.client.nombre = '';
        this.client.apellido = '';
        this.client.fecha_nac = '';
        this.client.edadMuerte = 0;
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/components/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/components/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"fix-color\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo center\"><img src=\"../../../assets/img/logo.png\" width=\"200\" height=\"80\"></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a [routerLink]=\"['analysits']\" class=\"item-link\">Análisis</a></li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        //this.clients = afs.collection('client').valueChanges();
        this.clientsCollection = afs.collection('client');
    }
    ClientService.prototype.getClientes = function () {
        this.clients = this.clientsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.clients;
    };
    ClientService.prototype.getClientesByLastname = function (lastname) {
        this.clientsCollectionFilter = this.afs.collection('client', function (ref) { return ref.where('apellido', '==', lastname); });
        this.clientsFilter = this.clientsCollectionFilter.valueChanges();
        return this.clientsFilter;
    };
    ClientService.prototype.addCliente = function (cliente) {
        this.clientsCollection.add(cliente);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA2v1779JAOGXeZYN0JvXTwz1yHXUysqzs",
        authDomain: "prueba-3808a.firebaseapp.com",
        databaseURL: "https://prueba-3808a.firebaseio.com",
        projectId: "prueba-3808a",
        storageBucket: "",
        messagingSenderId: "732323257809",
        appId: "1:732323257809:web:4d176e039bdf9014"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Carlos\Clientes\app-client-intercorp-retail\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map