webpackJsonp([1,4],{

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 125;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appRef, el, injector, sxcNg) {
        var _this = this;
        this.appRef = appRef;
        this.el = el;
        this.injector = injector;
        this.sxcNg = sxcNg;
        this.title = 'Hello Angular 4 Data on DNN! Let\'s load!';
        sxcNg.autoConfigure(el);
        sxcNg.moduleId
            .subscribe(function (id) { return _this.modId = id; });
    }
    AppComponent.prototype.ngOnInit = function () {
        // let's try stuff...
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: "\n    <h1>{{title}}</h1>\n    <p>moduleId (async pipe): {{sxcNg.moduleId | async}}</p>\n    <p>moduleId (subscription): {{modId}}</p>\n  ",
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Injector */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* SxcNg */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* SxcNg */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tosic_sxc_2sxc__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_tosic_sxc_2sxc__["a" /* SxcNg */] /* sxcInstance, DnnService*/],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SxcNg; });

var SxcNg = (function () {
    function SxcNg() {
        this.ready = false;
        // often important dnn properties
        this.midSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"]();
        this.tidSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"]();
        this.contentBlockIdSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"]();
        this.sfSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"]();
        this.sxcSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"]();
        this.globSxc = window.$2sxc;
        if (this.globSxc == undefined)
            console.log('window.$2sxc is null - you probably forgot to include the script before loading angular');
        this.moduleId = this.midSubject.asObservable();
        this.tabId = this.tidSubject.asObservable();
        this.contentBlockId = this.contentBlockIdSubject.asObservable();
        this.servicesFramework = this.sfSubject.asObservable();
        this.sxc = this.sxcSubject.asObservable();
    }
    ;
    SxcNg.prototype.autoConfigure = function (htmlNode) {
        if (this.globSxc == undefined)
            throw "cannot autoConfigure - missing $2sxc";
        var sxc = this.globSxc(htmlNode.nativeElement);
        console.log('sxc in bootstrap', sxc);
        if (sxc == undefined || sxc == null)
            throw "couldn't get sxc instance - reason unknown";
        this.sxcSubject.next(sxc);
        // update/publish moduleId
        this.midSubject.next(sxc.id);
        this.contentBlockIdSubject.next(sxc.cbid);
        // todo: this may need a delay, as the SF may not be ready yet...
        var sf = window.$.ServicesFramework(sxc.id);
        this.sfSubject.next(sf);
        this.tidSubject.next(sf.getTabId());
        this.ready = true;
    };
    SxcNg.prototype.getInstance = function (seed, cbid) {
        return this.globSxc(seed, cbid);
    };
    SxcNg.prototype.urlParams = function (name) {
        return this.globSxc.urlParams(name);
    };
    return SxcNg;
}());

//# sourceMappingURL=$2sxc.js.map

/***/ })

},[467]);
//# sourceMappingURL=main.bundle.js.map