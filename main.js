(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cron_jobs_cron_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cron-jobs/cron.module */ "./apps/api/src/app/cron-jobs/cron.module.ts");
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _endpoints_endpoints_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./endpoints/endpoints.module */ "./apps/api/src/app/endpoints/endpoints.module.ts");
/* harmony import */ var _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./endpoints/roles/roles.service */ "./apps/api/src/app/endpoints/roles/roles.service.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _score_calculator_score_calculator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score-calculator/score-calculator.module */ "./apps/api/src/app/score-calculator/score-calculator.module.ts");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_11__);
var _a, _b;












// mongodb+srv://genzosolutions:<password>@cluster0.pgnb2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
let AppModule = class AppModule {
    constructor(rolesService, mongoConnection) {
        this.rolesService = rolesService;
        this.mongoConnection = mongoConnection;
    }
    onModuleInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.mongoConnection.db
                    .listCollections({ name: 'roles' })
                    .next();
                if (response === null) {
                    yield this.rolesService.initRoles();
                    _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Roles collection initialized...');
                }
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something happened listing mongo collection', error);
            }
        });
    }
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_11__["ConfigModule"].forRoot(),
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forRoot(process.env.MONGO_URL, {
                useCreateIndex: true
            }),
            _endpoints_endpoints_module__WEBPACK_IMPORTED_MODULE_7__["EndpointsModule"],
            _cron_jobs_cron_module__WEBPACK_IMPORTED_MODULE_5__["CronJobsModule"],
            _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__["ScheduleModule"].forRoot(),
            _score_calculator_score_calculator_module__WEBPACK_IMPORTED_MODULE_10__["ScoreCalculatorModule"],
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["InjectConnection"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] !== "undefined" && _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_9__["Connection"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_9__["Connection"]) === "function" ? _b : Object])
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/cron-jobs/cron.module.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/cron-jobs/cron.module.ts ***!
  \***************************************************/
/*! exports provided: CronJobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronJobsModule", function() { return CronJobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoints/articles/article.module */ "./apps/api/src/app/endpoints/articles/article.module.ts");
/* harmony import */ var _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../endpoints/articles/schemas/article.schema */ "./apps/api/src/app/endpoints/articles/schemas/article.schema.ts");
/* harmony import */ var _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../endpoints/sources/schemas/source.schema */ "./apps/api/src/app/endpoints/sources/schemas/source.schema.ts");
/* harmony import */ var _endpoints_sources_sources_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints/sources/sources.module */ "./apps/api/src/app/endpoints/sources/sources.module.ts");
/* harmony import */ var _cron_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cron.service */ "./apps/api/src/app/cron-jobs/cron.service.ts");








let CronJobsModule = class CronJobsModule {
};
CronJobsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__["Article"].name, schema: _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__["ArticleSchema"] }, { name: _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__["Source"].name, schema: _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__["SourceSchema"] }]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_3__["ArticlesModule"],
            _endpoints_sources_sources_module__WEBPACK_IMPORTED_MODULE_6__["SourcesModule"]
        ],
        controllers: [],
        providers: [_cron_service__WEBPACK_IMPORTED_MODULE_7__["CronService"]],
    })
], CronJobsModule);



/***/ }),

/***/ "./apps/api/src/app/cron-jobs/cron.service.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/cron-jobs/cron.service.ts ***!
  \****************************************************/
/*! exports provided: CronService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronService", function() { return CronService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common/decorators/core/injectable.decorator */ "@nestjs/common/decorators/core/injectable.decorator");
/* harmony import */ var _nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints/articles/article.service */ "./apps/api/src/app/endpoints/articles/article.service.ts");
/* harmony import */ var _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../endpoints/sources/sources.service */ "./apps/api/src/app/endpoints/sources/sources.service.ts");
var CronService_1, _a, _b, _c;








let CronService = CronService_1 = class CronService {
    constructor(httpService, articlesService, sourcesService) {
        this.httpService = httpService;
        this.articlesService = articlesService;
        this.sourcesService = sourcesService;
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](CronService_1.name);
    }
    fixDuplicates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logger.log('Fixing duplicates...');
            try {
                const articles = yield this.articlesService.findAll();
                const url_set = new Set();
                articles.forEach((article) => {
                    url_set.add(article.url);
                });
                const fixed_articles = [];
                Array.from(url_set).forEach((url) => {
                    for (let i = 0; i < articles.length; i++) {
                        if (articles[i].url === url) {
                            fixed_articles.push(articles[i]);
                            break;
                        }
                    }
                });
                yield this.articlesService.deleteAll();
                yield this.articlesService.insertMany(fixed_articles);
                this.logger.log('Duplicate articles fixed!');
            }
            catch (error) {
                this.logger.error('Error fixing duplicated articles...', error);
            }
        });
    }
    insertSources(apiData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const sources_url = new Set();
                apiData.forEach((article) => {
                    sources_url.add(article.attributes['publication-url']);
                });
                const sources_docs = [];
                Array.from(sources_url).forEach((url) => {
                    for (let i = 0; i < apiData.length; i++) {
                        if (url === apiData[i].attributes['publication-url']) {
                            sources_docs.push({
                                name: apiData[i].attributes.publication,
                                url: apiData[i].attributes['publication-url'],
                                logoUrl: apiData[i].attributes['publication-icon'],
                            });
                            break;
                        }
                    }
                });
                yield this.sourcesService.insertMany(sources_docs);
            }
            catch (error) {
                let flag = false;
                error.writeErrors.forEach((writeError) => {
                    if (writeError.code !== 11000) {
                        this.logger.error('Something ocurred inserting or updating sources...', error);
                        flag = true;
                    }
                });
                if (!flag) {
                    this.logger.log('New sources have been inserted');
                }
            }
        });
    }
    fixSourcesDuplicates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const sources = yield this.sourcesService.findAll();
                const sources_url = new Set();
                sources.forEach((source) => {
                    sources_url.add(source.url);
                });
                const fixed_sources = [];
                Array.from(sources_url).forEach((url) => {
                    for (let i = 0; i < sources.length; i++) {
                        if (sources[i].url === url) {
                            fixed_sources.push(sources[i]);
                            break;
                        }
                    }
                });
                yield this.sourcesService.deleteAll();
                yield this.sourcesService.insertMany(fixed_sources);
                this.logger.log('Duplicated sources fixed!');
            }
            catch (error) {
                this.logger.error('Something ocurred while fixing duplicated sources', error);
            }
        });
    }
    checkImageUrl(image_url, source) {
        if (image_url === null || image_url === undefined) {
            return source.logoUrl;
        }
        else {
            /** If url is wrongly formatted */
            try {
                new url__WEBPACK_IMPORTED_MODULE_5__["URL"](image_url);
                /** We got a valid URL now we need to check if it's a Facebook thumbnail since VenezuelaHoy API sometimes returns that */
                if (image_url.includes('fbcdn.net') ||
                    image_url.includes('data:image')) {
                    return source.logoUrl;
                }
                else {
                    /** We have a valid image URL */
                    const encodedUrl = Buffer.from(image_url, 'utf-8');
                    return encodedUrl;
                }
            }
            catch (error) {
                return source.logoUrl;
            }
        }
    }
    /** Cron Job every hour COMMENTED */
    // @Cron('0 * * * *')
    /** Cron Job Every 30 minutes */
    updateArticles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logger.log('Feeding database with new articles...');
            try {
                /** Getting data from VenezuelaHoy API */
                const vzla_response = yield this.httpService
                    .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].vzla_api_url, {
                    params: {
                        sort: '-id',
                    },
                })
                    .toPromise();
                if (vzla_response.data.data.length > 0) {
                    yield this.insertSources(vzla_response.data.data);
                    // await this.fixSourcesDuplicates();
                    const sources = yield this.sourcesService.findAll();
                    let vzla_articles = [];
                    vzla_response.data.data.forEach((obj) => {
                        for (let i = 0; i < sources.length; i++) {
                            if (sources[i].url === obj.attributes['publication-url']) {
                                let a = {
                                    title: obj.attributes.title,
                                    source: sources[i]._id,
                                    author: obj.attributes.publication,
                                    description: obj.attributes.body,
                                    url: obj.attributes.url,
                                    urlToImage: this.checkImageUrl(obj.attributes.image, sources[i]),
                                    publishedAt: obj.attributes['created-at'],
                                    content: obj.attributes.body,
                                    score: 1,
                                };
                                vzla_articles.push(a);
                                break;
                            }
                        }
                    });
                    yield this.articlesService.insertMany(vzla_articles);
                    // await this.fixDuplicates();
                }
                else {
                    this.newsApiFetch();
                }
            }
            catch (error) {
                let flag = false;
                error.writeErrors.forEach((writeError) => {
                    if (writeError.code !== 11000) {
                        this.logger.error('Something ocurred inserting or updating articles...', error);
                        flag = true;
                    }
                });
                if (!flag) {
                    this.logger.log('Database has been updated!');
                }
            }
        });
    }
    newsApiFetch() {
        // try {
        //   /** Getting data from NewsAPI.org */
        //   const response = await this.httpService
        //     .get(environment.news_api_url, {
        //       headers: {
        //         'X-Api-Key': environment.news_api_key,
        //       },
        //       params: {
        //         country: 've',
        //       },
        //     })
        //     .toPromise();
        //   let data = response.data.articles;
        //   let articles = [] as Array<ArticleDocument>;
        //   data.forEach((article: CreateArticleDto) => {
        //     let a = new this.articleModel(article);
        //     articles.push(a);
        //   });
        //   await this.articleModel.insertMany(articles);
        // } catch (error) {
        //   this.logger.error(
        //     'Something has ocurred while fetching or updating database with news',
        //     error
        //   );
        // }
    }
    parseUrlString(string) {
        return url__WEBPACK_IMPORTED_MODULE_5__["parse"](string).hostname;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__["Cron"])('*/30 * * * *'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], CronService.prototype, "updateArticles", null);
