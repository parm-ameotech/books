"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var patternForNum = /[0-9]/;
var patternForChar = /[a-z,A-z]/;
var AppComponent = (function () {
    function AppComponent(config) {
        this.title = 'app';
        this.editMode = false;
        this.saveButton = true;
        this.booksDetail = [
            {
                id: "0", name: "my", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "1", name: "my1", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "2", name: "my2", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "3", name: "my3", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "4", name: "my4", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "5", name: "my5", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "6", name: "my6", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "7", name: "my7", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "8", name: "my8", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "9", name: "my9", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "10", name: "my10", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "11", name: "my11", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "12", name: "my12", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "13", name: "my13", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "14", name: "my14", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "15", name: "my15", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "16", name: "my16", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "17", name: "my17", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "18", name: "my18", authors: "abc", pages: "12", date: new Date(),
            },
            {
                id: "19", name: "my19", authors: "abc", pages: "12", date: new Date(),
            }, {
                id: "20", name: "my20", authors: "abc", pages: "12", date: new Date(),
            }
        ];
        // customize default values of paginations used by this component tree
        config.size = 'sm';
        config.boundaryLinks = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.inputChanged();
    };
    AppComponent.prototype.editValues = function (value) {
        this.editMode = true;
        this.authorId = value.id;
        this.editName = value.name;
        this.editAuthors = value.authors;
        this.editPages = value.pages;
        this.editDate = value.date;
    };
    AppComponent.prototype.cancelEdit = function () {
        this.editMode = false;
    };
    AppComponent.prototype.saveValues = function (id) {
        this.booksDetail[id].name = this.editName;
        this.booksDetail[id].authors = this.editAuthors;
        this.booksDetail[id].pages = this.editPages;
        this.booksDetail[id].date = this.editDate;
        this.editMode = false;
    };
    AppComponent.prototype.getDate = function (newValue) {
        this.editDate = newValue.currentTarget.value;
        this.inputChanged();
    };
    AppComponent.prototype.inputChanged = function () {
        if (!this.editName || !this.editAuthors || !this.editPages || !this.editDate) {
            this.saveButton = true;
        }
        else {
            this.saveButton = false;
        }
    };
    AppComponent.prototype._keyPress = function (event) {
        var inputChar = String.fromCharCode(event.charCode);
        if (!patternForNum.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    AppComponent.prototype._keyPressForChar = function (event) {
        var inputForChar = String.fromCharCode(event.charCode);
        if (!patternForChar.test(inputForChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [ng_bootstrap_1.NgbPaginationConfig]
    })
], AppComponent);
exports.AppComponent = AppComponent;
