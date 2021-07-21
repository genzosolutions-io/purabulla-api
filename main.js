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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
var ArticlesService_1, _a, _b, _c;







let ArticlesService = ArticlesService_1 = class ArticlesService {
    constructor(articleModel, followsService, bookmarksService) {
        this.articleModel = articleModel;
        this.followsService = followsService;
        this.bookmarksService = bookmarksService;
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](ArticlesService_1.name);
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
    findArticlesByUrl(queryArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (queryArray.length > 0) {
                return yield this.articleModel.find({ $or: queryArray }).exec();
            }
            else {
                return [];
            }
        });
    }
    findFollowedArticlesPaginated(id, page, limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const follows = yield this.followsService.getRawUserFollows(id);
            const queryArray = [];
            follows.forEach((follow) => {
                queryArray.push({ source: follow.source });
            });
            if (queryArray.length > 0) {
                let results = yield this.articleModel
                    .find({ $or: queryArray })
                    .limit(limit * 1)
                    .skip((page - 1) * limit)
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
ArticlesService = ArticlesService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__[/* Article */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__[/* FollowsService */ "a"] !== "undefined" && _follows_follows_service__WEBPACK_IMPORTED_MODULE_5__[/* FollowsService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__[/* BookmarksService */ "a"] !== "undefined" && _bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_4__[/* BookmarksService */ "a"]) === "function" ? _c : Object])
], ArticlesService);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
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
        return this.bookmarkModel.aggregate(aggregatorOpts);
    }
};
BookmarksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_2__[/* Bookmark */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object])
], BookmarksService);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
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
            return this.voteModel
                .updateOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, { value: value })
                .exec();
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
            const articles = yield this.voteModel
                .find({ article: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) })
                .exec();
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
                yes: Math.round((yes.length / articles.length) * 100),
                no: Math.round((no.length / articles.length) * 100),
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
                value: vote.value,
            };
            return this.voteModel.create(v);
        });
    }
    insertMany(votes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.voteModel.insertMany(votes, { ordered: false });
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
        return this.voteModel.aggregate(aggregatorOpts);
    }
};
VotesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_vote_schema__WEBPACK_IMPORTED_MODULE_4__[/* Vote */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], VotesService);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArticleSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
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
                .populate('source')
                .exec();
        });
    }
    getRawUserFollows(user_id) {
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_follow_schema__WEBPACK_IMPORTED_MODULE_4__[/* Follow */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], FollowsService);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_source_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_source_schema__WEBPACK_IMPORTED_MODULE_4__[/* Source */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SourcesService);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_role_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_role_schema__WEBPACK_IMPORTED_MODULE_4__[/* Role */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], RolesService);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
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
        return this.likeModel.aggregate(aggregatorOpts);
    }
};
LikesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__[/* Like */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], LikesService);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__[/* Share */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SharesService);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__[/* Skip */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], SkipsService);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_stop_schema__WEBPACK_IMPORTED_MODULE_4__[/* Stop */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], StopsService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SourceSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__[/* Weight */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], WeightsService);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _follows_follows_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _article_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);








let ArticlesModule = class ArticlesModule {
};
ArticlesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                {
                    name: _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__[/* Article */ "a"].name,
                    schema: _schemas_article_schema__WEBPACK_IMPORTED_MODULE_7__[/* ArticleSchema */ "b"].index({ url: true }, { unique: true })
                },
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _follows_follows_module__WEBPACK_IMPORTED_MODULE_4__[/* FollowsModule */ "a"],
            _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__[/* BookmarksModule */ "a"]
        ],
        controllers: [_article_controller__WEBPACK_IMPORTED_MODULE_5__[/* ArticlesController */ "a"]],
        providers: [_article_service__WEBPACK_IMPORTED_MODULE_6__[/* ArticlesService */ "a"]],
        exports: [_article_service__WEBPACK_IMPORTED_MODULE_6__[/* ArticlesService */ "a"], _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"]],
    })
], ArticlesModule);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _bookmarks_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let BookmarksModule = class BookmarksModule {
};
BookmarksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([
                { name: _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__[/* Bookmark */ "a"].name, schema: _schemas_bookmark_schema__WEBPACK_IMPORTED_MODULE_4__[/* BookmarkSchema */ "b"] },
            ]),
        ],
        providers: [_bookmarks_service__WEBPACK_IMPORTED_MODULE_2__[/* BookmarksService */ "a"]],
        controllers: [_bookmarks_controller__WEBPACK_IMPORTED_MODULE_3__[/* BookmarksController */ "a"]],
        exports: [_bookmarks_service__WEBPACK_IMPORTED_MODULE_2__[/* BookmarksService */ "a"]],
    })
], BookmarksModule);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _votes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _votes_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);






