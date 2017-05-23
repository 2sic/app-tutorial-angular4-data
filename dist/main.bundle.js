webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 128;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_SxcAngular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_sxc_app_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tosic_sxc_sxc_content_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(element, sxcNg, crf) {
        var _this = _super.call(this, element, sxcNg) || this;
        _this.element = element;
        _this.sxcNg = sxcNg;
        _this.crf = crf;
        _this.title = 'Hello Angular 4 Data on DNN! Let\'s load now!';
        var person = crf.resource("Person");
        var personObservable = person.get();
        personObservable.subscribe(function (res) {
            console.log('got person', res);
        });
        sxcNg.moduleId
            .subscribe(function (id) { return _this.modId = id; });
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        // let's try stuff...
    };
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_2_tosic_sxc_sxc_app_component__["a" /* SxcAppComponent */]));
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: "\n    <h1>{{title}}</h1>\n    <p>moduleId (async pipe): {{sxcNg.moduleId | async}}</p>\n    <p>moduleId (subscription): {{modId}}</p>\n  ",
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_SxcAngular__["a" /* SxcAngular */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_tosic_sxc_SxcAngular__["a" /* SxcAngular */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_tosic_sxc_sxc_content_service__["a" /* ContentResourceFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_tosic_sxc_sxc_content_service__["a" /* ContentResourceFactory */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tosic_sxc_SxcAngular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tosic_sxc_sxc_content_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tosic_sxc_sxc_http_provider__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dev_dev_settings_provider__ = __webpack_require__(137);
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
        providers: [__WEBPACK_IMPORTED_MODULE_8_dev_dev_settings_provider__["a" /* DevSettingsProvider */], __WEBPACK_IMPORTED_MODULE_5_tosic_sxc_SxcAngular__["a" /* SxcAngular */], __WEBPACK_IMPORTED_MODULE_6_tosic_sxc_sxc_content_service__["a" /* ContentResourceFactory */], __WEBPACK_IMPORTED_MODULE_7_tosic_sxc_sxc_http_provider__["a" /* SxcHttpProvider */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tosic_sxc_dev_dnn_dev_settings__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevSettingsProvider; });

var DevSettingsProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0_tosic_sxc_dev_dnn_dev_settings__["a" /* DnnDevSettings */],
    useValue: {
        ignoreMissing$2sxc: true,
        ignoreMissingServicesFramework: true,
        forceUse: false,
        moduleId: 17,
        tabId: 36,
        path: "/"
    },
};
//# sourceMappingURL=dev-settings.provider.js.map

/***/ }),

/***/ 138:
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SxcAppComponent; });
var SxcAppComponent = (function () {
    function SxcAppComponent(element, sxcNg) {
        sxcNg.autoConfigure(element);
    }
    return SxcAppComponent;
}());

//# sourceMappingURL=sxc-app.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sxc_http__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_SxcAngular__ = __webpack_require__(39);
/* unused harmony export DnnHttpProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SxcHttpProvider; });



function DnnHttpProviderFactory(backend, defaultOptions, sxc) {
    return new __WEBPACK_IMPORTED_MODULE_0__sxc_http__["a" /* SxcHttp */](backend, defaultOptions, sxc);
}
var SxcHttpProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
    useFactory: DnnHttpProviderFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_SxcAngular__["a" /* SxcAngular */]]
};
//# sourceMappingURL=sxc-http.provider.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_SxcAngular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SxcHttp; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SxcHttp = (function (_super) {
    __extends(SxcHttp, _super);
    function SxcHttp(backend, defaultOptions, sxcNg) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.sxcNg = sxcNg;
        return _this;
    }
    SxcHttp.prototype.request = function (url, options) {
        var _this = this;
        if (options === void 0) { options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */](); }
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.sxcNg.context.take(1).subscribe(function (res) {
            // todo: better dev mode detection using environment
            var isDevMode = window.location.hostname === 'localhost';
            if (typeof url === 'string') {
                url = res.sxc.resolveServiceUrl(url);
                _this.configure(options, res);
            }
            else {
                url.url = res.sxc.resolveServiceUrl(url.url);
                _this.configure(url, res);
            }
            console.log("options", options);
            console.log('url', url);
            _super.prototype.request.call(_this, url) //, options)
                .subscribe(subject.next);
        }); //.catch(e => console.error(e))
        return subject.asObservable();
    };
    SxcHttp.prototype.configure = function (options, params) {
        if (!options.headers)
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        options.headers.append('ModuleId', params.moduleId.toString());
        options.headers.append('TabId', params.tabId.toString());
        options.headers.append('ContentBlockId', params.contentBlockId.toString());
        options.headers.append('RequestVerificationToken', params.antiForgeryToken);
        options.headers.append('X-Debugging-Hint', 'bootstrapped by Sxc4Angular');
        return options;
    };
    return SxcHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
SxcHttp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_SxcAngular__["a" /* SxcAngular */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_SxcAngular__["a" /* SxcAngular */]) === "function" && _c || Object])
], SxcHttp);

var _a, _b, _c;
//# sourceMappingURL=sxc-http.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_dev_dnn_dev_settings__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SxcAngular; });
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



