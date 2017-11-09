webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./create-article/create-article.module": [
		"../../../../../src/app/create-article/create-article.module.ts",
		"create-article.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-page {\n    display: block;\n    box-sizing: border-box;\n    padding: 0 40px;\n    font-size: 18px;\n    line-height: 24px;\n    font-weight: 300;\n    color: #0a0522;\n}\n\n.about-page h1 {\n    font-size: 24px;\n    line-height: 36px;\n}\n\n.about-page h3 {\n    font-size: 20px;\n    opacity: .9;\n}\n\n.about-page ul li {\n    opacity: .8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n    <h1>{{aboutInfo.mainTitle}}</h1>\n    <h3>{{aboutInfo.subTitle}}</h3>\n    <ul>\n        <li *ngFor=\"let technology of aboutInfo.technologies\">\n            {{ technology }}\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_service__ = __webpack_require__("../../../../../src/app/about-page/about.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = (function () {
    function AboutPageComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.aboutInfo = this.aboutService.getInfo();
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/app/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-page/about-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */]) === "function" && _a || Object])
], AboutPageComponent);

var _a;
//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-page/about.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__ = __webpack_require__("../../../../../src/app/notification/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutGuard = (function () {
    function AboutGuard(notificationService) {
        this.notificationService = notificationService;
    }
    AboutGuard.prototype.canActivate = function (next, state) {
        var props = {
            types: {
                error: 'error',
                success: 'success'
            },
            messages: {
                errorMessage: 'The access denied. You are not an Admin!',
                successMessage: 'Now, you are an Admin!'
            },
            duration: 3000
        };
        if (localStorage.getItem('admin')) {
            this.notificationService.closeNotification();
            return true;
        }
        this.notificationService
            .showNotificationByTime(props.types.error, props.messages.errorMessage, props.duration);
        return (localStorage.getItem('admin')) ? true : false;
    };
    return AboutGuard;
}());
AboutGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], AboutGuard);

var _a;
//# sourceMappingURL=about.guard.js.map

/***/ }),

/***/ "../../../../../src/app/about-page/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutService = (function () {
    function AboutService() {
        this.aboutInfo = {
            mainTitle: 'This SPA was made using Angular 4',
            subTitle: 'Technologies:',
            technologies: [
                'Animations',
                'Routing',
                'Reactive forms',
                'Two way data-binding',
                'One way data-binding',
                'Component modular architecture',
                'Guard routing',
                'Services',
                'Dependency Injection',
                'Directives and custom directives',
                'Pipes and custom pipes',
                'ES6 + TS',
                'BEM',
                'HTML',
                'CSS'
            ]
        };
    }
    AboutService.prototype.getInfo = function () {
        return this.aboutInfo;
    };
    return AboutService;
}());
AboutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AboutService);