let VotesModule = class VotesModule {
};
VotesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                {
                    name: _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__[/* Vote */ "a"].name,
                    schema: _schemas_vote_schema__WEBPACK_IMPORTED_MODULE_5__[/* VoteSchema */ "b"].index({ article: 1, user: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_votes_service__WEBPACK_IMPORTED_MODULE_2__[/* VotesService */ "a"]],
        controllers: [_votes_controller__WEBPACK_IMPORTED_MODULE_3__[/* VotesController */ "a"]],
        exports: [_votes_service__WEBPACK_IMPORTED_MODULE_2__[/* VotesService */ "a"]],
    })
], VotesModule);



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_decorators_core_injectable_decorator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66);
/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html_to_text__WEBPACK_IMPORTED_MODULE_10__);
var CronService_1, _a, _b, _c, _d;











let CronService = CronService_1 = class CronService {
    constructor(httpService, articlesService, sourcesService, votesService) {
        this.httpService = httpService;
        this.articlesService = articlesService;
        this.sourcesService = sourcesService;
        this.votesService = votesService;
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](CronService_1.name);
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
            const vzla_articles = [];
            try {
                /** Getting data from VenezuelaHoy API */
                const vzla_response = yield this.httpService
                    .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].vzla_api_url, {
                    params: {
                        sort: '-id',
                    },
                })
                    .toPromise();
                if (vzla_response.data.data.length > 0) {
                    yield this.insertSources(vzla_response.data.data);
                    const sources = yield this.sourcesService.findAll();
                    vzla_response.data.data.forEach((obj) => {
                        for (let i = 0; i < sources.length; i++) {
                            if (sources[i].url === obj.attributes['publication-url']) {
                                let a = {
                                    title: obj.attributes.title,
                                    source: sources[i]._id,
                                    author: obj.attributes.publication,
                                    description: html_to_text__WEBPACK_IMPORTED_MODULE_10__["htmlToText"](obj.attributes.body, {
                                        wordwrap: null,
                                    }),
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
                    this.setDefaultVotes(false, vzla_articles);
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
                    this.setDefaultVotes(false, vzla_articles);
                }
            }
        });
    }
    setDefaultVotes(withId, articles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (withId) {
                    const votes = [];
                    articles.forEach((article) => {
                        const yesVote = {
                            article: article._id,
                            user: mongoose__WEBPACK_IMPORTED_MODULE_9__["Types"].ObjectId(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].default_vote_pb_user_yes),
                            value: true,
                        };
                        votes.push(yesVote);
                        const noVote = {
                            article: article._id,
                            user: mongoose__WEBPACK_IMPORTED_MODULE_9__["Types"].ObjectId(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].default_vote_pb_user_no),
                            value: false,
                        };
                        votes.push(noVote);
                    });
                    this.logger.log('Amount of votes to be inserted as default ' + votes.length);
                    yield this.votesService.insertMany(votes);
                    this.logger.log('Default votes have been inserted');
                }
                else {
                    const queryArray = [];
                    articles.forEach((a) => {
                        queryArray.push({ url: a.url });
                    });
                    const results = yield this.articlesService.findArticlesByUrl(queryArray);
                    const votes = [];
                    results.forEach((article) => {
                        const yesVote = {
                            article: article._id,
                            user: mongoose__WEBPACK_IMPORTED_MODULE_9__["Types"].ObjectId(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].default_vote_pb_user_yes),
                            value: true,
                        };
                        votes.push(yesVote);
                        const noVote = {
                            article: article._id,
                            user: mongoose__WEBPACK_IMPORTED_MODULE_9__["Types"].ObjectId(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].default_vote_pb_user_no),
                            value: false,
                        };
                        votes.push(noVote);
                    });
                    this.logger.log('Amount of votes to be inserted as default ' + votes.length);
                    yield this.votesService.insertMany(votes);
                    this.logger.log('Default votes have been inserted');
                }
            }
            catch (error) {
                let flag = false;
                error.writeErrors.forEach((writeError) => {
                    if (writeError.code !== 11000) {
                        this.logger.error('Something ocurred inserting or updating default votes...', error);
                        flag = true;
                    }
                });
                if (!flag) {
                    this.logger.log('Default votes have been inserted');
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"] !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"]) === "function" ? _a : Object, typeof (_b = typeof _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__[/* ArticlesService */ "a"] !== "undefined" && _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_6__[/* ArticlesService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__[/* SourcesService */ "a"] !== "undefined" && _endpoints_sources_sources_service__WEBPACK_IMPORTED_MODULE_7__[/* SourcesService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_8__[/* VotesService */ "a"] !== "undefined" && _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_8__[/* VotesService */ "a"]) === "function" ? _d : Object])
], CronService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
const environment = {
    production: true,
    news_api_key: '07605b7196ca417d81d6a0ee03f68b2c',
    news_api_url: 'https://newsapi.org/v2/top-headlines',
    vzla_api_url: 'https://api.venezuelahoy.com/articles',
    default_vote_pb_user_yes: "606dd8c10611b385b7ef5aa9",
    default_vote_pb_user_no: "606e5a9f0611b385b7ef5aad"
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookmarkSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FollowSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VoteSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
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
            return this.userModel
                .findById(id)
                .populate({ path: 'roles', model: 'Role' })
                .exec();
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
            return this.userModel
                .find()
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.deleteOne({ _id: id }).exec();
        });
    }
    findByAuthUid(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel
                .findOne({ auth_uid: uid })
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
    findByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel
                .findOne({ email: email })
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
    updateUser(id, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel
                .updateOne({ _id: id }, user)
                .populate({ path: 'roles', model: 'Role' })
                .exec();
        });
    }
};
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__[/* User */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], UsersService);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoleSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _roles_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);