CronService = CronService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"] !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"]) === "function" ? _a : Object, typeof (_b = typeof _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"] !== "undefined" && _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"]) === "function" ? _b : Object, typeof (_c = typeof _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__["SourcesService"] !== "undefined" && _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__["SourcesService"]) === "function" ? _c : Object])
], CronService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/articles/article.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/articles/article.controller.ts ***!
  \*******************************************************************/
/*! exports provided: ArticlesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesController", function() { return ArticlesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.service */ "./apps/api/src/app/endpoints/articles/article.service.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
var _a, _b;




let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    // @Get()
    // async findAll(): Promise<Article[]> {
    //   return this.articlesService.findAll();
    // }
    getArticles(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articlesService.findPaginated(parseInt(req.query.page.toString()), parseInt(req.query.limit.toString()));
        });
    }
    getLatest(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articlesService.findLatestPaginated(parseInt(query.page), parseInt(query.limit));
        });
    }
    getTrending(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articlesService.findTrendingPaginated(parseInt(query.page), parseInt(query.limit));
        });
    }
    getFollowedArticles(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articlesService.findFollowedArticlesPaginated(query.id, parseInt(query.page), parseInt(query.limit));
        });
    }
    getSavedArticles(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articlesService.findSavedArticles(query.id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ArticlesController.prototype, "getArticles", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('latest'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ArticlesController.prototype, "getLatest", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('trending'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ArticlesController.prototype, "getTrending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('followed/user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ArticlesController.prototype, "getFollowedArticles", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('saved'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ArticlesController.prototype, "getSavedArticles", null);
ArticlesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('articles'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] !== "undefined" && _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]) === "function" ? _b : Object])
], ArticlesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/articles/article.module.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/endpoints/articles/article.module.ts ***!
  \***************************************************************/
/*! exports provided: ArticlesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesModule", function() { return ArticlesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookmarks/bookmarks.module */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.module.ts");
/* harmony import */ var _follows_follows_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../follows/follows.module */ "./apps/api/src/app/endpoints/follows/follows.module.ts");
/* harmony import */ var _article_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.controller */ "./apps/api/src/app/endpoints/articles/article.controller.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.service */ "./apps/api/src/app/endpoints/articles/article.service.ts");
/* harmony import */ var _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schemas/article.schema */ "./apps/api/src/app/endpoints/articles/schemas/article.schema.ts");








let ArticlesModule = class ArticlesModule {
};
ArticlesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                {
                    name: _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__["Article"].name,
                    schema: _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__["ArticleSchema"].index({ url: true }, { unique: true })
                },
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _follows_follows_module__WEBPACK_IMPORTED_MODULE_4__["FollowsModule"],
            _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__["BookmarksModule"]
        ],
        controllers: [_article_controller__WEBPACK_IMPORTED_MODULE_5__["ArticlesController"]],
        providers: [_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"]],
        exports: [_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"], _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"]],
    })
], ArticlesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/articles/article.service.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/articles/article.service.ts ***!
  \****************************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bookmarks/bookmarks.service */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts");
/* harmony import */ var _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../follows/follows.service */ "./apps/api/src/app/endpoints/follows/follows.service.ts");
/* harmony import */ var _schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schemas/article.schema */ "./apps/api/src/app/endpoints/articles/schemas/article.schema.ts");
var _a, _b, _c;







let ArticlesService = class ArticlesService {
    constructor(articleModel, followsService, bookmarksService) {
        this.articleModel = articleModel;
        this.followsService = followsService;
        this.bookmarksService = bookmarksService;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articleModel.find().exec();
        });
    }
    findPaginated(page, limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const results = yield this.articleModel
                    .find()
                    .limit(limit)
                    .skip((page - 1) * limit)
                    .sort({ score: -1 })
                    .populate('source')
                    .exec();
                const count = yield this.articleModel.countDocuments().exec();
                return { results: results, count: count };
            }
            catch (error) {
                return error;
            }
        });
    }
    findLatestPaginated(page, limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const results = yield this.articleModel
                    .find()
                    .limit(limit)
                    .skip((page - 1) * limit)
                    .sort({ publishedAt: -1 })
                    .populate('source')
                    .exec();
                const count = yield this.articleModel.countDocuments().exec();
                return { results: results, count: count };
            }
            catch (error) {
                return error;
            }
        });
    }
    findTrendingPaginated(page, limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const results = yield this.articleModel
                    .find()
                    .limit(limit)
                    .skip((page - 1) * limit)
                    .sort({ trendingScore: -1 })
                    .populate('source')
                    .exec();
                const count = yield this.articleModel.countDocuments().exec();
                return { results: results, count: count };
            }
            catch (error) {
                return error;
            }
        });
    }
    insert(article) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articleModel.create(article);
        });
    }
    insertMany(articles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articleModel.insertMany(articles, { ordered: false });
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articleModel.deleteOne({ _id: id }).exec();
        });
    }
    deleteAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.articleModel.remove({}).exec();
        });
    }
    findFollowedArticlesPaginated(id, page, limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const follows = yield this.followsService.getUserFollows(id);
            const queryArray = [];
            follows.forEach((follow) => {
                queryArray.push({ source: follow.source });
            });
            if (queryArray.length > 0) {
                const results = yield this.articleModel
                    .find({ $or: queryArray })
                    .limit(limit * 1)
                    .skip((page - 1) * 20)
                    .sort({ publishedAt: -1 })
                    .populate('source')
                    .exec();
                const count = yield this.articleModel.countDocuments().exec();
                return { results: results, count: count };
            }
            else {
                return { results: [], count: 0 };
            }
        });
    }
    findSavedArticles(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const bookmarks = yield this.bookmarksService.getUserBookmarks(id);
            const queryArray = [];
            bookmarks.forEach((bookmark) => {
                queryArray.push({ _id: bookmark.article });
            });
            if (queryArray.length > 0) {
                const results = yield this.articleModel
                    .find({ $or: queryArray })
                    .sort({ publishedAt: -1 })
                    .populate('source')
                    .exec();
                return results;
            }
            else {
                return [];
            }
        });
    }
};
ArticlesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__["Article"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__["FollowsService"] !== "undefined" && _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__["FollowsService"]) === "function" ? _b : Object, typeof (_c = typeof _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__["BookmarksService"] !== "undefined" && _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__["BookmarksService"]) === "function" ? _c : Object])
], ArticlesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/articles/schemas/article.schema.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/articles/schemas/article.schema.ts ***!
  \***********************************************************************/
/*! exports provided: Article, ArticleSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSchema", function() { return ArticleSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Article = class Article {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Source' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Article.prototype, "source", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "author", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "urlToImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ index: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Article.prototype, "publishedAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Article.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ index: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Article.prototype, "score", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ index: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Article.prototype, "trendingScore", void 0);
Article = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Article);

const ArticleSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Article);


/***/ }),

/***/ "./apps/api/src/app/endpoints/bookmarks/bookmarks.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/bookmarks/bookmarks.controller.ts ***!
  \**********************************************************************/
/*! exports provided: BookmarksController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksController", function() { return BookmarksController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmarks.service */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts");
/* harmony import */ var _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dto/create-bookmark.dto */ "./apps/api/src/app/endpoints/bookmarks/dto/create-bookmark.dto.ts");
var _a, _b, _c, _d;




let BookmarksController = class BookmarksController {
    constructor(bookmarksService) {
        this.bookmarksService = bookmarksService;
    }
    create(like) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarksService.insert(like);
        });
    }
    getUserLikes(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarksService.getUserBookmarks(id);
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarksService.delete(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__["CreateBookmarkDto"] !== "undefined" && _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__["CreateBookmarkDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BookmarksController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BookmarksController.prototype, "getUserLikes", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BookmarksController.prototype, "delete", null);
BookmarksController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('bookmarks'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__["BookmarksService"] !== "undefined" && _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__["BookmarksService"]) === "function" ? _d : Object])
], BookmarksController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/bookmarks/bookmarks.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/bookmarks/bookmarks.module.ts ***!
  \******************************************************************/