//# sourceMappingURL=about.service.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-article-section {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 50px 20px;\n}\n\n.about-article {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    max-width: 600px;\n    width: 100%;\n}\n\n.about-article__img {\n    max-width: 400px;\n    width: 100%;\n    height: auto;\n    max-height: 400px;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n}\n\n.about-article__title {\n    box-sizing: border-box;\n    font-size: 24px;\n    line-height: 36px;\n    font-weight: 500;\n    margin-top: 30px;\n    margin-bottom: 10px;\n}\n\n.about-article__description {\n    width: 100%;\n    margin-left: 0;\n    margin-right: auto;\n    font-size: 18px;\n    line-height: 32px;\n    font-weight: 300;\n}\n\n.about-article__button {\n    margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"about-article-section\">\n    <div class=\"about-article\">\n        <img class=\"about-article__img\" [src]=\"currentArticle.img_src\" [alt]=\"currentArticle.name\">\n        <h1 class=\"about-article__title\">{{currentArticle.name}}</h1>\n        <p class=\"about-article__description\">\n            {{currentArticle.description}}\n        </p>\n    </div>\n\n    <button class=\"about-article__button common-btn\" (click)=\"goHomePage()\">Home page</button>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_article_service__ = __webpack_require__("../../../../../src/app/shared/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(activatedRoute, router, articleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.articleService = articleService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.currentId = params.id;
            }
        });
        this.currentArticle = this.articleService.getArticleById(this.currentId)[0];
    };
    AboutComponent.prototype.goHomePage = function () {
        this.router.navigateByUrl('/');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_article_service__["a" /* ArticleService */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-navigation></app-main-navigation>\n\n<router-outlet></router-outlet>\n\n<app-notification></app-notification>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent() {
        this.title = 'App';
        this.search = '';
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_routes__ = __webpack_require__("../../../../../src/app/route/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_navigation_main_navigation_component__ = __webpack_require__("../../../../../src/app/main-navigation/main-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_directives_background_directive__ = __webpack_require__("../../../../../src/app/shared/directives/background.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_directives_expand_description_directive__ = __webpack_require__("../../../../../src/app/shared/directives/expand-description.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_page_about_service__ = __webpack_require__("../../../../../src/app/about-page/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_page_about_guard__ = __webpack_require__("../../../../../src/app/about-page/about.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_phone_pipe__ = __webpack_require__("../../../../../src/app/shared/phone.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_search_article_pipe__ = __webpack_require__("../../../../../src/app/shared/search-article.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_article_service__ = __webpack_require__("../../../../../src/app/shared/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notification_notification_module__ = __webpack_require__("../../../../../src/app/notification/notification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__notification_notification_service__ = __webpack_require__("../../../../../src/app/notification/notification.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_directives_background_directive__["a" /* BackgroundDirective */],
            __WEBPACK_IMPORTED_MODULE_14__shared_directives_expand_description_directive__["a" /* ExpandDescriptionDirective */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_navigation_main_navigation_component__["a" /* MainNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_phone_pipe__["a" /* PhonePipe */],
            __WEBPACK_IMPORTED_MODULE_11__about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_search_article_pipe__["a" /* SearchArticlePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__notification_notification_module__["a" /* NotificationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__route_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__about_page_about_service__["a" /* AboutService */],
            __WEBPACK_IMPORTED_MODULE_16__about_page_about_guard__["a" /* AboutGuard */],
            __WEBPACK_IMPORTED_MODULE_19__shared_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_21__notification_notification_service__["a" /* NotificationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article {\n    box-sizing: border-box;\n    padding: 20px;\n    box-shadow: 0 3px 6px 0 rgba(123, 123, 123, 0.2);\n}\n\n:host + :host {\n    margin-left: 20px;\n}\n\n.article__preview {\n    position: relative;\n    width: 100%;\n    max-width: 300px;\n    height: auto;\n    max-height: 200px;\n    vertical-align: top;\n    overflow: hidden;\n}\n\n.article__preview-img {\n    max-width: 100%;\n    height: auto;\n}\n\n.article__open-article {\n    position: absolute;\n    content: '';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    transition: all .22s ease-in-out;\n    background-color: rgba(255, 255, 255, 0.7);\n    cursor: pointer;\n}\n\n.article__open-article-text {\n    box-sizing: border-box;\n    width: auto;\n    color: #333;\n    padding: 3px;\n    font-size: 24px;\n    line-height: 36px;\n    background-color: transparent;\n    outline: 0;\n    border: 0;\n    opacity: 1;\n    cursor: pointer;\n}\n\n.article__open-article:hover .article__open-article-text {\n    opacity: 0.7;\n}\n\n.article__open-article:active .article__open-article-text {\n    opacity: 0.5;\n}\n\n.article__preview:hover .article__open-article {\n    visibility: visible;\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n\n.article__body {\n    background-color: #fff;\n}\n\n.article__title {\n    max-width: 300px;\n    font-size: 20px;\n    line-height: 32px;\n    color: #333;\n}\n\n.article__description {\n    max-width: 300px;\n    font-size: 16px;\n    line-height: 24px;\n    color: #0a0522;\n    transition: all .6s cubic-bezier(.42, 0, .58, 1);\n    max-height: 500px;\n}\n\n.article__input-wrapper {\n    box-sizing: border-box;\n    padding-top: 20px;\n    display: block;\n    width: 100%;\n    margin-right: auto;\n    margin-left: 0;\n}\n\n.article__input-name {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    outline: 0;\n    color: rgba(9, 8, 34, 0.85);\n    border-top: 3px solid rgba(33, 33, 33, 0.2);\n    box-shadow: 0 2px 3px 0 rgba(122, 122, 122, 0.15);\n    transition: all .2s ease-in-out;\n}\n\n.article__input-name:focus {\n    color: rgba(13, 12, 34, 0.95);\n    box-shadow: 0 2px 3px 0 rgba(99, 99, 99, 0.2);\n    border-top: 3px solid rgba(77, 77, 77, 0.55);\n}\n\n.article__input-wrapper + .article__title {\n    margin-top: 20px;\n}\n\n.overflowed {\n    max-height: 50px;\n    overflow: hidden;\n}\n\n.article__btns {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.article__edit-title {\n\n}\n\n.article__edit-title-btn {\n    background-color: #59cd90;\n}\n\n.article__edit-title-btn:hover {\n    background-color: #00ba51;\n}\n\n.article__remove-article {\n\n}\n\n.article__remove-article-btn {\n    background-color: #B21200;\n}\n\n.article__remove-article-btn:hover {\n    background-color: #db2015;\n}\n\n.btn-article {\n    width: auto;\n    padding: 8px 15px;\n    font-size: 14px;\n    font-family: 'Helvetica', 'Arial', sans-serif;\n    font-weight: 300;\n    line-height: 18px;\n    border: 0;\n    outline: 0;\n    color: #fff;\n    border-radius: 4px;\n    opacity: 0.8;\n    transition: all .2s ease-in-out;\n    cursor: pointer;\n}\n\n.btn-article:hover {\n    opacity: 1;\n    color: #f7f7f7;\n}\n\n.article__edit-title + .article__remove-article {\n    margin-left: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\" id=\"{{item.id}}\">\n    <div class=\"article__preview\">\n        <img [src]=\"item.img_src\" alt=\"{{item.name}}\" class=\"article__preview-img\">\n        <div class=\"article__open-article\" (click)=\"goToAbout(item.id)\">\n            <span class=\"article__open-article-text\">Open</span>\n        </div>\n    </div>\n    <div class=\"article__body\">\n        <div *ngIf=\"editing\" class=\"article__input-wrapper\">\n            <input type=\"text\"\n                class=\"article__input-name\"\n                [value]=\"item.name\"\n                (input)=\"inputHandler($event.target.value)\"\n                placeholder=\"enter the new value\"\n            >\n        </div>\n        <h2 class=\"article__title\">{{item.name}}</h2>\n        <p class=\"article__description\" appExpandDescription [styles]=\"styles\">\n            {{item.description}}\n        </p>\n    </div>\n    <div class=\"article__btns\">\n        <div class=\"article__edit-title\">\n            <button class=\"article__edit-title-btn btn-article\" (click)=\"editHandler()\">{{ editing ? 'Done' : 'Edit'}}\n            </button>\n        </div>\n        <div class=\"article__remove-article\">\n            <button class=\"article__remove-article-btn btn-article\" (click)=\"removeHandler()\">Remove current article\n            </button>\n        </div>\n    </div>\n</article>\n\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent(router, activatedRoute) {
        this.router = router;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changedTitle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.removeArticle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.editing = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.goToAbout = function (id) {
        this.router.navigate(['about', id]);
    };
    ArticleComponent.prototype.editHandler = function () {
        if (this.editing) {
            this.changedTitle.emit(this.item);
        }
        this.editing = !this.editing;
    };
    ArticleComponent.prototype.inputHandler = function (value) {
        this.item.name = value;
    };
    ArticleComponent.prototype.removeHandler = function () {
        this.removeArticle.emit(this.item);
    };
    return ArticleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "styles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ArticleComponent.prototype, "changedTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ArticleComponent.prototype, "removeArticle", void 0);
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ArticleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    transition: all .3s ease-in-out;\n}\n\n.home__list-of-articles {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    max-width: 1280px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0;\n    padding: 40px;\n}\n\napp-article {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 40px;\n}\n\napp-article + app-article {\n    margin-left: 20px;\n}\n\n@media screen and (min-width: 1140px) {\n    .home__list-of-articles app-article:nth-child(3n+1) {\n        margin-left: 0;\n    }\n}\n\n@media screen and (max-width: 1140px) {\n    app-article {\n        margin-left: 0;\n    }\n\n    app-article + app-article {\n        margin-left: 40px;\n    }\n\n    .home__list-of-articles app-article:nth-child(2n+1) {\n        margin-left: 0;\n    }\n}\n\n.blue {\n    background-color: blue;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <app-search\n        (changeQuery)=\"changeSearchQuery($event)\"\n        (changeQueryByBadge)=\"changeSearchQueryByBadge($event)\"\n        [search]=\"query\">\n    </app-search>\n\n    <ul class=\"home__list-of-articles\">\n        <app-article\n            *ngFor=\"let item of articles | articleName:query\"\n            [item]=\"item\"\n            [styles]=\"styles\"\n            (changedTitle)=\"titleHandler($event)\"\n            (removeArticle)=\"removeArticleHandler($event)\">\n        </app-article>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_article_service__ = __webpack_require__("../../../../../src/app/shared/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(articleService) {
        this.articleService = articleService;
        this.articles = [];
        this.query = '';
        this.styles = {
            maxHeight: '50px',
            overflow: 'hidden'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.getArticles();
    };
    HomeComponent.prototype.titleHandler = function (item) {
        this.articleService.updateArticle(item);
    };
    HomeComponent.prototype.removeArticleHandler = function (item) {
        this.articleService.removeArticle(item);
        this.articles = this.articleService.getArticles();
    };
    HomeComponent.prototype.changeSearchQuery = function (search) {
        this.query = search;
    };
    HomeComponent.prototype.changeSearchQueryByBadge = function (search) {
        this.query = search;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-navigation/main-navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    box-sizing: border-box;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 60px;\n    width: 100%;\n    display: block;\n    font-family: 'Helvetica', 'Arial', sans-serif;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .15);\n    background-color: #fff;\n    z-index: 100;\n}\n\n.header__nav {\n    display: block;\n    height: 100%;\n    z-index: 100;\n    position: relative;\n}\n\n.header__nav-list {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 40px;\n    margin: 0;\n}\n\n.header__nav-item {\n    box-sizing: border-box;\n    list-style: none;\n    padding-right: 10px;\n    border-right: 1px solid rgba(10, 5, 34, 0.4);\n    outline: 0;\n}\n\n.header__nav-item:last-child {\n    padding-right: 0;\n    border-right: 1px solid transparent;\n}\n\n.header__nav-link {\n    font-size: 16px;\n    line-height: 24px;\n    color: #0a0522;\n    text-decoration: none;\n    text-shadow: 0 2px 3px rgba(123, 123, 123, 0.2);\n    opacity: 1;\n    transition: all .2s ease;\n    outline: 0;\n}\n\n.header__nav-link:hover {\n    opacity: 0.8;\n    color: #090822;\n}\n\n.header__nav-link:active {\n    opacity: 0.6;\n}\n\n.header__nav-link.active {\n    opacity: 0.5;\n}\n\n.header__nav-link.active:hover {\n    opacity: 0.5;\n}\n\n.header__nav-item + .header__nav-item {\n    margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-navigation/main-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <nav class=\"header__nav\">\n        <ul class=\"header__nav-list\">\n            <li class=\"header__nav-item\">\n                <a routerLink=\"/\" [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\"\n                   class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-item\">\n                <a routerLink=\"/create-article\" routerLinkActive=\"active\" class=\"header__nav-link\">Create Article</a>\n            </li>\n            <li class=\"header__nav-item\">\n                <a routerLink=\"/about-page\" routerLinkActive=\"active\" class=\"header__nav-link\">About</a>\n            </li>\n            <li class=\"header__nav-item\">\n                <a href=\"#\" class=\"header__nav-link\" (click)=\"becomeAdmin($event)\">Become an Administrator</a>\n            </li>\n            <li class=\"header__nav-item\">\n                <a href=\"#\" class=\"header__nav-link\" (click)=\"becomeUser($event)\">Become an User</a>\n            </li>\n        </ul>\n    </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/main-navigation/main-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__ = __webpack_require__("../../../../../src/app/notification/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavigationComponent = (function () {
    function MainNavigationComponent(notificationService) {
        this.notificationService = notificationService;
    }
    MainNavigationComponent.prototype.ngOnInit = function () {
        this.notificationState = this.notificationService.state$.value.value;
    };
    MainNavigationComponent.prototype.becomeAdmin = function (event) {
        event.preventDefault();
        var notification = this.notificationService;
        localStorage.setItem('admin', 'true');
        if (!this.notificationState) {
            this.notificationService
                .showNotificationByTime(notification.props.types.success, notification.props.messages.successMessage, notification.props.duration);
            this.notificationState = true;
        }
    };
    MainNavigationComponent.prototype.becomeUser = function (event) {
        var notification = this.notificationService;
        localStorage.removeItem('admin');
        if (this.notificationState) {
            this.notificationService.closeNotification();
            this.notificationService
                .showNotificationByTime(notification.props.types.error, notification.props.messages.notAdmin, notification.props.duration);
            this.notificationState = false;
        }
    };
    return MainNavigationComponent;
}());
MainNavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-navigation',
        template: __webpack_require__("../../../../../src/app/main-navigation/main-navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-navigation/main-navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], MainNavigationComponent);

var _a;
//# sourceMappingURL=main-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notification {\n    position: fixed;\n    box-sizing: border-box;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    display: block;\n    padding: 20px;\n    min-width: 300px;\n    min-height: 80px;\n    border: 1px solid grey;\n    text-align: center;\n    color: #0a0522;\n    background-color: #fff;\n    box-shadow: 0 25px 45px 0 rgba(0, 0, 0, 0.16);\n    border-radius: 3px;\n}\n\n.notification--error {\n    color: #B21200;\n    border: 1px solid #B21200;\n}\n\n.notification--success {\n    color: #00ba51;\n    border: 1px solid #00ba51;\n}\n\n.notification__description {\n    font-size: 14px;\n    color: inherit;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notificationState\"\n     [@notification]=\"notificationState\"\n     class=\"notification notification--{{type}}\"\n>\n    <p class=\"notification__description\">{{description}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_service__ = __webpack_require__("../../../../../src/app/notification/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notification$.subscribe(function (data) {
            _this.type = data.type;
            _this.description = data.description;
        });
        this.notificationService.state$.subscribe(function (data) {
            _this.notificationState = data.value;
        });
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('notification', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ opacity: '1' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ opacity: '0' }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ opacity: '1' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__notification_component__["a" /* NotificationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__notification_component__["a" /* NotificationComponent */]
        ]
    })
], NotificationModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService() {
        this.state$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["a" /* BehaviorSubject */]({ value: false });
        this.notification$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["a" /* BehaviorSubject */]({ type: 'error', description: 'Error!' });
        this.props = {
            types: {
                error: 'error',
                success: 'success'
            },
            messages: {
                errorMessage: 'The access denied. You are not an Admin!',
                successMessage: 'Now, you are an Admin!',
                notAdmin: 'Now, you are not an Admin'
            },
            duration: 3000
        };
    }
    NotificationService.prototype.showNotification = function (type, description) {
        this.notification$.next({ type: type, description: description });
        this.state$.next({ value: true });
    };
    NotificationService.prototype.showNotificationByTime = function (type, description, ms) {
        var _this = this;
        this.showNotification(type, description);
        setTimeout(function () {
            _this.state$.next({ value: false });
        }, ms);
    };
    NotificationService.prototype.closeNotification = function () {
        this.state$.next({ value: false });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/route/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_page_about_guard__ = __webpack_require__("../../../../../src/app/about-page/about.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'create-article',
        loadChildren: './create-article/create-article.module#CreateArticleModule'
    },
    {
        path: 'about/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'about-page',
        component: __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__["a" /* AboutPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__about_page_about_guard__["a" /* AboutGuard */]],
        pathMatch: 'full'
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.search__fieldset {\n    display: block;\n    width: 100%;\n    outline: 0;\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.search__label {\n    display: block;\n    font-size: 14px;\n    line-height: 18px;\n    color: #090822;\n    opacity: 0.8;\n}\n\n.search__label + .search__input {\n    margin-top: 10px;\n}\n\n.search__input {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 10px 15px;\n    border-radius: 3px;\n    border: 0;\n    outline: 0;\n    color: rgba(9, 8, 34, 0.85);\n    border-top: 3px solid rgba(33, 33, 33, 0.2);\n    box-shadow: 0 2px 3px 0 rgba(122, 122, 122, 0.15);\n    transition: all .2s ease-in-out;\n}\n\n.search__input:focus {\n    color: rgba(13, 12, 34, 0.95);\n    box-shadow: 0 2px 3px 0 rgba(99, 99, 99, 0.2);\n    border-top: 3px solid rgba(77, 77, 77, 0.55);\n}\n\n.search__badge-list {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 0;\n    padding: 20px;\n}\n\n.search__badge-item + .search__badge-item {\n    margin-left: 12px;\n}\n\n.search__badge-item {\n    list-style: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n    <fieldset class=\"search__fieldset\">\n        <label class=\"search__label\">Enter the name of article:</label>\n        <input [(ngModel)]=\"search\"\n               (input)=\"changeQueryByInput($event)\"\n               class=\"search__input\"\n               type=\"text\">\n    </fieldset>\n\n    <ul class=\"search__badge-list\">\n        <li *ngFor=\"let badge of badgeTypes; let idx = index\"\n            (click)=\"changeByBadgeName(badgeTypes[idx])\"\n            class=\"search__badge-item badge\">\n            {{ badge }}\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.badgeTypes = ['Angular', 'Redux', 'Vue', 'WebPack'];
        this.changeQuery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changeQueryByBadge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.changeQueryByInput = function (event) {
        this.changeQuery.emit(this.search);
    };
    SearchComponent.prototype.changeByBadgeName = function (name) {
        this.changeQueryByBadge.emit(name);
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "search", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "changeQuery", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "changeQueryByBadge", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const ARTICLES_API = './assets/articles';
var ArticleService = (function () {
    function ArticleService(_jsonp, http) {
        this._jsonp = _jsonp;
        this.http = http;
        // articles: Observable<any>;
        this.articles = [
            {
                id: 1,
                name: 'Get Started with Angular',
                description: 'Angular is basically a collection of Components brought together within modules. The many tools, such as the Angular CLI, allow you to easily creat...',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/tech/defaults/course_image_full_angular2.png'
            },
            {
                id: 2,
                name: 'Getting Started with Redux',
                description: 'orem dd sasada  adssaih apodjapd asd aknpihs as',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png?1496436379'
            },
            {
                id: 3,
                name: 'Using Webpack for Production JavaScript Applications',
                description: 'rem ds asd aknpihs as',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/054/full/EGH_Webpack-Final.png?1496436445'
            },
            {
                id: 4,
                name: 'Understand How to Style Angular Components',
                description: 'Developers usually have a love-hate relationship with CSS and styling user interfaces. But it is a fundamental part of creating nice-looking, adorable and successful user interfaces. In this course we will take a deep dive into the various possibilities Angular offers for styling components. We learn about the different APIs, how they allow us to conditionally apply one or multiple styles in the form of style attributes and CSS classes. We also explore the concept of style encapsulation and how it helps prevent our styles from leaking into other components.',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/132/full/EGH_Angular_Style-Final.png?1500692925'
            },
            {
                id: 5,
                name: 'Understand Angular Directives in Depth',
                description: 'Angular Directives allow you to add custom behavior to elements and components. Rather than creating a hierarchy of components to try to "extend" behavior, Angular Directives enable you to compose behaviors on to your components. This includes adding event listeners that hook into services, manipulating templates, and adding more configuration to basic elements. This course helps you understand the concepts around building our Angular directives and provides examples from basic directives that inspect elements to advanced structural directives that completely re-write templates. If Angular is new and the syntax foreign, you will want to check out ',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/091/full/EGH_A2_Directives_Final.png?1496436575'
            },
            {
                id: 6,
                name: 'Angular Dependency Injection (DI) Explained',
                description: 'This course will teach you the ins and outs of dependency injection in Angular. You will learn what dependency injection means, how it applies to software in general and how it is implemented in Angular. We will take a look at simple use cases like injecting services, to exploring different providers recipes and when they are useful. We will also cover almost unknown features like viewProviders, OpaqueToken and edge cases where forwardRef() is needed.',
                img_src: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/066/full/EGH_A2_DependencyEngine_Final.png?1496436482'
            }
        ];
    }
    // getData(): Observable<any> {
    //   return this.http
    //     .get('https://dog.ceo/api/breeds/list/all')
    //     .map(response => response.json())
    //     .map(data => data);
    // }
    // getArticles(): Observable<IArticle> {
    //   return this.http
    //     .get(ARTICLES_API)
    //     .map( (response: Response) => response.json().articles)
    //     .catch( (error: any) => Observable.throw(error.json() ));
    // }
    // addNewArticle(newArticle) {
    //   return this.http
    //     .put()
    // }
    ArticleService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticleService.prototype.getArticleById = function (id) {
        return this.articles.filter(function (article) {
            return article.id === parseInt(id, 10);
        });
    };
    ArticleService.prototype.getLastArticleId = function () {
        var lastArticle = this.articles.length;
        return this.articles[lastArticle - 1];
    };
    ArticleService.prototype.addNewArticle = function (newArticle) {
        this.articles.push(newArticle);
    };
    ArticleService.prototype.updateArticle = function (item) {
        this.articles = this.articles.map(function (article) {
            if (article.id === item.id) {
                article.name = item.name;
                return article;
            }
            return article;
        });
    };
    ArticleService.prototype.removeArticle = function (item) {
        this.articles = this.articles.filter(function (article) {
            return article.id !== item.id;
        });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], ArticleService);

var _a, _b;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/background.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundDirective = (function () {
    function BackgroundDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.blueClass = false;
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }
    BackgroundDirective.prototype.onMouseEnter = function () {
        this.blueClass = true;
    };
    BackgroundDirective.prototype.onMouseLeave = function () {
        this.blueClass = false;
    };
    return BackgroundDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.blue'),
    __metadata("design:type", Boolean)
], BackgroundDirective.prototype, "blueClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundDirective.prototype, "onMouseEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundDirective.prototype, "onMouseLeave", null);
BackgroundDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appBackground]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
], BackgroundDirective);

var _a, _b;
//# sourceMappingURL=background.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/expand-description.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandDescriptionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandDescriptionDirective = (function () {
    // @HostBinding('class.overflowed') overflowed: boolean = true;
    function ExpandDescriptionDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ExpandDescriptionDirective.prototype.onMouseEnter = function () {
        // this.overflowed = false;
        this.renderer.removeStyle(this.elementRef.nativeElement, 'max-height');
    };
    ExpandDescriptionDirective.prototype.onMouseLeave = function () {
        // this.overflowed = true;
        this.renderer.setStyle(this.elementRef.nativeElement, 'max-height', this.maxHeight);
    };
    ExpandDescriptionDirective.prototype.ngOnInit = function () {
        this.maxHeight = this.styles.maxHeight;
        this.overflow = this.styles.overflow;
        this.renderer.setStyle(this.elementRef.nativeElement, 'max-height', this.maxHeight);
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', this.overflow);
    };
    return ExpandDescriptionDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ExpandDescriptionDirective.prototype, "styles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpandDescriptionDirective.prototype, "onMouseEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpandDescriptionDirective.prototype, "onMouseLeave", null);
ExpandDescriptionDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appExpandDescription]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
], ExpandDescriptionDirective);

var _a, _b;
//# sourceMappingURL=expand-description.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/phone.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Custom pipe for feature
var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (phones, value) {
        return phones.filter(function (phone) { return phone.includes(value); });
    };
    return PhonePipe;
}());
PhonePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'phoneSearch'
    })
], PhonePipe);

//# sourceMappingURL=phone.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/search-article.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchArticlePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchArticlePipe = (function () {
    function SearchArticlePipe() {
    }
    SearchArticlePipe.prototype.transform = function (articles, value) {
        return articles.filter(function (article) { return article.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()); });
    };
    return SearchArticlePipe;
}());
SearchArticlePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'articleName'
    })
], SearchArticlePipe);

//# sourceMappingURL=search-article.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map