let RolesModule = class RolesModule {
};
RolesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__[/* Role */ "a"].name, schema: _schemas_role_schema__WEBPACK_IMPORTED_MODULE_5__[/* RoleSchema */ "b"] }]),
        ],
        providers: [_roles_service__WEBPACK_IMPORTED_MODULE_2__[/* RolesService */ "a"]],
        controllers: [_roles_controller__WEBPACK_IMPORTED_MODULE_3__[/* RolesController */ "a"]],
        exports: [_roles_service__WEBPACK_IMPORTED_MODULE_2__[/* RolesService */ "a"]]
    })
], RolesModule);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LikeSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShareSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeightSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SkipSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StopSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_schemas_visit_schema__WEBPACK_IMPORTED_MODULE_4__[/* Visit */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], VisitsService);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisitSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVisitDto; });
class CreateVisitDto {
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _follows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _follows_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);






let FollowsModule = class FollowsModule {
};
FollowsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                {
                    name: _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__[/* Follow */ "a"].name,
                    schema: _schemas_follow_schema__WEBPACK_IMPORTED_MODULE_5__[/* FollowSchema */ "b"].index({ user: 1, source: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_follows_service__WEBPACK_IMPORTED_MODULE_2__[/* FollowsService */ "a"]],
        controllers: [_follows_controller__WEBPACK_IMPORTED_MODULE_3__[/* FollowsController */ "a"]],
        exports: [_follows_service__WEBPACK_IMPORTED_MODULE_2__[/* FollowsService */ "a"]],
    })
], FollowsModule);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _sources_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






