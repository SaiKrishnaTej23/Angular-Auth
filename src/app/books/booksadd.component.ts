import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Book } from './books';
import { UserService } from '../utility/user.service';
import { BooksService } from '../books/books.service';
import { NotificationsService } from 'angular2-notifications';

@Component({

    selector: '<books-add>',
    templateUrl: 'booksadd.component.html'
})
export class BooksAddComponent implements OnInit {
    constructor(private usrService: UserService, private router: Router, private booksService: BooksService
        , private notify: NotificationsService) { }
    book: Book = new Book();
    date: Date = new Date();
    maxID: number = 0;
    ngOnInit() {
        this.book.Id = 0;
        this.book.Author = '';
        this.book.AddedBy = +localStorage.getItem('userId');
        this.book.Category = '';
        this.book.Description = '';
        this.book.IsActive = true;
        this.book.PhotoUrl = '';
        this.book.Tags = [];
        this.book.Title = '';
        this.book.AddedOn = this.date.getDate().toString();

    }
    
    AddBook() {
        this.booksService.getAllBooks().subscribe((books) => {
            let maxA: number[] = new Array<number>();
            books.forEach(element => {
                maxA.push(element.Id);
            });
            this.maxID = maxA.sort().reverse()[0] + 1;
            this.book.Tags = this.book.Tags.toString().split(",");
            this.book.AddedBy = +localStorage.getItem('userId');
            this.book.AddedOn = this.date.toString();
            this.book.Id = this.maxID;
            this.booksService.addbook(this.book).subscribe((res: any) => {
                this.notify.success(res.message, "Book Id : " + res.bookId);
                  this.router.navigateByUrl('/books/list');
            });
        })

    }
}