/*! exports provided: BookmarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksModule", function() { return BookmarksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmarks.service */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts");
/* harmony import */ var _bookmarks_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmarks.controller */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.controller.ts");
/* harmony import */ var _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/bookmark.schema */ "./apps/api/src/app/endpoints/bookmarks/schemas/bookmark.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let BookmarksModule = class BookmarksModule {
};
BookmarksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([
                { name: _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__["Bookmark"].name, schema: _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__["BookmarkSchema"] },
            ]),
        ],
        providers: [_bookmarks_service__WEBPACK_IMPORTED_MODULE_2__["BookmarksService"]],
        controllers: [_bookmarks_controller__WEBPACK_IMPORTED_MODULE_3__["BookmarksController"]],
        exports: [_bookmarks_service__WEBPACK_IMPORTED_MODULE_2__["BookmarksService"]],
    })
], BookmarksModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts ***!
  \*******************************************************************/
/*! exports provided: BookmarksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksService", function() { return BookmarksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schemas/bookmark.schema */ "./apps/api/src/app/endpoints/bookmarks/schemas/bookmark.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let BookmarksService = class BookmarksService {
    constructor(bookmarkModel) {
        this.bookmarkModel = bookmarkModel;
    }
    insert(bookmark) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_4__["Types"].ObjectId(bookmark.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_4__["Types"].ObjectId(bookmark.user);
            return this.bookmarkModel.create({ article: article, user: user });
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarkModel.deleteOne({ _id: id }).exec();
        });
    }
    getUserBookmarks(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarkModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_4__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.bookmarkModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.bookmarkModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now }
                }
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            }
        ];
        return this.bookmarkModel.aggregate(aggregatorOpts);
    }
};
BookmarksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_2__["Bookmark"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object])
], BookmarksService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/bookmarks/dto/create-bookmark.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/app/endpoints/bookmarks/dto/create-bookmark.dto.ts ***!
  \*************************************************************************/
/*! exports provided: CreateBookmarkDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookmarkDto", function() { return CreateBookmarkDto; });
class CreateBookmarkDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/bookmarks/schemas/bookmark.schema.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/app/endpoints/bookmarks/schemas/bookmark.schema.ts ***!
  \*************************************************************************/
/*! exports provided: Bookmark, BookmarkSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkSchema", function() { return BookmarkSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Bookmark = class Bookmark {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Bookmark.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Bookmark.prototype, "user", void 0);
Bookmark = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Bookmark);

const BookmarkSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Bookmark);


/***/ }),

/***/ "./apps/api/src/app/endpoints/endpoints.module.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/endpoints/endpoints.module.ts ***!
  \********************************************************/
/*! exports provided: EndpointsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointsModule", function() { return EndpointsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common/decorators/modules/module.decorator */ "@nestjs/common/decorators/modules/module.decorator");
/* harmony import */ var _nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _articles_article_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/article.module */ "./apps/api/src/app/endpoints/articles/article.module.ts");
/* harmony import */ var _sources_sources_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/sources.module */ "./apps/api/src/app/endpoints/sources/sources.module.ts");
/* harmony import */ var _votes_votes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./votes/votes.module */ "./apps/api/src/app/endpoints/votes/votes.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.module */ "./apps/api/src/app/endpoints/users/users.module.ts");
/* harmony import */ var _likes_likes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likes/likes.module */ "./apps/api/src/app/endpoints/likes/likes.module.ts");
/* harmony import */ var _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookmarks/bookmarks.module */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.module.ts");
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles/roles.module */ "./apps/api/src/app/endpoints/roles/roles.module.ts");
/* harmony import */ var _follows_follows_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./follows/follows.module */ "./apps/api/src/app/endpoints/follows/follows.module.ts");
/* harmony import */ var _shares_shares_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shares/shares.module */ "./apps/api/src/app/endpoints/shares/shares.module.ts");
/* harmony import */ var _weights_weights_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weights/weights.module */ "./apps/api/src/app/endpoints/weights/weights.module.ts");
/* harmony import */ var _skips_skips_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skips/skips.module */ "./apps/api/src/app/endpoints/skips/skips.module.ts");
/* harmony import */ var _stops_stops_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stops/stops.module */ "./apps/api/src/app/endpoints/stops/stops.module.ts");
/* harmony import */ var _visits_visits_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visits/visits.module */ "./apps/api/src/app/endpoints/visits/visits.module.ts");















let EndpointsModule = class EndpointsModule {
};
EndpointsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _articles_article_module__WEBPACK_IMPORTED_MODULE_2__["ArticlesModule"],
            _sources_sources_module__WEBPACK_IMPORTED_MODULE_3__["SourcesModule"],
            _votes_votes_module__WEBPACK_IMPORTED_MODULE_4__["VotesModule"],
            _likes_likes_module__WEBPACK_IMPORTED_MODULE_6__["LikesModule"],
            _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_7__["BookmarksModule"],
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__["RolesModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"],
            _follows_follows_module__WEBPACK_IMPORTED_MODULE_9__["FollowsModule"],
            _shares_shares_module__WEBPACK_IMPORTED_MODULE_10__["SharesModule"],
            _weights_weights_module__WEBPACK_IMPORTED_MODULE_11__["WeightsModule"],
            _skips_skips_module__WEBPACK_IMPORTED_MODULE_12__["SkipsModule"],
            _stops_stops_module__WEBPACK_IMPORTED_MODULE_13__["StopsModule"],
            _visits_visits_module__WEBPACK_IMPORTED_MODULE_14__["VisitsModule"],
        ],
        controllers: [],
        providers: [],
        exports: [_roles_roles_module__WEBPACK_IMPORTED_MODULE_8__["RolesModule"]],
    })
], EndpointsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/follows/dto/create-follow.dto.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/follows/dto/create-follow.dto.ts ***!
  \*********************************************************************/
/*! exports provided: CreateFollowDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFollowDto", function() { return CreateFollowDto; });
class CreateFollowDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/follows/follows.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/follows/follows.controller.ts ***!
  \******************************************************************/
/*! exports provided: FollowsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowsController", function() { return FollowsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-follow.dto */ "./apps/api/src/app/endpoints/follows/dto/create-follow.dto.ts");
/* harmony import */ var _follows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follows.service */ "./apps/api/src/app/endpoints/follows/follows.service.ts");
var _a, _b, _c, _d, _e;




let FollowsController = class FollowsController {
    constructor(followsService) {
        this.followsService = followsService;
    }
    create(follow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followsService.insert(follow);
        });
    }
    getUserFollows(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followsService.getUserFollows(id);
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followsService.delete(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__["CreateFollowDto"] !== "undefined" && _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__["CreateFollowDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], FollowsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], FollowsController.prototype, "getUserFollows", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], FollowsController.prototype, "delete", null);
FollowsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('follows'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _follows_service__WEBPACK_IMPORTED_MODULE_3__["FollowsService"] !== "undefined" && _follows_service__WEBPACK_IMPORTED_MODULE_3__["FollowsService"]) === "function" ? _e : Object])
], FollowsController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/follows/follows.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/follows/follows.module.ts ***!
  \**************************************************************/
/*! exports provided: FollowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowsModule", function() { return FollowsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _follows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follows.service */ "./apps/api/src/app/endpoints/follows/follows.service.ts");
/* harmony import */ var _follows_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follows.controller */ "./apps/api/src/app/endpoints/follows/follows.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/follow.schema */ "./apps/api/src/app/endpoints/follows/schemas/follow.schema.ts");






let FollowsModule = class FollowsModule {
};
FollowsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                {
                    name: _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__["Follow"].name,
                    schema: _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__["FollowSchema"].index({ user: 1, source: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_follows_service__WEBPACK_IMPORTED_MODULE_2__["FollowsService"]],
        controllers: [_follows_controller__WEBPACK_IMPORTED_MODULE_3__["FollowsController"]],
        exports: [_follows_service__WEBPACK_IMPORTED_MODULE_2__["FollowsService"]],
    })
], FollowsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/follows/follows.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/endpoints/follows/follows.service.ts ***!
  \***************************************************************/
/*! exports provided: FollowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowsService", function() { return FollowsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/follow.schema */ "./apps/api/src/app/endpoints/follows/schemas/follow.schema.ts");
var _a;





let FollowsService = class FollowsService {
    constructor(followModel) {
        this.followModel = followModel;
    }
    insert(follow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let source = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(follow.source);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(follow.user);
            return this.followModel.create({ source: source, user: user });
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followModel.deleteOne({ _id: id }).exec();
        });
    }
    getUserFollows(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.followModel.find({}).exec();
        });
    }
};
FollowsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_follow_schema__WEBPACK_IMPORTED_MODULE_4__["Follow"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], FollowsService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/follows/schemas/follow.schema.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/follows/schemas/follow.schema.ts ***!
  \*********************************************************************/
/*! exports provided: Follow, FollowSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follow", function() { return Follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowSchema", function() { return FollowSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Follow = class Follow {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Source' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Follow.prototype, "source", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Follow.prototype, "user", void 0);
Follow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Follow);

const FollowSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Follow);


/***/ }),