let SourcesModule = class SourcesModule {
};
SourcesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                {
                    name: _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__[/* Source */ "a"].name,
                    schema: _schemas_source_schema__WEBPACK_IMPORTED_MODULE_3__[/* SourceSchema */ "b"].index({ url: true }, { unique: true }),
                },
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
        ],
        controllers: [_sources_controller__WEBPACK_IMPORTED_MODULE_4__[/* SourcesController */ "a"]],
        providers: [_sources_service__WEBPACK_IMPORTED_MODULE_5__[/* SourcesService */ "a"]],
        exports: [_sources_service__WEBPACK_IMPORTED_MODULE_5__[/* SourcesService */ "a"]],
    })
], SourcesModule);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _likes_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let LikesModule = class LikesModule {
};
LikesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([{ name: _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__[/* Like */ "a"].name, schema: _schemas_like_schema__WEBPACK_IMPORTED_MODULE_4__[/* LikeSchema */ "b"].index({ article: 1, user: 1 }, { unique: true }) }]),
        ],
        providers: [_likes_service__WEBPACK_IMPORTED_MODULE_2__[/* LikesService */ "a"]],
        controllers: [_likes_controller__WEBPACK_IMPORTED_MODULE_3__[/* LikesController */ "a"]],
        exports: [_likes_service__WEBPACK_IMPORTED_MODULE_2__[/* LikesService */ "a"]]
    })
], LikesModule);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _shares_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let SharesModule = class SharesModule {
};
SharesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([{ name: _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__[/* Share */ "a"].name, schema: _schemas_share_schema__WEBPACK_IMPORTED_MODULE_4__[/* ShareSchema */ "b"] }]),
        ],
        providers: [_shares_service__WEBPACK_IMPORTED_MODULE_2__[/* SharesService */ "a"]],
        controllers: [_shares_controller__WEBPACK_IMPORTED_MODULE_3__[/* SharesController */ "a"]],
        exports: [_shares_service__WEBPACK_IMPORTED_MODULE_2__[/* SharesService */ "a"]],
    })
], SharesModule);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _weights_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
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
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__[/* Weight */ "a"].name, schema: _schemas_weight_schema__WEBPACK_IMPORTED_MODULE_4__[/* WeightSchema */ "b"] }]),
        ],
        providers: [_weights_service__WEBPACK_IMPORTED_MODULE_5__[/* WeightsService */ "a"]],
        exports: [_weights_service__WEBPACK_IMPORTED_MODULE_5__[/* WeightsService */ "a"], _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectConnection"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _weights_service__WEBPACK_IMPORTED_MODULE_5__[/* WeightsService */ "a"] !== "undefined" && _weights_service__WEBPACK_IMPORTED_MODULE_5__[/* WeightsService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Connection"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Connection"]) === "function" ? _b : Object])
], WeightsModule);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _skips_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);






let SkipsModule = class SkipsModule {
};
SkipsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["MongooseModule"].forFeature([
                {
                    name: _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__[/* Skip */ "a"].name,
                    schema: _schemas_skip_schema__WEBPACK_IMPORTED_MODULE_4__[/* SkipSchema */ "b"].index({ article: 1, user: 1 }, { unique: true }),
                },
            ]),
        ],
        providers: [_skips_service__WEBPACK_IMPORTED_MODULE_2__[/* SkipsService */ "a"]],
        controllers: [_skips_controller__WEBPACK_IMPORTED_MODULE_3__[/* SkipsController */ "a"]],
        exports: [_skips_service__WEBPACK_IMPORTED_MODULE_2__[/* SkipsService */ "a"]],
    })
], SkipsModule);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _stops_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);






let StopsModule = class StopsModule {
};
StopsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__[/* Stop */ "a"].name, schema: _schemas_stop_schema__WEBPACK_IMPORTED_MODULE_5__[/* StopSchema */ "b"].index({ article: 1, user: 1 }, { unique: true }) }]),
        ],
        providers: [_stops_service__WEBPACK_IMPORTED_MODULE_2__[/* StopsService */ "a"]],
        controllers: [_stops_controller__WEBPACK_IMPORTED_MODULE_3__[/* StopsController */ "a"]],
        exports: [_stops_service__WEBPACK_IMPORTED_MODULE_2__[/* StopsService */ "a"]]
    })
], StopsModule);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBookmarkDto; });
class CreateBookmarkDto {
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFollowDto; });
class CreateFollowDto {
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVoteDto; });
class CreateVoteDto {
}


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserDto; });
class CreateUserDto {
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLikeDto; });
class CreateLikeDto {
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShareDto; });
class CreateShareDto {
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSkipDto; });
class CreateSkipDto {
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStopDto; });
class CreateStopDto {
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cron_jobs_cron_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _endpoints_endpoints_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _score_calculator_score_calculator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _cron_jobs_cron_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21);
/* harmony import */ var _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4);
var _a, _b, _c, _d;














