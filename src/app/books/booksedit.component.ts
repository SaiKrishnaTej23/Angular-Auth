import { Component, OnInit } from '@angular/core';
import { } from "@angular/router";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Book } from './books';
import { UserService } from '../utility/user.service';
import { BooksService } from '../books/books.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
    selector: '<books-edit>',
    templateUrl: 'booksedit.component.html'
})
export class BooksEditComponent implements OnInit {
    constructor(private usrService: UserService, private router: Router, private booksService: BooksService
        , private notify: NotificationsService, private activatedRouteparam: ActivatedRoute) { }

    bookId: number;
    book: Book = new Book();

    getBookDetails(bookId: number) {
        this.booksService.getSpecificBook(this.bookId).subscribe((res) => {
            console.log("THis is from getBookDetails");
            console.log(res);
            this.book = res;
        });
    }

    editBook() {
        console.log(this.book);
        this.booksService.editBook(this.book).subscribe((res) => {
            console.log(res);
            this.notify.success(res.message, "see you later...");
            this.router.navigateByUrl('/books/list');
        });


    }


    ngOnInit() {
        this.activatedRouteparam.params.subscribe((params: Params) => { this.bookId = params["id"] });
        this.getBookDetails(this.bookId);
        this.book.Id = 0;
        this.book.Author = '';
        this.book.AddedBy = +localStorage.getItem('userId');
        this.book.Category = '';
        this.book.Description = '';
        this.book.IsActive = true;
        this.book.PhotoUrl = '';
        this.book.Tags = [];
        this.book.Title = '';
        this.book.AddedOn = '';

    }
}