/***/ "./apps/api/src/app/endpoints/likes/dto/create-like.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/likes/dto/create-like.dto.ts ***!
  \*****************************************************************/
/*! exports provided: CreateLikeDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLikeDto", function() { return CreateLikeDto; });
class CreateLikeDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/likes/likes.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/likes/likes.controller.ts ***!
  \**************************************************************/
/*! exports provided: LikesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesController", function() { return LikesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-like.dto */ "./apps/api/src/app/endpoints/likes/dto/create-like.dto.ts");
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.service */ "./apps/api/src/app/endpoints/likes/likes.service.ts");
var _a, _b, _c, _d;




let LikesController = class LikesController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    create(like) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likesService.insert(like);
        });
    }
    getUserLikes(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likesService.getUserLikes(id);
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likesService.delete(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__["CreateLikeDto"] !== "undefined" && _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__["CreateLikeDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], LikesController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], LikesController.prototype, "getUserLikes", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], LikesController.prototype, "delete", null);
LikesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('likes'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _likes_service__WEBPACK_IMPORTED_MODULE_3__["LikesService"] !== "undefined" && _likes_service__WEBPACK_IMPORTED_MODULE_3__["LikesService"]) === "function" ? _d : Object])
], LikesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/likes/likes.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/likes/likes.module.ts ***!
  \**********************************************************/
/*! exports provided: LikesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesModule", function() { return LikesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.service */ "./apps/api/src/app/endpoints/likes/likes.service.ts");
/* harmony import */ var _likes_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.controller */ "./apps/api/src/app/endpoints/likes/likes.controller.ts");
/* harmony import */ var _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/like.schema */ "./apps/api/src/app/endpoints/likes/schemas/like.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let LikesModule = class LikesModule {
};
LikesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([{ name: _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__["Like"].name, schema: _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__["LikeSchema"] }]),
        ],
        providers: [_likes_service__WEBPACK_IMPORTED_MODULE_2__["LikesService"]],
        controllers: [_likes_controller__WEBPACK_IMPORTED_MODULE_3__["LikesController"]],
        exports: [_likes_service__WEBPACK_IMPORTED_MODULE_2__["LikesService"]]
    })
], LikesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/likes/likes.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/likes/likes.service.ts ***!
  \***********************************************************/
/*! exports provided: LikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesService", function() { return LikesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/like.schema */ "./apps/api/src/app/endpoints/likes/schemas/like.schema.ts");
var _a;





let LikesService = class LikesService {
    constructor(likeModel) {
        this.likeModel = likeModel;
    }
    insert(like) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(like.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(like.user);
            return this.likeModel.create({ article: article, user: user });
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likeModel.deleteOne({ _id: id }).exec();
        });
    }
    getUserLikes(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likeModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likeModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.likeModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now }
                }
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            }
        ];
        return this.likeModel.aggregate(aggregatorOpts);
    }
};
LikesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__["Like"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], LikesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/likes/schemas/like.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/likes/schemas/like.schema.ts ***!
  \*****************************************************************/
/*! exports provided: Like, LikeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return Like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeSchema", function() { return LikeSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Like = class Like {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Like.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Like.prototype, "user", void 0);
Like = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Like);

const LikeSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Like);


/***/ }),

/***/ "./apps/api/src/app/endpoints/roles/roles.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/roles/roles.controller.ts ***!
  \**************************************************************/
/*! exports provided: RolesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesController", function() { return RolesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let RolesController = class RolesController {
};
RolesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('roles')
], RolesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/roles/roles.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/roles/roles.module.ts ***!
  \**********************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.service */ "./apps/api/src/app/endpoints/roles/roles.service.ts");
/* harmony import */ var _roles_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles.controller */ "./apps/api/src/app/endpoints/roles/roles.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/role.schema */ "./apps/api/src/app/endpoints/roles/schemas/role.schema.ts");






let RolesModule = class RolesModule {
};
RolesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__["Role"].name, schema: _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__["RoleSchema"] }]),
        ],
        providers: [_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]],
        controllers: [_roles_controller__WEBPACK_IMPORTED_MODULE_3__["RolesController"]],
        exports: [_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]]
    })
], RolesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/roles/roles.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/roles/roles.service.ts ***!
  \***********************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_role_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/role.schema */ "./apps/api/src/app/endpoints/roles/schemas/role.schema.ts");
var _a;





let RolesService = class RolesService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    initRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.roleModel.insertMany([
                { value: 'CLIENT' },
                { value: 'ADMIN' },
            ]);
        });
    }
    getClientRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.roleModel.findOne({ value: 'CLIENT' }).exec();
        });
    }
};
RolesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_role_schema__WEBPACK_IMPORTED_MODULE_4__["Role"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], RolesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/roles/schemas/role.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/roles/schemas/role.schema.ts ***!
  \*****************************************************************/
/*! exports provided: Role, RoleSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleSchema", function() { return RoleSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);


let Role = class Role {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Role.prototype, "value", void 0);
Role = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Role);

const RoleSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Role);


/***/ }),

/***/ "./apps/api/src/app/endpoints/shares/dto/create-share.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/shares/dto/create-share.dto.ts ***!
  \*******************************************************************/
/*! exports provided: CreateShareDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShareDto", function() { return CreateShareDto; });
class CreateShareDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/shares/schemas/share.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/shares/schemas/share.schema.ts ***!
  \*******************************************************************/
/*! exports provided: Share, ShareSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareSchema", function() { return ShareSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Share = class Share {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Share.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Share.prototype, "user", void 0);
Share = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Share);

const ShareSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Share);


/***/ }),

/***/ "./apps/api/src/app/endpoints/shares/shares.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/shares/shares.controller.ts ***!
  \****************************************************************/
/*! exports provided: SharesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesController", function() { return SharesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-share.dto */ "./apps/api/src/app/endpoints/shares/dto/create-share.dto.ts");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares.service */ "./apps/api/src/app/endpoints/shares/shares.service.ts");
var _a, _b, _c;




let SharesController = class SharesController {
    constructor(sharesService) {
        this.sharesService = sharesService;
    }
    create(share) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sharesService.insert(share);
        });
    }
    getUserShares(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sharesService.getUserShares(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__["CreateShareDto"] !== "undefined" && _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__["CreateShareDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SharesController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SharesController.prototype, "getUserShares", null);
SharesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('shares'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _shares_service__WEBPACK_IMPORTED_MODULE_3__["SharesService"] !== "undefined" && _shares_service__WEBPACK_IMPORTED_MODULE_3__["SharesService"]) === "function" ? _c : Object])
], SharesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/shares/shares.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/endpoints/shares/shares.module.ts ***!
  \************************************************************/
/*! exports provided: SharesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesModule", function() { return SharesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares.service */ "./apps/api/src/app/endpoints/shares/shares.service.ts");
/* harmony import */ var _shares_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares.controller */ "./apps/api/src/app/endpoints/shares/shares.controller.ts");
/* harmony import */ var _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/share.schema */ "./apps/api/src/app/endpoints/shares/schemas/share.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let SharesModule = class SharesModule {
};
SharesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([{ name: _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__["Share"].name, schema: _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__["ShareSchema"] }]),
        ],
        providers: [_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"]],
        controllers: [_shares_controller__WEBPACK_IMPORTED_MODULE_3__["SharesController"]],
        exports: [_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"]],
    })
], SharesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/shares/shares.service.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/endpoints/shares/shares.service.ts ***!
  \*************************************************************/
/*! exports provided: SharesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesService", function() { return SharesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/share.schema */ "./apps/api/src/app/endpoints/shares/schemas/share.schema.ts");
var _a;





let SharesService = class SharesService {
    constructor(shareModel) {
        this.shareModel = shareModel;
    }
    insert(share) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(share.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(share.user);
            return this.shareModel.create({ article: article, user: user });
        });
    }
    getUserShares(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.shareModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.shareModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.shareModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now },
                },
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.shareModel.aggregate(aggregatorOpts);
    }
};
SharesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__["Share"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SharesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/skips/dto/create-skip.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/skips/dto/create-skip.dto.ts ***!
  \*****************************************************************/
/*! exports provided: CreateSkipDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkipDto", function() { return CreateSkipDto; });
class CreateSkipDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/skips/schemas/skip.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/skips/schemas/skip.schema.ts ***!
  \*****************************************************************/
/*! exports provided: Skip, SkipSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skip", function() { return Skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipSchema", function() { return SkipSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Skip = class Skip {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Skip.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Skip.prototype, "user", void 0);
Skip = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Skip);

const SkipSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Skip);


/***/ }),

/***/ "./apps/api/src/app/endpoints/skips/skips.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/skips/skips.controller.ts ***!
  \**************************************************************/
/*! exports provided: SkipsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipsController", function() { return SkipsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-skip.dto */ "./apps/api/src/app/endpoints/skips/dto/create-skip.dto.ts");
/* harmony import */ var _skips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skips.service */ "./apps/api/src/app/endpoints/skips/skips.service.ts");
var _a, _b, _c;