let AppModule = class AppModule {
    constructor(rolesService, cronService, articlesService, mongoConnection) {
        this.rolesService = rolesService;
        this.cronService = cronService;
        this.articlesService = articlesService;
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
                /** Uncomment if database has been deployed and has articles without default votes */
                // this.setDefaultVotes();
            }
            catch (error) {
                _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Something happened listing mongo collection', error);
            }
        });
    }
    setDefaultVotes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const articles = yield this.articlesService.findAll();
            this.cronService.setDefaultVotes(true, articles);
        });
    }
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_11__["ConfigModule"].forRoot(),
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forRoot(process.env.MONGO_URL, {
                useCreateIndex: true,
            }),
            _endpoints_endpoints_module__WEBPACK_IMPORTED_MODULE_7__[/* EndpointsModule */ "a"],
            _cron_jobs_cron_module__WEBPACK_IMPORTED_MODULE_5__[/* CronJobsModule */ "a"],
            _nestjs_schedule__WEBPACK_IMPORTED_MODULE_6__["ScheduleModule"].forRoot(),
            _score_calculator_score_calculator_module__WEBPACK_IMPORTED_MODULE_10__[/* ScoreCalculatorModule */ "a"],
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["InjectConnection"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__[/* RolesService */ "a"] !== "undefined" && _endpoints_roles_roles_service__WEBPACK_IMPORTED_MODULE_8__[/* RolesService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _cron_jobs_cron_service__WEBPACK_IMPORTED_MODULE_12__[/* CronService */ "a"] !== "undefined" && _cron_jobs_cron_service__WEBPACK_IMPORTED_MODULE_12__[/* CronService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_13__[/* ArticlesService */ "a"] !== "undefined" && _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_13__[/* ArticlesService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof mongoose__WEBPACK_IMPORTED_MODULE_9__["Connection"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_9__["Connection"]) === "function" ? _d : Object])
], AppModule);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"]) === "function" ? _a : Object])
], AppController);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronJobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _endpoints_sources_sources_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _cron_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);









let CronJobsModule = class CronJobsModule {
};
CronJobsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__[/* Article */ "a"].name, schema: _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_4__[/* ArticleSchema */ "b"] }, { name: _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__[/* Source */ "a"].name, schema: _endpoints_sources_schemas_source_schema__WEBPACK_IMPORTED_MODULE_5__[/* SourceSchema */ "b"] }]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_3__[/* ArticlesModule */ "a"],
            _endpoints_sources_sources_module__WEBPACK_IMPORTED_MODULE_6__[/* SourcesModule */ "a"],
            _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_7__[/* VotesModule */ "a"]
        ],
        controllers: [],
        providers: [_cron_service__WEBPACK_IMPORTED_MODULE_8__[/* CronService */ "a"]],
        exports: [_cron_service__WEBPACK_IMPORTED_MODULE_8__[/* CronService */ "a"]]
    })
], CronJobsModule);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__[/* CreateBookmarkDto */ "a"] !== "undefined" && _dto_create_bookmark_dto__WEBPACK_IMPORTED_MODULE_3__[/* CreateBookmarkDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__[/* BookmarksService */ "a"] !== "undefined" && _bookmarks_service__WEBPACK_IMPORTED_MODULE_2__[/* BookmarksService */ "a"]) === "function" ? _d : Object])
], BookmarksController);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _follows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateFollowDto */ "a"] !== "undefined" && _dto_create_follow_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateFollowDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _follows_service__WEBPACK_IMPORTED_MODULE_3__[/* FollowsService */ "a"] !== "undefined" && _follows_service__WEBPACK_IMPORTED_MODULE_3__[/* FollowsService */ "a"]) === "function" ? _e : Object])
], FollowsController);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _article_service__WEBPACK_IMPORTED_MODULE_2__[/* ArticlesService */ "a"] !== "undefined" && _article_service__WEBPACK_IMPORTED_MODULE_2__[/* ArticlesService */ "a"]) === "function" ? _b : Object])
], ArticlesController);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _sources_service__WEBPACK_IMPORTED_MODULE_2__[/* SourcesService */ "a"] !== "undefined" && _sources_service__WEBPACK_IMPORTED_MODULE_2__[/* SourcesService */ "a"]) === "function" ? _b : Object])
], SourcesController);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _votes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVoteDto */ "a"] !== "undefined" && _dto_create_vote_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVoteDto */ "a"]) === "function" ? _c : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _votes_service__WEBPACK_IMPORTED_MODULE_3__[/* VotesService */ "a"] !== "undefined" && _votes_service__WEBPACK_IMPORTED_MODULE_3__[/* VotesService */ "a"]) === "function" ? _g : Object])
], VotesController);