var SxcAngular = (function () {
    function SxcAngular(devSettings) {
        var _this = this;
        this.devSettings = devSettings;
        this.midSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.tidSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.cbIdSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.afTokenSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.contextSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        this.sxcSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
        // make sure we have a devSettings, which at least has the minimal ignore-settings
        devSettings = Object.assign({}, {
            ignoreMissing$2sxc: false,
            ignoreMissingServicesFramework: false
        }, devSettings);
        this.globSxc = window.$2sxc;
        if (this.globSxc == undefined && !devSettings.ignoreMissing$2sxc)
            throw 'window.$2sxc is null - you probably forgot to include the script before loading angular';
        this.moduleId = this.midSubject.asObservable();
        this.tabId = this.tidSubject.asObservable();
        this.contentBlockId = this.cbIdSubject.asObservable();
        this.antiForgeryToken = this.afTokenSubject.asObservable();
        this.sxc = this.sxcSubject.asObservable();
        this.context = this.contextSubject.asObservable();
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].combineLatest(this.moduleId, this.tabId, this.contentBlockId, this.sxc, this.antiForgeryToken)
            .subscribe(function (res) { return _this.contextSubject.next({
            moduleId: res[0],
            tabId: res[1],
            contentBlockId: res[2],
            sxc: res[3],
            antiForgeryToken: res[4]
        }); });
    }
    ;
    SxcAngular.prototype.autoConfigure = function (htmlNode) {
        var _this = this;
        if (this.globSxc == undefined) {
            if (!this.devSettings.ignoreMissing$2sxc)
                throw "cannot autoConfigure - missing $2sxc";
            this.midSubject.next(this.devSettings.moduleId);
            this.tidSubject.next(this.devSettings.tabId);
            this.cbIdSubject.next(0);
        }
        else {
            var sxc = this.sxcInstance = this.globSxc(htmlNode.nativeElement);
            if (sxc == undefined || sxc == null)
                throw "couldn't get sxc instance - reason unknown";
            // update/publish moduleId
            this.midSubject.next(sxc.id);
            this.cbIdSubject.next(sxc.cbid);
            this.sxcSubject.next(sxc);
            // check if DNN Services framework exists...
            if (window.$ && window.$.ServicesFramework) {
                // run timer till sf is ready, but max for a second
                var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 100) // try every 100ms
                    .take(10) // max 10x
                    .subscribe(function (x) {
                    // this must be access AFTER a delay, as the SF is not be ready yet...
                    var sf = window.$.ServicesFramework(_this.sxcInstance.id);
                    if (sf.getAntiForgeryValue()) {
                        timer.unsubscribe();
                        if (window.dnn && window.dnn.vars && window.dnn.vars.length == 0)
                            window.dnn.vars = null; // must reset, as they are incorrectly initialized when accessed early
                        _this.tidSubject.next(sf.getTabId());
                        _this.afTokenSubject.next(sf.getAntiForgeryValue());
                    }
                });
            }
            else {
                if (!this.devSettings.ignoreMissingServicesFramework)
                    throw "DNN Services Framework is missing, and it's not allowed according to devSettings. Either set devSettings to ignore this, or ensure it's there";
                this.tidSubject.next(this.devSettings.tabId);
                this.afTokenSubject.next(this.devSettings.antiForgeryToken);
            }
        }
    };
    return SxcAngular;
}());
SxcAngular = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_dev_dnn_dev_settings__["a" /* DnnDevSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_tosic_sxc_dev_dnn_dev_settings__["a" /* DnnDevSettings */]) === "function" && _a || Object])
], SxcAngular);

var _a;
//# sourceMappingURL=SxcAngular.js.map

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DnnDevSettings; });
// This lets you configure test-values during development
var DnnDevSettings = (function () {
    function DnnDevSettings() {
        this.ignoreMissing$2sxc = false;
        this.ignoreMissingServicesFramework = false;
        this.forceUse = false;
        this.moduleId = 0;
        this.tabId = 0;
        this.path = "/";
    }
    return DnnDevSettings;
}());

//# sourceMappingURL=dnn-dev-settings.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentResourceFactory; });
/* unused harmony export ContentResource */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentResourceFactory = (function () {
    function ContentResourceFactory(http) {
        this.http = http;
    }
    ContentResourceFactory.prototype.resource = function (typeName) {
        return new ContentResource(this.http, typeName);
    };
    return ContentResourceFactory;
}());
ContentResourceFactory = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContentResourceFactory);

var ContentResource = (function () {
    function ContentResource(http, typeName) {
        this.http = http;
        this.typeName = typeName;
    }
    ContentResource.prototype.get = function (id) {
        if (id === void 0) { id = null; }
        var url = "app/auto/content/" + this.typeName;
        if (id)
            url += "/" + id.toString();
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        head.append("hello", "there");
        return this.http.get(url, { headers: head });
        // this.http.get(`${this.base + this.path}/DirectoryItem`, { headers: this.headers })
        //   .map(res => res.json().map((entry: DirectoryEntry) => {
        //     entry.Logo = this.base + entry.Logo;
        //     return entry;
        //   }))
        //   .subscribe(entries => this.entrySubject.next(entries));
    };
    return ContentResource;
}());
ContentResource = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, String])
], ContentResource);

var _a, _b;
//# sourceMappingURL=sxc-content.service.js.map

/***/ })

},[473]);
//# sourceMappingURL=main.bundle.js.map