let SkipsController = class SkipsController {
    constructor(skipsServices) {
        this.skipsServices = skipsServices;
    }
    create(skip) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.skipsServices.insert(skip);
        });
    }
    getUserSkips(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.skipsServices.getUserSkips(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__["CreateSkipDto"] !== "undefined" && _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__["CreateSkipDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SkipsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SkipsController.prototype, "getUserSkips", null);
SkipsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('skips'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _skips_service__WEBPACK_IMPORTED_MODULE_3__["SkipsService"] !== "undefined" && _skips_service__WEBPACK_IMPORTED_MODULE_3__["SkipsService"]) === "function" ? _c : Object])
], SkipsController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/skips/skips.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/skips/skips.module.ts ***!
  \**********************************************************/
/*! exports provided: SkipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipsModule", function() { return SkipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skips.service */ "./apps/api/src/app/endpoints/skips/skips.service.ts");
/* harmony import */ var _skips_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skips.controller */ "./apps/api/src/app/endpoints/skips/skips.controller.ts");
/* harmony import */ var _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/skip.schema */ "./apps/api/src/app/endpoints/skips/schemas/skip.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let SkipsModule = class SkipsModule {
};
SkipsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([
                {
                    name: _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__["Skip"].name,
                    schema: _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__["SkipSchema"].index({ article: 1, user: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_skips_service__WEBPACK_IMPORTED_MODULE_2__["SkipsService"]],
        controllers: [_skips_controller__WEBPACK_IMPORTED_MODULE_3__["SkipsController"]],
        exports: [_skips_service__WEBPACK_IMPORTED_MODULE_2__["SkipsService"]],
    })
], SkipsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/skips/skips.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/skips/skips.service.ts ***!
  \***********************************************************/
/*! exports provided: SkipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipsService", function() { return SkipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/skip.schema */ "./apps/api/src/app/endpoints/skips/schemas/skip.schema.ts");
var _a;





let SkipsService = class SkipsService {
    constructor(skipModel) {
        this.skipModel = skipModel;
    }
    insert(skip) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(skip.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(skip.user);
            return this.skipModel.create({ article: article, user: user });
        });
    }
    getUserSkips(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.skipModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.skipModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.skipModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now }
                }
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            }
        ];
        return this.skipModel.aggregate(aggregatorOpts);
    }
};
SkipsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__["Skip"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SkipsService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/sources/schemas/source.schema.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/sources/schemas/source.schema.ts ***!
  \*********************************************************************/
/*! exports provided: Source, SourceSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSchema", function() { return SourceSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);


let Source = class Source {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Source.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Source.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Source.prototype, "logoUrl", void 0);
Source = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Source);

const SourceSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Source);


/***/ }),

/***/ "./apps/api/src/app/endpoints/sources/sources.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/sources/sources.controller.ts ***!
  \******************************************************************/
/*! exports provided: SourcesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesController", function() { return SourcesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.service */ "./apps/api/src/app/endpoints/sources/sources.service.ts");
var _a, _b;



let SourcesController = class SourcesController {
    constructor(sourcesService) {
        this.sourcesService = sourcesService;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourcesService.findAll();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], SourcesController.prototype, "findAll", null);
SourcesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('sources'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _sources_service__WEBPACK_IMPORTED_MODULE_2__["SourcesService"] !== "undefined" && _sources_service__WEBPACK_IMPORTED_MODULE_2__["SourcesService"]) === "function" ? _b : Object])
], SourcesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/sources/sources.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/sources/sources.module.ts ***!
  \**************************************************************/
/*! exports provided: SourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesModule", function() { return SourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schemas/source.schema */ "./apps/api/src/app/endpoints/sources/schemas/source.schema.ts");
/* harmony import */ var _sources_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sources.controller */ "./apps/api/src/app/endpoints/sources/sources.controller.ts");
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sources.service */ "./apps/api/src/app/endpoints/sources/sources.service.ts");






let SourcesModule = class SourcesModule {
};
SourcesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                {
                    name: _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__["Source"].name,
                    schema: _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__["SourceSchema"].index({ url: true }, { unique: true }),
                },
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
        ],
        controllers: [_sources_controller__WEBPACK_IMPORTED_MODULE_4__["SourcesController"]],
        providers: [_sources_service__WEBPACK_IMPORTED_MODULE_5__["SourcesService"]],
        exports: [_sources_service__WEBPACK_IMPORTED_MODULE_5__["SourcesService"]],
    })
], SourcesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/sources/sources.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/endpoints/sources/sources.service.ts ***!
  \***************************************************************/
/*! exports provided: SourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesService", function() { return SourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_source_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/source.schema */ "./apps/api/src/app/endpoints/sources/schemas/source.schema.ts");
var _a;





let SourcesService = class SourcesService {
    constructor(sourceModel) {
        this.sourceModel = sourceModel;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourceModel.find().exec();
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourceModel.deleteOne({ _id: id }).exec();
        });
    }
    insert(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourceModel.create(source);
        });
    }
    insertMany(sources) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourceModel.insertMany(sources, { ordered: false });
        });
    }
    deleteAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.sourceModel.remove({}).exec();
        });
    }
};
SourcesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_source_schema__WEBPACK_IMPORTED_MODULE_4__["Source"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SourcesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/stops/dto/create-stop.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/stops/dto/create-stop.dto.ts ***!
  \*****************************************************************/
/*! exports provided: CreateStopDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStopDto", function() { return CreateStopDto; });
class CreateStopDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/stops/schemas/stop.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/stops/schemas/stop.schema.ts ***!
  \*****************************************************************/
/*! exports provided: Stop, StopSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stop", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopSchema", function() { return StopSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Stop = class Stop {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Stop.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Stop.prototype, "user", void 0);
Stop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Stop);

const StopSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Stop);


/***/ }),

/***/ "./apps/api/src/app/endpoints/stops/stops.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/stops/stops.controller.ts ***!
  \**************************************************************/
/*! exports provided: StopsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsController", function() { return StopsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-stop.dto */ "./apps/api/src/app/endpoints/stops/dto/create-stop.dto.ts");
/* harmony import */ var _stops_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stops.service */ "./apps/api/src/app/endpoints/stops/stops.service.ts");
var _a, _b, _c;




let StopsController = class StopsController {
    constructor(stopsService) {
        this.stopsService = stopsService;
    }
    create(stop) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stopsService.insert(stop);
        });
    }
    getUserStops(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stopsService.getUserStops(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__["CreateStopDto"] !== "undefined" && _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__["CreateStopDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], StopsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], StopsController.prototype, "getUserStops", null);
StopsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('stops'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _stops_service__WEBPACK_IMPORTED_MODULE_3__["StopsService"] !== "undefined" && _stops_service__WEBPACK_IMPORTED_MODULE_3__["StopsService"]) === "function" ? _c : Object])
], StopsController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/stops/stops.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/stops/stops.module.ts ***!
  \**********************************************************/
/*! exports provided: StopsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsModule", function() { return StopsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stops.service */ "./apps/api/src/app/endpoints/stops/stops.service.ts");
/* harmony import */ var _stops_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stops.controller */ "./apps/api/src/app/endpoints/stops/stops.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/stop.schema */ "./apps/api/src/app/endpoints/stops/schemas/stop.schema.ts");






let StopsModule = class StopsModule {
};
StopsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__["Stop"].name, schema: _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__["StopSchema"].index({ article: 1, user: 1 }, { unique: true }) }]),
        ],
        providers: [_stops_service__WEBPACK_IMPORTED_MODULE_2__["StopsService"]],
        controllers: [_stops_controller__WEBPACK_IMPORTED_MODULE_3__["StopsController"]],
        exports: [_stops_service__WEBPACK_IMPORTED_MODULE_2__["StopsService"]]
    })
], StopsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/stops/stops.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/stops/stops.service.ts ***!
  \***********************************************************/
/*! exports provided: StopsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsService", function() { return StopsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/stop.schema */ "./apps/api/src/app/endpoints/stops/schemas/stop.schema.ts");
var _a;





let StopsService = class StopsService {
    constructor(stopModel) {
        this.stopModel = stopModel;
    }
    insert(stop) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(stop.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(stop.user);
            return this.stopModel.create({ article: article, user: user });
        });
    }
    getUserStops(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stopModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stopModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.stopModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now },
                },
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.stopModel.aggregate(aggregatorOpts);
    }
};
StopsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_stop_schema__WEBPACK_IMPORTED_MODULE_4__["Stop"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], StopsService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/users/dto/create-user.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/users/dto/create-user.dto.ts ***!
  \*****************************************************************/
/*! exports provided: CreateUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserDto", function() { return CreateUserDto; });
class CreateUserDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/users/schemas/user.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/users/schemas/user.schema.ts ***!
  \*****************************************************************/