/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/decorators/core/injectable.decorator");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("html-to-text");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _articles_article_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _sources_sources_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _votes_votes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _likes_likes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _follows_follows_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _shares_shares_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42);
/* harmony import */ var _weights_weights_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43);
/* harmony import */ var _skips_skips_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44);
/* harmony import */ var _stops_stops_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45);
/* harmony import */ var _visits_visits_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76);















let EndpointsModule = class EndpointsModule {
};
EndpointsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common_decorators_modules_module_decorator__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _articles_article_module__WEBPACK_IMPORTED_MODULE_2__[/* ArticlesModule */ "a"],
            _sources_sources_module__WEBPACK_IMPORTED_MODULE_3__[/* SourcesModule */ "a"],
            _votes_votes_module__WEBPACK_IMPORTED_MODULE_4__[/* VotesModule */ "a"],
            _likes_likes_module__WEBPACK_IMPORTED_MODULE_6__[/* LikesModule */ "a"],
            _bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_7__[/* BookmarksModule */ "a"],
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__[/* RolesModule */ "a"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_5__[/* UsersModule */ "a"],
            _follows_follows_module__WEBPACK_IMPORTED_MODULE_9__[/* FollowsModule */ "a"],
            _shares_shares_module__WEBPACK_IMPORTED_MODULE_10__[/* SharesModule */ "a"],
            _weights_weights_module__WEBPACK_IMPORTED_MODULE_11__[/* WeightsModule */ "a"],
            _skips_skips_module__WEBPACK_IMPORTED_MODULE_12__[/* SkipsModule */ "a"],
            _stops_stops_module__WEBPACK_IMPORTED_MODULE_13__[/* StopsModule */ "a"],
            _visits_visits_module__WEBPACK_IMPORTED_MODULE_14__[/* VisitsModule */ "a"],
        ],
        controllers: [],
        providers: [],
        exports: [_roles_roles_module__WEBPACK_IMPORTED_MODULE_8__[/* RolesModule */ "a"], _articles_article_module__WEBPACK_IMPORTED_MODULE_2__[/* ArticlesModule */ "a"]],
    })
], EndpointsModule);



/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/decorators/modules/module.decorator");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);







let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__[/* User */ "a"].name, schema: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__[/* UserSchema */ "b"] }]),
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_6__[/* RolesModule */ "a"]
        ],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_2__[/* UsersService */ "a"]],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_3__[/* UsersController */ "a"]]
    })
], UsersModule);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__[/* CreateUserDto */ "a"] !== "undefined" && _dto_create_user_dto__WEBPACK_IMPORTED_MODULE_3__[/* CreateUserDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _users_service__WEBPACK_IMPORTED_MODULE_4__[/* UsersService */ "a"] !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_4__[/* UsersService */ "a"]) === "function" ? _e : Object, typeof (_f = typeof _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__[/* RolesService */ "a"] !== "undefined" && _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__[/* RolesService */ "a"]) === "function" ? _f : Object])
], UsersController);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let RolesController = class RolesController {
};
RolesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('roles')
], RolesController);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateLikeDto */ "a"] !== "undefined" && _dto_create_like_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateLikeDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _likes_service__WEBPACK_IMPORTED_MODULE_3__[/* LikesService */ "a"] !== "undefined" && _likes_service__WEBPACK_IMPORTED_MODULE_3__[/* LikesService */ "a"]) === "function" ? _d : Object])
], LikesController);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateShareDto */ "a"] !== "undefined" && _dto_create_share_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateShareDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _shares_service__WEBPACK_IMPORTED_MODULE_3__[/* SharesService */ "a"] !== "undefined" && _shares_service__WEBPACK_IMPORTED_MODULE_3__[/* SharesService */ "a"]) === "function" ? _c : Object])
], SharesController);



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _skips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateSkipDto */ "a"] !== "undefined" && _dto_create_skip_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateSkipDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _skips_service__WEBPACK_IMPORTED_MODULE_3__[/* SkipsService */ "a"] !== "undefined" && _skips_service__WEBPACK_IMPORTED_MODULE_3__[/* SkipsService */ "a"]) === "function" ? _c : Object])
], SkipsController);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _stops_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateStopDto */ "a"] !== "undefined" && _dto_create_stop_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateStopDto */ "a"]) === "function" ? _a : Object]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _stops_service__WEBPACK_IMPORTED_MODULE_3__[/* StopsService */ "a"] !== "undefined" && _stops_service__WEBPACK_IMPORTED_MODULE_3__[/* StopsService */ "a"]) === "function" ? _c : Object])
], StopsController);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visits_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _visits_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);






