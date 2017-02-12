import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Book } from './books';


@Injectable()
export class BooksService {

    private ipAddress: string;
    private baseUrl: string;
    private loggedIn = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        this.ipAddress = 'localhost';
        this.baseUrl = 'http://localhost:8080/api/';
    }

    addbook(book: Book) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        return this.http.post('http://' + this.ipAddress.toString() + ':8080/api/addbook/', JSON.stringify({ book }), { headers })
            .map((x) => x.json())
            .map((x) => {
                return x;
            });
    }

    getAllBooks() {
        return this.http.get(this.baseUrl + 'books/').map((res) => res.json() as Book[]);
    }

    getSpecificBook(bookId: number) {
        return this.http.get(this.baseUrl + 'books/' + bookId.toString()).map((res) => res.json() as Book);
    }

    editBook(book: Book) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        return this.http.post(this.baseUrl + 'editbook/', JSON.stringify({ book }), { headers })
            .map((x) => x.json())
            .map((x) => {
                return x;
            });
    }

    deleteBook(book: Book) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')       
        return this.http.post(this.baseUrl + 'deletebook/', JSON.stringify({ book }), { headers })
            .map((x) => x.json())
            .map((x) => {
                return x;
            });
    }
}