/*! exports provided: User, UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let User = class User {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "birthdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "auth_uid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "id_provider", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "ip_address", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ unique: true, required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "unique_token", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: [mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId], ref: 'Role' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], User.prototype, "roles", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], User);

const UserSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(User);


/***/ }),

/***/ "./apps/api/src/app/endpoints/users/users.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/users/users.controller.ts ***!
  \**************************************************************/
/*! exports provided: UsersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersController", function() { return UsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../roles/roles.service */ "./apps/api/src/app/endpoints/roles/roles.service.ts");
/* harmony import */ var _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dto/create-user.dto */ "./apps/api/src/app/endpoints/users/dto/create-user.dto.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./apps/api/src/app/endpoints/users/users.service.ts");
var _a, _b, _c, _d, _e, _f;





let UsersController = class UsersController {
    constructor(usersService, rolesService) {
        this.usersService = usersService;
        this.rolesService = rolesService;
    }
    addUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const clientRole = yield this.rolesService.getClientRole();
            user.roles.push(clientRole._id);
            return this.usersService.insert(user);
        });
    }
    getUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.usersService.findOne(id);
        });
    }
    updateUser(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.usersService.updateUser(id, data);
        });
    }
    checkUser(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const first = yield this.usersService.findByIpAddress(data.ipAddress);
                const second = yield this.usersService.findByUniqueToken(data.token);
                if (first !== null || second !== null) {
                    if (first) {
                        return { value: true, user: first };
                    }
                    else {
                        return { value: true, user: second };
                    }
                }
                else {
                    return { value: false, user: null };
                }
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something ocurred checking user...', error);
            }
        });
    }
    checkIfRegistered(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.usersService.findByAuthUid(uid.toString());
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something ocurred checking for auth uid in user...', error);
            }
        });
    }
    checkEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.usersService.findByEmail(email.toString());
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something ocurred checking for email in user...', error);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__["CreateUserDto"] !== "undefined" && _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__["CreateUserDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "addUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "getUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "updateUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('check'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UsersController.prototype, "checkUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('sign-check/:uid'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('uid')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UsersController.prototype, "checkIfRegistered", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('email/check'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('email')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UsersController.prototype, "checkEmail", null);
UsersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('users'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]) === "function" ? _e : Object, typeof (_f = typeof _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] !== "undefined" && _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]) === "function" ? _f : Object])
], UsersController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/users/users.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/users/users.module.ts ***!
  \**********************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./apps/api/src/app/endpoints/users/users.service.ts");
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.controller */ "./apps/api/src/app/endpoints/users/users.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/user.schema */ "./apps/api/src/app/endpoints/users/schemas/user.schema.ts");
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles/roles.module */ "./apps/api/src/app/endpoints/roles/roles.module.ts");







let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__["User"].name, schema: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__["UserSchema"] }]),
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_6__["RolesModule"]
        ],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_3__["UsersController"]]
    })
], UsersModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/users/users.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/users/users.service.ts ***!
  \***********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/user.schema */ "./apps/api/src/app/endpoints/users/schemas/user.schema.ts");
var _a;





let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    insert(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.create(user);
        });
    }
    findOne(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.findById(id).populate({ path: 'roles', model: 'Role' }).exec();
        });
    }
    findByIpAddress(ipAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel
                .findOne({ ip_address: ipAddress })
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
    findByUniqueToken(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel
                .findOne({ unique_token: token })
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.find().populate({ path: 'roles', model: 'Role' }).exec();
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.deleteOne({ _id: id }).exec();
        });
    }
    findByAuthUid(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.findOne({ auth_uid: uid }).populate({ path: 'roles', model: 'Role' }).exec();
        });
    }
    findByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.findOne({ email: email }).populate({ path: 'roles', model: 'Role' }).exec();
        });
    }
    updateUser(id, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.updateOne({ _id: id }, user).populate({ path: 'roles', model: 'Role' }).exec();
        });
    }
};
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__["User"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], UsersService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/visits/dto/create-visit.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/visits/dto/create-visit.dto.ts ***!
  \*******************************************************************/
/*! exports provided: CreateVisitDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVisitDto", function() { return CreateVisitDto; });
class CreateVisitDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/visits/schemas/visit.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/endpoints/visits/schemas/visit.schema.ts ***!
  \*******************************************************************/
/*! exports provided: Visit, VisitSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visit", function() { return Visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSchema", function() { return VisitSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Visit = class Visit {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Visit.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Visit.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Visit.prototype, "amount", void 0);
Visit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Visit);

const VisitSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Visit);


/***/ }),

/***/ "./apps/api/src/app/endpoints/visits/visits.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/visits/visits.controller.ts ***!
  \****************************************************************/
/*! exports provided: VisitsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsController", function() { return VisitsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-visit.dto */ "./apps/api/src/app/endpoints/visits/dto/create-visit.dto.ts");
/* harmony import */ var _visits_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visits.service */ "./apps/api/src/app/endpoints/visits/visits.service.ts");
var _a, _b, _c, _d, _e;




let VisitsController = class VisitsController {
    constructor(visitsService) {
        this.visitsService = visitsService;
    }
    create(visit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitsService.insert(visit);
        });
    }
    update(visit, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitsService.update(visit, id);
        });
    }
    getUserVisits(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitsService.getUserVisits(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVisitDto"] !== "undefined" && _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVisitDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], VisitsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVisitDto"] !== "undefined" && _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVisitDto"]) === "function" ? _c : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], VisitsController.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], VisitsController.prototype, "getUserVisits", null);
VisitsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('visits'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _visits_service__WEBPACK_IMPORTED_MODULE_3__["VisitsService"] !== "undefined" && _visits_service__WEBPACK_IMPORTED_MODULE_3__["VisitsService"]) === "function" ? _e : Object])
], VisitsController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/visits/visits.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/endpoints/visits/visits.module.ts ***!
  \************************************************************/
/*! exports provided: VisitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsModule", function() { return VisitsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visits_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visits.service */ "./apps/api/src/app/endpoints/visits/visits.service.ts");
/* harmony import */ var _visits_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visits.controller */ "./apps/api/src/app/endpoints/visits/visits.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/visit.schema */ "./apps/api/src/app/endpoints/visits/schemas/visit.schema.ts");






let VisitsModule = class VisitsModule {
};
VisitsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__["Visit"].name, schema: _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__["VisitSchema"].index({ article: 1, user: 1 }, { unique: true }) }]),
        ],
        providers: [_visits_service__WEBPACK_IMPORTED_MODULE_2__["VisitsService"]],
        controllers: [_visits_controller__WEBPACK_IMPORTED_MODULE_3__["VisitsController"]]
    })
], VisitsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/visits/visits.service.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/endpoints/visits/visits.service.ts ***!
  \*************************************************************/
/*! exports provided: VisitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsService", function() { return VisitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/visit.schema */ "./apps/api/src/app/endpoints/visits/schemas/visit.schema.ts");
var _a;





let VisitsService = class VisitsService {
    constructor(visitModel) {
        this.visitModel = visitModel;
    }
    insert(visit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(visit.article);
            let user = mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(visit.user);
            return this.visitModel.create({ article: article, user: user, amount: 1 });
        });
    }
    update(visit, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitModel.updateOne({ _id: id }, { amount: visit.amount });
        });
    }
    getUserVisits(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitModel
                .find({})
                .where('user')
                .equals(mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(user_id))
                .exec();
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.visitModel.find({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.visitModel.aggregate(aggregatorOpts);
    }
};
VisitsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_visit_schema__WEBPACK_IMPORTED_MODULE_4__["Visit"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], VisitsService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/votes/dto/create-vote.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/votes/dto/create-vote.dto.ts ***!
  \*****************************************************************/
/*! exports provided: CreateVoteDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVoteDto", function() { return CreateVoteDto; });
class CreateVoteDto {
}


/***/ }),

/***/ "./apps/api/src/app/endpoints/votes/schemas/vote.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/endpoints/votes/schemas/vote.schema.ts ***!
  \*****************************************************************/
/*! exports provided: Vote, VoteSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteSchema", function() { return VoteSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b;



let Vote = class Vote {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'Article' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _a : Object)
], Vote.prototype, "article", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId, ref: 'User' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId) === "function" ? _b : Object)
], Vote.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Vote.prototype, "value", void 0);
Vote = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ timestamps: true })
], Vote);

const VoteSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Vote);


/***/ }),

/***/ "./apps/api/src/app/endpoints/votes/votes.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/votes/votes.controller.ts ***!
  \**************************************************************/
/*! exports provided: VotesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesController", function() { return VotesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto/create-vote.dto */ "./apps/api/src/app/endpoints/votes/dto/create-vote.dto.ts");
/* harmony import */ var _votes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./votes.service */ "./apps/api/src/app/endpoints/votes/votes.service.ts");
var _a, _b, _c, _d, _e, _f, _g;