let VisitsModule = class VisitsModule {
};
VisitsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__[/* Visit */ "a"].name, schema: _schemas_visit_schema__WEBPACK_IMPORTED_MODULE_5__[/* VisitSchema */ "b"].index({ article: 1, user: 1 }, { unique: true }) }]),
        ],
        providers: [_visits_service__WEBPACK_IMPORTED_MODULE_2__[/* VisitsService */ "a"]],
        controllers: [_visits_controller__WEBPACK_IMPORTED_MODULE_3__[/* VisitsController */ "a"]]
    })
], VisitsModule);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _visits_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVisitDto */ "a"] !== "undefined" && _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVisitDto */ "a"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], VisitsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVisitDto */ "a"] !== "undefined" && _dto_create_visit_dto__WEBPACK_IMPORTED_MODULE_2__[/* CreateVisitDto */ "a"]) === "function" ? _c : Object, String]),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _visits_service__WEBPACK_IMPORTED_MODULE_3__[/* VisitsService */ "a"] !== "undefined" && _visits_service__WEBPACK_IMPORTED_MODULE_3__[/* VisitsService */ "a"]) === "function" ? _e : Object])
], VisitsController);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreCalculatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _endpoints_bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _endpoints_likes_likes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _endpoints_shares_shares_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _endpoints_skips_skips_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _endpoints_stops_stops_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _endpoints_weights_weights_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var _score_calculator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79);











let ScoreCalculatorModule = class ScoreCalculatorModule {
};
ScoreCalculatorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _endpoints_weights_weights_module__WEBPACK_IMPORTED_MODULE_9__[/* WeightsModule */ "a"],
            _endpoints_articles_article_module__WEBPACK_IMPORTED_MODULE_2__[/* ArticlesModule */ "a"],
            _endpoints_bookmarks_bookmarks_module__WEBPACK_IMPORTED_MODULE_3__[/* BookmarksModule */ "a"],
            _endpoints_likes_likes_module__WEBPACK_IMPORTED_MODULE_4__[/* LikesModule */ "a"],
            _endpoints_shares_shares_module__WEBPACK_IMPORTED_MODULE_5__[/* SharesModule */ "a"],
            _endpoints_votes_votes_module__WEBPACK_IMPORTED_MODULE_8__[/* VotesModule */ "a"],
            _endpoints_skips_skips_module__WEBPACK_IMPORTED_MODULE_6__[/* SkipsModule */ "a"],
            _endpoints_stops_stops_module__WEBPACK_IMPORTED_MODULE_7__[/* StopsModule */ "a"]
        ],
        providers: [_score_calculator_service__WEBPACK_IMPORTED_MODULE_10__[/* ScoreCalculatorService */ "a"]],
    })
], ScoreCalculatorModule);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreCalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _nestjs_schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
var ScoreCalculatorService_1, _a, _b, _c, _d, _e, _f, _g, _h, _j;














