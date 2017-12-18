import { Component } from '@angular/core';

const patternForNum = /[0-9]/;
const patternForChar = /[a-z,A-z]/;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbPaginationConfig]
})
export class AppComponent {
    title = 'app';
    editMode: boolean = false;
    saveButton: boolean = true;
    editName: string;
    editAuthors: string;
    editPages: string;
    editDate: Date;
    authorId: number;

    ngOnInit() {
        this.inputChanged();
    }
	
    booksDetail = [
        {
           id:"0", name: "my", authors: "abc",  pages: "12", date: new Date(),
        }, {
           id: "1",name: "my1", authors: "abc", pages: "12", date: new Date(),
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
        }];


    editValues(value) {
        this.editMode = true;
        this.authorId = value.id;
        this.editName = value.name;
        this.editAuthors = value.authors;
        this.editPages = value.pages;
        this.editDate = value.date;
    }

    cancelEdit() {
        this.editMode = false;
    }

    saveValues(id) {
        this.booksDetail[id].name = this.editName;
        this.booksDetail[id].authors = this.editAuthors;
        this.booksDetail[id].pages = this.editPages;
        this.booksDetail[id].date = this.editDate;
        this.editMode = false;
    }

    getDate(newValue) {
        this.editDate = newValue.currentTarget.value;
        this.inputChanged();
    }

    inputChanged() {
        if (!this.editName || !this.editAuthors || !this.editPages || !this.editDate) {
            this.saveButton = true;
        }
        else {
            this.saveButton = false;
        }
    }

    _keyPress(event: any) {
        let inputChar = String.fromCharCode(event.charCode);
        if (!patternForNum.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }

    _keyPressForChar(event: any) {
        let inputForChar = String.fromCharCode(event.charCode);
        if (!patternForChar.test(inputForChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }

}