let VotesController = class VotesController {
    constructor(votesService) {
        this.votesService = votesService;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.findAll();
        });
    }
    updateVote(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.updateOne(data.id.toString(), data.value);
        });
    }
    insertOne(createVoteDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.insert(createVoteDto);
        });
    }
    getVotesFromUser(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.findByUser(query.id.toString());
        });
    }
    findByArticle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.findByArticle(id);
        });
    }
    getResultsFromArticle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.votesService.getResultsFromArticle(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], VotesController.prototype, "findAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], VotesController.prototype, "updateVote", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('add'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVoteDto"] !== "undefined" && _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__["CreateVoteDto"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], VotesController.prototype, "insertOne", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], VotesController.prototype, "getVotesFromUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('article/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], VotesController.prototype, "findByArticle", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('results/article/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], VotesController.prototype, "getResultsFromArticle", null);
VotesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('votes'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _votes_service__WEBPACK_IMPORTED_MODULE_3__["VotesService"] !== "undefined" && _votes_service__WEBPACK_IMPORTED_MODULE_3__["VotesService"]) === "function" ? _g : Object])
], VotesController);



/***/ }),

/***/ "./apps/api/src/app/endpoints/votes/votes.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/endpoints/votes/votes.module.ts ***!
  \**********************************************************/
/*! exports provided: VotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesModule", function() { return VotesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _votes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./votes.service */ "./apps/api/src/app/endpoints/votes/votes.service.ts");
/* harmony import */ var _votes_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./votes.controller */ "./apps/api/src/app/endpoints/votes/votes.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/vote.schema */ "./apps/api/src/app/endpoints/votes/schemas/vote.schema.ts");






let VotesModule = class VotesModule {
};
VotesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                {
                    name: _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__["Vote"].name,
                    schema: _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__["VoteSchema"].index({ article: 1, user: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_votes_service__WEBPACK_IMPORTED_MODULE_2__["VotesService"]],
        controllers: [_votes_controller__WEBPACK_IMPORTED_MODULE_3__["VotesController"]],
        exports: [_votes_service__WEBPACK_IMPORTED_MODULE_2__["VotesService"]],
    })
], VotesModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/votes/votes.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/endpoints/votes/votes.service.ts ***!
  \***********************************************************/
/*! exports provided: VotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesService", function() { return VotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/vote.schema */ "./apps/api/src/app/endpoints/votes/schemas/vote.schema.ts");
var _a;





let VotesService = class VotesService {
    constructor(voteModel) {
        this.voteModel = voteModel;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.find().exec();
        });
    }
    findOne(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.findById(id).exec();
        });
    }
    updateOne(id, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.updateOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, { value: value }).exec();
        });
    }
    findByArticle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.find({ article: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
        });
    }
    findByUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.find({ user: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
        });
    }
    getResultsFromArticle(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const articles = yield this.voteModel.find({ article: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
            let yes = [];
            let no = [];
            articles.forEach((article) => {
                if (article.value) {
                    yes.push(1);
                }
                else {
                    no.push(0);
                }
            });
            let result = {
                yes: Math.round((yes.length / (articles.length)) * 100),
                no: Math.round((no.length / (articles.length)) * 100),
            };
            return result;
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.deleteOne({ _id: id }).exec();
        });
    }
    insert(vote) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let v = {
                article: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(vote.article),
                user: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(vote.user),
                value: vote.value
            };
            return this.voteModel.create(v);
        });
    }
    insertMany(votes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.insertMany(votes);
        });
    }
    deleteAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.remove({}).exec();
        });
    }
    findAndCountByArticle() {
        const aggregatorOpts = [
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            },
        ];
        return this.voteModel.aggregate(aggregatorOpts);
    }
    findAndCountTrending() {
        const now = new Date(Date.now());
        now.setHours(now.getHours() - 1);
        const aggregatorOpts = [
            {
                $match: {
                    createdAt: { $gte: now }
                }
            },
            {
                $group: {
                    _id: { article: '$article' },
                    count: { $sum: 1 },
                },
            }
        ];
        return this.voteModel.aggregate(aggregatorOpts);
    }
};
VotesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_vote_schema__WEBPACK_IMPORTED_MODULE_4__["Vote"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], VotesService);



/***/ }),

/***/ "./apps/api/src/app/endpoints/weights/schemas/weight.schema.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/endpoints/weights/schemas/weight.schema.ts ***!
  \*********************************************************************/
/*! exports provided: Weight, WeightSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weight", function() { return Weight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightSchema", function() { return WeightSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);


let Weight = class Weight {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "voteFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "shareFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "likeFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "bookmarkFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "stopFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "skipFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Weight.prototype, "timeFactor", void 0);
Weight = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Weight);

const WeightSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Weight);


/***/ }),

/***/ "./apps/api/src/app/endpoints/weights/weights.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/endpoints/weights/weights.module.ts ***!
  \**************************************************************/
/*! exports provided: WeightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightsModule", function() { return WeightsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/weight.schema */ "./apps/api/src/app/endpoints/weights/schemas/weight.schema.ts");
/* harmony import */ var _weights_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weights.service */ "./apps/api/src/app/endpoints/weights/weights.service.ts");
var _a, _b;






let WeightsModule = class WeightsModule {
    constructor(weightsService, mongoConnection) {
        this.weightsService = weightsService;
        this.mongoConnection = mongoConnection;
    }
    onModuleInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.mongoConnection.db
                    .listCollections({ name: 'weights' })
                    .next();
                if (response === null) {
                    yield this.weightsService.initWeights();
                    _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Weights collection initialized...');
                }
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something happened listing weight mongo collection', error);
            }
        });
    }
};
WeightsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__["Weight"].name, schema: _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__["WeightSchema"] }]),
        ],
        providers: [_weights_service__WEBPACK_IMPORTED_MODULE_5__["WeightsService"]],
        exports: [_weights_service__WEBPACK_IMPORTED_MODULE_5__["WeightsService"], _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectConnection"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _weights_service__WEBPACK_IMPORTED_MODULE_5__["WeightsService"] !== "undefined" && _weights_service__WEBPACK_IMPORTED_MODULE_5__["WeightsService"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Connection"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Connection"]) === "function" ? _b : Object])
], WeightsModule);



/***/ }),

/***/ "./apps/api/src/app/endpoints/weights/weights.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/endpoints/weights/weights.service.ts ***!
  \***************************************************************/
/*! exports provided: WeightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightsService", function() { return WeightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/weight.schema */ "./apps/api/src/app/endpoints/weights/schemas/weight.schema.ts");
var _a;





let WeightsService = class WeightsService {
    constructor(weightModel) {
        this.weightModel = weightModel;
    }
    initWeights() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.weightModel.create({
                voteFactor: process.env.VOTE_FACTOR,
                shareFactor: process.env.SHARE_FACTOR,
                likeFactor: process.env.LIKE_FACTOR,
                bookmarkFactor: process.env.BOOKMARK_FACTOR,
                stopFactor: process.env.STOP_FACTOR,
                skipFactor: process.env.SKIP_FACTOR,
                timeFactor: process.env.TIME_FACTOR,
            });
        });
    }
    getWeights() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.weightModel.findOne({}).exec();
        });
    }
};
WeightsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__["Weight"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], WeightsService);



/***/ }),

/***/ "./apps/api/src/app/score-calculator/score-calculator.module.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/app/score-calculator/score-calculator.module.ts ***!
  \**********************************************************************/
/*! exports provided: ScoreCalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCalculatorModule", function() { return ScoreCalculatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoints/articles/article.module */ "./apps/api/src/app/endpoints/articles/article.module.ts");
/* harmony import */ var _endpoints_bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoints/bookmarks/bookmarks.module */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.module.ts");
/* harmony import */ var _endpoints_likes_likes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../endpoints/likes/likes.module */ "./apps/api/src/app/endpoints/likes/likes.module.ts");
/* harmony import */ var _endpoints_shares_shares_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../endpoints/shares/shares.module */ "./apps/api/src/app/endpoints/shares/shares.module.ts");
/* harmony import */ var _endpoints_skips_skips_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints/skips/skips.module */ "./apps/api/src/app/endpoints/skips/skips.module.ts");
/* harmony import */ var _endpoints_stops_stops_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../endpoints/stops/stops.module */ "./apps/api/src/app/endpoints/stops/stops.module.ts");
/* harmony import */ var _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../endpoints/votes/votes.module */ "./apps/api/src/app/endpoints/votes/votes.module.ts");
/* harmony import */ var _endpoints_weights_weights_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../endpoints/weights/weights.module */ "./apps/api/src/app/endpoints/weights/weights.module.ts");
/* harmony import */ var _score_calculator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score-calculator.service */ "./apps/api/src/app/score-calculator/score-calculator.service.ts");











