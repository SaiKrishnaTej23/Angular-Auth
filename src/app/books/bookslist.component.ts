import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Book } from './books';
import { UserService } from '../utility/user.service';
import { BooksService } from '../books/books.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: '<books-list>',
    templateUrl: 'bookslist.component.html',
    styleUrls: ['bookslist.component.css']
})


export class BooksListComponent implements OnInit {
    constructor(private usrService: UserService, private router: Router, private booksService: BooksService
        , private notify: NotificationsService) { }

    books: Book[];
    book: Book;

    deleteBook(book: Book) {
        this.book = book;
        this.book.IsActive = false;
        this.booksService.deleteBook(book).subscribe((res) => {
            if (res.success) {
                for (var i = 0; i < this.books.length; i++) {
                    if (this.books[i].Id == book.Id) {
                        this.books.splice(i, 1);                        
                    }
                }
            }
            this.notify.success(res.message, "Hope you add this later...");
        });
        this.router.navigateByUrl('/books/list');
    }
    predicatBy(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }

    ngOnInit() {
        this.booksService.getAllBooks().subscribe((res) => {
            this.books = res.sort(this.predicatBy("Id"));
        });
    }

}