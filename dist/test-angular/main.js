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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand text-info\" routerLink=\"\">Banyan Hill Test</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/postslist\" routerLinkActive=\"active\"> Posts List </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/newpost\" routerLinkActive=\"active\">New Post</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/posts-list/posts-list.component */ "./src/app/components/posts-list/posts-list.component.ts");
/* harmony import */ var _services_posts_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/posts-list.service */ "./src/app/services/posts-list.service.ts");
/* harmony import */ var _components_posts_comments_posts_comments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/posts-comments/posts-comments.component */ "./src/app/components/posts-comments/posts-comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"] },
    { path: 'postslist', component: _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"] },
    { path: 'newpost', component: _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_9__["NewpostComponent"] },
    { path: 'postcomment/:id', component: _components_posts_comments_posts_comments_component__WEBPACK_IMPORTED_MODULE_12__["PostsCommentsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_9__["NewpostComponent"],
                _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"],
                _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"],
                _components_posts_comments_posts_comments_component__WEBPACK_IMPORTED_MODULE_12__["PostsCommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__["Angular2FontawesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_services_posts_list_service__WEBPACK_IMPORTED_MODULE_11__["PostsListService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertConfig"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/newpost/newpost.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/newpost/newpost.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/newpost/newpost.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/newpost/newpost.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"jumbotron\" style=\"width: 90%; margin-top: 10px !important; padding: 20px !important;\">\n\n            <form (ngSubmit)=\"insertPost(PostData);\" #formNewPost=\"ngForm\">\n\n                <div class=\"modal-header text-center\">\n                    <h3>Add New Post</h3>\n                    <h4 class=\"pull-right\" [hidden]=\"!inserted\">Record ID: <span class=\"badge badge-primary\">{{PostData.id}}</span></h4>\n                </div>\n\n                <input type=\"hidden\" value=\"{{PostData.userId}}\"  name=\"userId\" [(ngModel)]=\"PostData.userId\"/>\n                \n                <div class=\"row\">\n\n                    <div class=\"col-lg-4 col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"recipient-name\" class=\"col-form-label font-weight-bold\">User ID:</label>\n                            <select class=\"form-control\" value=\"{{PostData.userId}}\" name=\"userId\" [(ngModel)]=\"PostData.userId\">\n                                <option name=\"user\" value=\"1\">1</option>\n                                <option name=\"user\" value=\"2\">2</option>\n                                <option name=\"user\" value=\"3\">3</option>\n                                <option name=\"user\" value=\"4\">4</option>\n                                <option name=\"user\" value=\"5\">5</option>\n                            </select>\n                          </div>\n                    </div>\n\n                    <div class=\"col-lg-8 col-md-8\">\n                        <div class=\"form-group\">\n                          <label for=\"recipient-name\" class=\"col-form-label font-weight-bold\">Title:</label>\n                          <input type=\"text\" class=\"form-control\" value=\"{{PostData.title}}\" name=\"title\" [(ngModel)]=\"PostData.title\" required>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"message-text\" class=\"col-form-label font-weight-bold\">Body:</label>\n                    <textarea class=\"form-control\" id=\"message-text\" rows=\"5\" name=\"body\" [(ngModel)]=\"PostData.body\" required>{{body}}</textarea>\n                </div>\n\n                <div class=\"modal-footer\">\n                    <div class=\"alert alert-primary text-center\" style=\"width: 100%;\"  [hidden]=\"!inserted\">\n                      Post saved successful!.\n                      <br>\n                      <button type=\"button\" class=\"btn btn-secondary btn-sm text-center\" (click)=\"confirmIns()\"><i class=\"fas fa-check\"></i></button>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formNewPost.form.valid\" [hidden]=\"inserted\"><i class=\"fa fa-save\"></i></button>\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"confirmIns()\"[hidden]=\"inserted\" ><i class=\"fas fa-sign-out-alt\"></i>\"</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/newpost/newpost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/newpost/newpost.component.ts ***!
  \*********************************************************/
/*! exports provided: NewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpostComponent", function() { return NewpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_posts_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts-list.service */ "./src/app/services/posts-list.service.ts");
/* harmony import */ var _models_post_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/post-details */ "./src/app/models/post-details.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewpostComponent = /** @class */ (function () {
    function NewpostComponent(srvPosts, modalService, router) {
        this.srvPosts = srvPosts;
        this.modalService = modalService;
        this.router = router;
        this.PostData = new _models_post_details__WEBPACK_IMPORTED_MODULE_3__["PostDetails"];
        this.inserted = false;
    }
    NewpostComponent.prototype.ngOnInit = function () {
    };
    //  insertPost(post: any) {
    //    console.log(post);
    //    if (this.srvPosts.insertPost(post)) {
    //      this.inserted = true;
    //
    //      console.log('Record Inserted')
    //    } else {
    //      this.inserted = false;
    //    }
    //};
    NewpostComponent.prototype.insertPost = function (post) {
        var _this = this;
        this.srvPosts.insertPost(post).subscribe(function (post) {
            console.log(post);
            _this.PostData.id = post.id;
            _this.inserted = true;
        }, function (err) {
            console.log(err);
        });
    };
    NewpostComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NewpostComponent.prototype.confirmIns = function () {
        this.inserted = false;
        this.router.navigateByUrl('/postslist');
    };
    ;
    NewpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newpost',
            template: __webpack_require__(/*! ./newpost.component.html */ "./src/app/components/newpost/newpost.component.html"),
            styles: [__webpack_require__(/*! ./newpost.component.css */ "./src/app/components/newpost/newpost.component.css")]
        }),
        __metadata("design:paramtypes", [_services_posts_list_service__WEBPACK_IMPORTED_MODULE_2__["PostsListService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewpostComponent);
    return NewpostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts-comments/posts-comments.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/posts-comments/posts-comments.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posts-comments/posts-comments.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/posts-comments/posts-comments.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"jumbotron\" style=\"width: 90%; margin-top: 10px !important; padding: 20px !important;\">    \n            <div class=\"list-group\">\n                <span class=\"list-group-item active\">\n                    <span class=\"list-group-item-heading\">\n                        <h4>Post Comments</h4>\n                        <h4 class=\"pull-right\">{{postId}}</h4>\n                    </span>\n                    \n                    <label class=\"list-group-item-text\" *ngFor=\"let itemm of postDet\"> {{itemm.title}}</label>\n                </span>\n                \n                <div class=\"panel-body\">\n                    <div class=\"list-group-item\" *ngFor=\"let item of commentList$ | async\" >\n                        <div class=\"row\">\n                            <div class=\"col-lg-2\" style=\"\"> <img src=\"../../images/bulldog.jpg\" width=\"100\" height=\"100\"></div>\n                            <div class=\"col-lg-10\" style=\"\">\n                                <div style=\"border-bottom: lavender solid 1px; margin-bottom: 10px;\"><strong>{{item.name}}</strong> <span>{{'  (' + item.email + ')'}}</span> <br> </div>\n                                <span>{{item.body}}</span>\n                            </div>\n                        </div>  \n                    </div>\n                </div>\n            </div>    \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/posts-comments/posts-comments.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/posts-comments/posts-comments.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostsCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsCommentsComponent", function() { return PostsCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_posts_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts-list.service */ "./src/app/services/posts-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsCommentsComponent = /** @class */ (function () {
    function PostsCommentsComponent(postsList, route) {
        this.postsList = postsList;
        this.route = route;
    }
    PostsCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //const queryParams = this.route.snapshot.queryParams
        var routeParams = this.route.snapshot.params;
        this.postId = routeParams.id;
        console.log(this.postId);
        this.commentList$ = this.postsList.getPostsListComments(this.postId);
        //this.postById$ = this.postsList.getPostsListById(this.postId);
        this.postsList.getPostsListById(this.postId)
            .subscribe(function (data) {
            _this.postDet = data;
            _this.postDet = Array.of(_this.postDet);
            console.log(_this.postDet);
        });
    };
    PostsCommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts-comments',
            template: __webpack_require__(/*! ./posts-comments.component.html */ "./src/app/components/posts-comments/posts-comments.component.html"),
            styles: [__webpack_require__(/*! ./posts-comments.component.css */ "./src/app/components/posts-comments/posts-comments.component.css")]
        }),
        __metadata("design:paramtypes", [_services_posts_list_service__WEBPACK_IMPORTED_MODULE_2__["PostsListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostsCommentsComponent);
    return PostsCommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/posts-list/posts-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/posts-list/posts-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posts-list/posts-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts-list/posts-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"jumbotron\" style=\"width: 90%; margin-top: 10px !important; padding: 20px !important;\">\n\n            <table class=\"table\" style=\"border: 1px solid grey;\">\n\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th colspan=\"4\" class=\"text-center\"> Posts List </th>\n                    </tr>\n                </thead>\n\n                <thead class=\"thead-dark\">\n                  <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">Title</th>\n                    <th scope=\"col\">Body</th>\n                    <th scope=\"col\">Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of dataList$ | async\">\n                    <th scope=\"row\">{{item.id}}</th>\n                    <td>{{item.title.substr(0, 25) + ' ...'}}</td>\n                    <td>{{item.body.substr(0, 40) + ' ...'}}</td>\n                        <td>\n                            <span class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"showRecordModal(item, updatePostModal )\"><i class=\"fas fa-edit \"></i></span>\n                            <span class=\"btn btn-warning btn-sm\" type=\"button\" routerLink=\"/postcomment/{{item.id}}\" ><i class=\"fas fa-comments \"></i></span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n\n\n<ng-template #updatePostModal let-c=\"close\" let-d=\"dismiss\">\n\n    <!-- Modal -->\n    \n    <div class=\"modal-dialog form-control\" role=\"document\" style=\"width: 95% !important; height: 95% !important;\">\n        <div class=\"modal-content form-control\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title font-weight-bold\" id=\"exampleModalLabel\">Edit Post</h5>\n                <h5><span class=\"badge badge-primary\">{{post.id}}</span></h5>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <input type=\"hidden\" value=\"{{post.userId}}\" name=\"userId\" [(ngModel)]=\"post.userId\"/>\n                    <input type=\"hidden\" value=\"{{post.id}}\" name=\"id\" [(ngModel)]=\"post.id\"/>\n\n                    <div class=\"form-group\">\n                        <label for=\"recipient-name\" class=\"col-form-label font-weight-bold\">Title:</label>\n                        <input type=\"text\" class=\"form-control\" value=\"{{post.title}}\" name=\"title\" [(ngModel)]=\"post.title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"message-text\" class=\"col-form-label font-weight-bold\">Body:</label>\n                        <textarea class=\"form-control\" id=\"message-text\" rows=\"5\" name=\"body\" [(ngModel)]=\"post.body\">{{post.body}}</textarea>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"alert alert-primary text-center\" style=\"width: 100%;\"  [hidden]=\"!postUpdated\">\n                    Post has been updated.\n                    <br>\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm text-center\" (click)=\"confirmUpd()\"><i class=\"fas fa-check\"></i></button>\n                </div>\n\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"updatePost(post)\" [hidden]=\"postUpdated\"><i class=\"fa fa-save\"></i></button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\"[hidden]=\"postUpdated\" ><i class=\"fas fa-sign-out-alt\"></i>\"</button>\n            </div>\n        </div>\n    </div>\n    \n</ng-template>"

/***/ }),

/***/ "./src/app/components/posts-list/posts-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/posts-list/posts-list.component.ts ***!
  \***************************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts-list.service */ "./src/app/services/posts-list.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsListComponent = /** @class */ (function () {
    function PostsListComponent(postsList, modalService) {
        this.postsList = postsList;
        this.modalService = modalService;
        this.postUpdated = false;
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.dataList$ = this.postsList.getPostsList();
    };
    PostsListComponent.prototype.showRecordModal = function (post, modal) {
        var _this = this;
        this.post = post;
        this.modalService.open(modal).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PostsListComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PostsListComponent.prototype.updatePost = function (post) {
        if (this.postsList.updatePost(post)) {
            this.postUpdated = true;
            console.log('Record Updated');
        }
        else {
            this.postUpdated = false;
        }
    };
    ;
    PostsListComponent.prototype.confirmUpd = function () {
        this.postUpdated = false;
    };
    ;
    PostsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts-list',
            template: __webpack_require__(/*! ./posts-list.component.html */ "./src/app/components/posts-list/posts-list.component.html"),
            styles: [__webpack_require__(/*! ./posts-list.component.css */ "./src/app/components/posts-list/posts-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_posts_list_service__WEBPACK_IMPORTED_MODULE_1__["PostsListService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], PostsListComponent);
    return PostsListComponent;
}());



/***/ }),

/***/ "./src/app/models/post-details.ts":
/*!****************************************!*\
  !*** ./src/app/models/post-details.ts ***!
  \****************************************/
/*! exports provided: PostDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetails", function() { return PostDetails; });
var PostDetails = /** @class */ (function () {
    function PostDetails() {
    }
    return PostDetails;
}());



/***/ }),

/***/ "./src/app/services/posts-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/posts-list.service.ts ***!
  \************************************************/
/*! exports provided: PostsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListService", function() { return PostsListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PostsListService = /** @class */ (function () {
    function PostsListService(http) {
        this.http = http;
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts/";
    }
    PostsListService.prototype.getPostsList = function () {
        return this.http.get(this.apiUrl);
    };
    PostsListService.prototype.getPostsListById = function (id) {
        return this.http.get(this.apiUrl + id);
    };
    PostsListService.prototype.getPostsListComments = function (id) {
        return this.http.get(this.apiUrl + id + '/comments');
    };
    PostsListService.prototype.insertPost = function (dataPost) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiUrl, dataPost, options);
    };
    PostsListService.prototype.deletePost = function () { };
    PostsListService.prototype.updatePost = function (dataPost) {
        console.log(dataPost);
        var data = JSON.stringify(dataPost);
        console.log('UPDATE');
        console.log(data);
        return this.http.put(this.apiUrl + dataPost.id, data, httpOptions);
    };
    PostsListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsListService);
    return PostsListService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\inetpub\wwwroot\test-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map