let ScoreCalculatorModule = class ScoreCalculatorModule {
};
ScoreCalculatorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _endpoints_weights_weights_module__WEBPACK_IMPORTED_MODULE_9__["WeightsModule"],
            _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_2__["ArticlesModule"],
            _endpoints_bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__["BookmarksModule"],
            _endpoints_likes_likes_module__WEBPACK_IMPORTED_MODULE_4__["LikesModule"],
            _endpoints_shares_shares_module__WEBPACK_IMPORTED_MODULE_5__["SharesModule"],
            _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_8__["VotesModule"],
            _endpoints_skips_skips_module__WEBPACK_IMPORTED_MODULE_6__["SkipsModule"],
            _endpoints_stops_stops_module__WEBPACK_IMPORTED_MODULE_7__["StopsModule"]
        ],
        providers: [_score_calculator_service__WEBPACK_IMPORTED_MODULE_10__["ScoreCalculatorService"]],
    })
], ScoreCalculatorModule);



/***/ }),

/***/ "./apps/api/src/app/score-calculator/score-calculator.service.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/score-calculator/score-calculator.service.ts ***!
  \***********************************************************************/
/*! exports provided: ScoreCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCalculatorService", function() { return ScoreCalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../endpoints/articles/article.service */ "./apps/api/src/app/endpoints/articles/article.service.ts");
/* harmony import */ var _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints/articles/schemas/article.schema */ "./apps/api/src/app/endpoints/articles/schemas/article.schema.ts");
/* harmony import */ var _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../endpoints/bookmarks/bookmarks.service */ "./apps/api/src/app/endpoints/bookmarks/bookmarks.service.ts");
/* harmony import */ var _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../endpoints/likes/likes.service */ "./apps/api/src/app/endpoints/likes/likes.service.ts");
/* harmony import */ var _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../endpoints/shares/shares.service */ "./apps/api/src/app/endpoints/shares/shares.service.ts");
/* harmony import */ var _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../endpoints/skips/skips.service */ "./apps/api/src/app/endpoints/skips/skips.service.ts");
/* harmony import */ var _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../endpoints/stops/stops.service */ "./apps/api/src/app/endpoints/stops/stops.service.ts");
/* harmony import */ var _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../endpoints/votes/votes.service */ "./apps/api/src/app/endpoints/votes/votes.service.ts");
/* harmony import */ var _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../endpoints/weights/weights.service */ "./apps/api/src/app/endpoints/weights/weights.service.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j;














/**
 * baseScore = biasFactor * (postiveBiasCount + negativeBiasCount) + shareFactor * shareCount + likeFactor * likeCount + stopFactor * stopSecondsTotal + saveFactor * saveCount - skipFactor * skipCount;
 * calculatedScore = Math.round((baseScore / Math.pow(ageInHours + 2, timeDecayFactor)) * 1000000) / 1000000;
 */
let ScoreCalculatorService = class ScoreCalculatorService {
    constructor(weightsService, articleModel, articlesService, bookmarksService, likesService, sharesService, votesService, skipsService, stopsService) {
        this.weightsService = weightsService;
        this.articleModel = articleModel;
        this.articlesService = articlesService;
        this.bookmarksService = bookmarksService;
        this.likesService = likesService;
        this.sharesService = sharesService;
        this.votesService = votesService;
        this.skipsService = skipsService;
        this.stopsService = stopsService;
    }
    calculateScore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Calculating score...');
                /** Get scoring weights */
                const weights = yield this.weightsService.getWeights();
                /** Set bulk operation */
                const bulkOperation = this.articleModel.collection.initializeUnorderedBulkOp();
                /** Get articles and init data array */
                const articles = yield this.articlesService.findAll();
                /** Get all data */
                const bookmarks = yield this.bookmarksService.findAndCountByArticle();
                const likes = yield this.likesService.findAndCountByArticle();
                const shares = yield this.sharesService.findAndCountByArticle();
                const votes = yield this.votesService.findAndCountByArticle();
                const skips = yield this.skipsService.findAndCountByArticle();
                const stops = yield this.stopsService.findAndCountByArticle();
                articles.forEach((article) => {
                    let data = {
                        votingCount: 1,
                        shareCount: 1,
                        likeCount: 1,
                        saveCount: 1,
                        stopCount: 1,
                        skipCount: 1,
                        age: 0,
                        article_id: null,
                    };
                    bookmarks
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.saveCount = data.saveCount + result.count;
                    });
                    likes
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.likeCount = data.likeCount + result.count;
                    });
                    shares
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.shareCount = data.shareCount + result.count;
                    });
                    votes
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.votingCount = data.votingCount + result.count;
                    });
                    skips
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.skipCount = data.skipCount + result.count;
                    });
                    stops
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.stopCount = data.skipCount + result.count;
                    });
                    data.article_id = article._id.toString();
                    data.age = Math.round((Date.now() - article.publishedAt.getTime()) / 1000 / 3600);
                    const baseScore = weights.bookmarkFactor * data.saveCount +
                        weights.voteFactor * data.votingCount +
                        weights.shareFactor * data.shareCount +
                        weights.stopFactor * data.stopCount +
                        weights.likeFactor * data.likeCount -
                        weights.skipFactor * data.skipCount -
                        0.0001 * data.age;
                    const calculated_score = Math.round((baseScore / Math.pow(data.age + 2, weights.timeFactor)) * 1000000) / 1000000;
                    bulkOperation
                        .find({ _id: article._id })
                        .update({ $set: { score: calculated_score } });
                });
                yield bulkOperation.execute();
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Scores updated...');
                this.calculateTrendingScore(articles, weights);
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error(error);
            }
        });
    }
    calculateTrendingScore(articles, weights) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Calculating TRENDING score...');
                const bulkOperation = this.articleModel.collection.initializeUnorderedBulkOp();
                const bookmarks = yield this.bookmarksService.findAndCountTrending();
                const likes = yield this.likesService.findAndCountTrending();
                const shares = yield this.sharesService.findAndCountTrending();
                const votes = yield this.votesService.findAndCountTrending();
                const skips = yield this.skipsService.findAndCountTrending();
                const stops = yield this.stopsService.findAndCountTrending();
                articles.forEach((article) => {
                    let data = {
                        votingCount: 1,
                        shareCount: 1,
                        likeCount: 1,
                        saveCount: 1,
                        stopCount: 1,
                        skipCount: 1,
                        age: 0,
                        article_id: null,
                    };
                    bookmarks
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.saveCount = data.saveCount + result.count;
                    });
                    likes
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.likeCount = data.likeCount + result.count;
                    });
                    shares
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.shareCount = data.shareCount + result.count;
                    });
                    votes
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.votingCount = data.votingCount + result.count;
                    });
                    skips
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.skipCount = data.skipCount + result.count;
                    });
                    stops
                        .filter((val) => val._id.article.toString() === article._id.toString())
                        .forEach((result) => {
                        data.stopCount = data.skipCount + result.count;
                    });
                    data.article_id = article._id.toString();
                    data.age = Math.round((Date.now() - article.publishedAt.getTime()) / 1000 / 3600);
                    const baseScore = weights.bookmarkFactor * data.saveCount +
                        weights.voteFactor * data.votingCount +
                        weights.shareFactor * data.shareCount +
                        weights.stopFactor * data.stopCount +
                        weights.likeFactor * data.likeCount -
                        weights.skipFactor * data.skipCount -
                        0.0001 * data.age;
                    bulkOperation
                        .find({ _id: article._id })
                        .update({ $set: { trendingScore: baseScore } });
                });
                yield bulkOperation.execute();
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Trending scores updated...');
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error(error);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__["Cron"])('5 * * * * *'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ScoreCalculatorService.prototype, "calculateScore", null);
ScoreCalculatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__["Article"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__["WeightsService"] !== "undefined" && _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__["WeightsService"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _b : Object, typeof (_c = typeof _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticlesService"] !== "undefined" && _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticlesService"]) === "function" ? _c : Object, typeof (_d = typeof _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__["BookmarksService"] !== "undefined" && _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__["BookmarksService"]) === "function" ? _d : Object, typeof (_e = typeof _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__["LikesService"] !== "undefined" && _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__["LikesService"]) === "function" ? _e : Object, typeof (_f = typeof _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__["SharesService"] !== "undefined" && _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__["SharesService"]) === "function" ? _f : Object, typeof (_g = typeof _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__["VotesService"] !== "undefined" && _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__["VotesService"]) === "function" ? _g : Object, typeof (_h = typeof _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__["SkipsService"] !== "undefined" && _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__["SkipsService"]) === "function" ? _h : Object, typeof (_j = typeof _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__["StopsService"] !== "undefined" && _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__["StopsService"]) === "function" ? _j : Object])
], ScoreCalculatorService);



/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    news_api_key: '07605b7196ca417d81d6a0ee03f68b2c',
    news_api_url: 'https://newsapi.org/v2/top-headlines',
    vzla_api_url: 'https://api.venezuelahoy.com/articles'
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 8080;
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/genzosolutions/Desktop/genzo-solutions/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/common/decorators/core/injectable.decorator":
/*!**********************************************************************!*\
  !*** external "@nestjs/common/decorators/core/injectable.decorator" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/decorators/core/injectable.decorator");

/***/ }),

/***/ "@nestjs/common/decorators/modules/module.decorator":
/*!*********************************************************************!*\
  !*** external "@nestjs/common/decorators/modules/module.decorator" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/decorators/modules/module.decorator");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map