/**
 * baseScore = biasFactor * (postiveBiasCount + negativeBiasCount) + shareFactor * shareCount + likeFactor * likeCount + stopFactor * stopSecondsTotal + saveFactor * saveCount - skipFactor * skipCount;
 * calculatedScore = Math.round((baseScore / Math.pow(ageInHours + 2, timeDecayFactor)) * 1000000) / 1000000;
 */
let ScoreCalculatorService = ScoreCalculatorService_1 = class ScoreCalculatorService {
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
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](ScoreCalculatorService_1.name);
    }
    calculateScore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.logger.log('Calculating score...');
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
                        .filter((val) => { var _a, _b; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = article._id) === null || _b === void 0 ? void 0 : _b.toString()); })
                        .forEach((result) => {
                        data.saveCount = data.saveCount + result.count;
                    });
                    likes
                        .filter((val) => { var _a; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === article._id.toString(); })
                        .forEach((result) => {
                        data.likeCount = data.likeCount + result.count;
                    });
                    shares
                        .filter((val) => { var _a, _b; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = article._id) === null || _b === void 0 ? void 0 : _b.toString()); })
                        .forEach((result) => {
                        data.shareCount = data.shareCount + result.count;
                    });
                    votes
                        .filter((val) => { var _a, _b; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = article._id) === null || _b === void 0 ? void 0 : _b.toString()); })
                        .forEach((result) => {
                        data.votingCount = data.votingCount + result.count;
                    });
                    skips
                        .filter((val) => { var _a, _b; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = article._id) === null || _b === void 0 ? void 0 : _b.toString()); })
                        .forEach((result) => {
                        data.skipCount = data.skipCount + result.count;
                    });
                    stops
                        .filter((val) => { var _a, _b; return ((_a = val._id.article) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = article._id) === null || _b === void 0 ? void 0 : _b.toString()); })
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
                this.logger.log('Scores updated...');
                this.calculateTrendingScore(articles, weights);
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    calculateTrendingScore(articles, weights) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.logger.log('Calculating TRENDING score...');
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
                this.logger.log('Trending scores updated...');
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_schedule__WEBPACK_IMPORTED_MODULE_3__["Cron"])('*/10 * * * *'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ScoreCalculatorService.prototype, "calculateScore", null);
ScoreCalculatorService = ScoreCalculatorService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_endpoints_articles_schemas_article_schema__WEBPACK_IMPORTED_MODULE_6__[/* Article */ "a"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__[/* WeightsService */ "a"] !== "undefined" && _endpoints_weights_weights_service__WEBPACK_IMPORTED_MODULE_13__[/* WeightsService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _b : Object, typeof (_c = typeof _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__[/* ArticlesService */ "a"] !== "undefined" && _endpoints_articles_article_service__WEBPACK_IMPORTED_MODULE_5__[/* ArticlesService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__[/* BookmarksService */ "a"] !== "undefined" && _endpoints_bookmarks_bookmarks_service__WEBPACK_IMPORTED_MODULE_7__[/* BookmarksService */ "a"]) === "function" ? _d : Object, typeof (_e = typeof _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__[/* LikesService */ "a"] !== "undefined" && _endpoints_likes_likes_service__WEBPACK_IMPORTED_MODULE_8__[/* LikesService */ "a"]) === "function" ? _e : Object, typeof (_f = typeof _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__[/* SharesService */ "a"] !== "undefined" && _endpoints_shares_shares_service__WEBPACK_IMPORTED_MODULE_9__[/* SharesService */ "a"]) === "function" ? _f : Object, typeof (_g = typeof _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__[/* VotesService */ "a"] !== "undefined" && _endpoints_votes_votes_service__WEBPACK_IMPORTED_MODULE_12__[/* VotesService */ "a"]) === "function" ? _g : Object, typeof (_h = typeof _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__[/* SkipsService */ "a"] !== "undefined" && _endpoints_skips_skips_service__WEBPACK_IMPORTED_MODULE_10__[/* SkipsService */ "a"]) === "function" ? _h : Object, typeof (_j = typeof _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__[/* StopsService */ "a"] !== "undefined" && _endpoints_stops_stops_service__WEBPACK_IMPORTED_MODULE_11__[/* StopsService */ "a"]) === "function" ? _j : Object])
], ScoreCalculatorService);



/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__[/* AppModule */ "a"]);
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


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map