import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BooksRoutingModule, routedComponents } from './books.routing';
import { UserService } from '../utility/user.service';
import { BooksService } from '../books/books.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BooksRoutingModule, FormsModule, ReactiveFormsModule,CommonModule, SharedModule ],
    exports: [],
    declarations: [routedComponents],
    providers: [UserService, BooksService],
})
export class BooksModule { }
