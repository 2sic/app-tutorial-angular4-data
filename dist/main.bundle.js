webpackJsonp([1,4],{

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 126;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(136);
/* harmony export (immutable) */ __webpack_exports__["getUser"] = getUser;
/* harmony export (immutable) */ __webpack_exports__["Run"] = Run;


// import { platformBrowserDnn } from './bootstrap/dnn.bootstrap';


if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
function getUser() {
    console.log('get user called');
    var promise = new Promise(function (resolve, reject) { return resolve(0); });
    return promise;
}
// platformBrowserDnn().bootstrapModule(AppModule);
var dnnProviders = [
    {
        provide: "mid",
        useValue: 17
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_INITIALIZER */],
        useFactory: function () { return function () { return getUser(); }; },
        deps: [],
        multi: true
    }
];
// declare const window: any;
// window.dnnNg = { 
//   buildProviders: function(base: string, mid: number) : Provider[] {
//     var dnnProviders : Provider[] = [
//       { provide: "mid", useValue: mid },
//       { provide: APP_BASE_HREF, useValue: base }  // override the base path...
//     ]
//     return dnnProviders;
//   },
//   platform: platformBrowserDynamic,
//   // bootstrapper: platformBrowserDynamic(dnnProviders).bootstrapModule,
//   modules: [AppModule]
// };
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])(dnnProviders).bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
function Run() {
    console.log("running...");
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__ = __webpack_require__(55);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = (function () {
    function AppComponent(appRef, el, injector, $2sxc, /*, private sxcInstance: sxcInstance,*/ mid, moduleIdService) {
        var _this = this;
        this.appRef = appRef;
        this.el = el;
        this.injector = injector;
        this.$2sxc = $2sxc;
        this.mid = mid;
        this.moduleIdService = moduleIdService;
        this.title = 'Hello Angular 4 Data on DNN! Let\'s load!';
        console.log(el.nativeElement.getAttribute('foo'));
        $2sxc.bootstrap(el);
        console.log("mid", mid);
        // console.log("2sxc: ", $2sxc);
        // console.log("sxcI: ", sxcInstance);
        // console.log("get", sxcInstance.get());
        // console.log("mid", mid);
        moduleIdService.moduleId
            .subscribe(function (id) { return _this.modId = id; });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('init appref in components', this.appRef);
        // let element2: ElementRef = this.appRef['_rootComponents'][0].location;
        var element = this.injector.get(this.appRef.componentTypes[0]).elementRef;
        console.log("el ref", element);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: "\n    <h1>{{title}}</h1>\n    <p>moduleId (async pipe): {{moduleIdService.moduleId | async}}</p>\n    <p>moduleId (subscription): {{modId}}</p>\n  ",
        styles: [__webpack_require__(191)]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Inject */])("mid")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injector */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* $2sxc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* $2sxc */]) === "function" && _d || Object, Number, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__["a" /* DnnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__["a" /* DnnService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tosic_sxc_2sxc__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tosic_sxc_sxcInstance__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dnn_dnn_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule(applicationRef) {
        this.applicationRef = applicationRef;
        console.log('constructor appref', applicationRef);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_tosic_sxc_2sxc__["a" /* $2sxc */], __WEBPACK_IMPORTED_MODULE_6_tosic_sxc_sxcInstance__["a" /* sxcInstance */], __WEBPACK_IMPORTED_MODULE_7_dnn_dnn_service__["a" /* DnnService */]
            // ,  {
            //   provide: APP_INITIALIZER,
            //     useFactory: (appRef: ApplicationRef /*userServ: UserService*/) => () => initInNg(appRef),
            //     deps: [ApplicationRef/*UserService, Http*/],
            //     multi: true
            //   }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ApplicationRef */]) === "function" && _a || Object])
], AppModule);

var _a;
// export function initInNg(appRef: ApplicationRef): Promise<any> {
//     console.log('initInIng called');
//     console.log('appref', appRef);
//     var promise = new Promise<any>( (resolve, reject) =>  resolve(0));
//     return promise;
// }
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 136:
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sxcInstance; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sxcInstance = (function () {
    function sxcInstance(app, injector, $2sxc, moduleIdService) {
        //   let element2: ElementRef = this.app['_rootComponents'][0].location;
        //   let element = injector.get(app.componentTypes[0]).elementRef;
        this.app = app;
        this.injector = injector;
        this.$2sxc = $2sxc;
        this.moduleIdService = moduleIdService;
        //   this.sxc = $2sxc.getInstance(element);
        //   this.resolveServiceUrl = this.sxc.resolveServiceUrl;
        //   this.id = this.sxc.id;
        //   this.cbid = this.sxc.cbid;
        //   this
        //return $2sxc.getInstance(appId);
        moduleIdService.moduleId
            .subscribe(function (id) {
            console.log("a new moduleId arrived: " + id);
        });
    }
    sxcInstance.prototype.resolveServiceUrl = function (path) { throw "not implemented"; };
    ;
    sxcInstance.prototype.isEditMode = function () {
        throw new Error("Method not implemented.");
    };
    sxcInstance.prototype.get = function () {
        var element2 = this.app['_rootComponents'][0].location;
        var element = this.injector.get(this.app.componentTypes[0]).elementRef;
        this.sxc = this.$2sxc.getInstance(element);
        return this.sxc;
    };
    return sxcInstance;
}());
sxcInstance = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* $2sxc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_2sxc__["a" /* $2sxc */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__["a" /* DnnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_dnn_dnn_service__["a" /* DnnService */]) === "function" && _d || Object])
], sxcInstance);

var _a, _b, _c, _d;
//# sourceMappingURL=sxcInstance.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DnnService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DnnService = (function () {
    function DnnService(appRef) {
        this.appRef = appRef;
        this.moduleIdSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.servicesFramework = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.moduleId = this.moduleIdSubject.asObservable();
        this.moduleIdSubject.next(470);
    }
    DnnService.prototype.ngOnInit = function () {
    };
    return DnnService;
}());
DnnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ApplicationRef */]) === "function" && _a || Object])
], DnnService);

var _a;
//# sourceMappingURL=dnn.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $2sxc; });
function $2sxcProviderFactory() {
    return window.$2sxc;
}
var $2sxc /*Interface*/ = (function () {
    function $2sxc() {
        this.globSxc = $2sxcProviderFactory();
    }
    ;
    $2sxc.prototype.bootstrap = function (htmlNode) {
        var sxc = window.$2sxc(htmlNode.nativeElement);
        console.log('sxc in bootstrap', sxc);
    };
    $2sxc.prototype.getInstance = function (seed, cbid) {
        return this.globSxc(seed, cbid);
    };
    $2sxc.prototype.urlParams = function (name) {
        return this.globSxc.urlParams(name);
    };
    return $2sxc;
}());

//# sourceMappingURL=$2sxc.js.map

/***/ })

},[469]);
//# sourceMappingURL=main.bundle.js.map