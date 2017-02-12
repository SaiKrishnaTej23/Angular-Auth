import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksAddComponent } from './booksadd.component';
import { BooksEditComponent } from './booksedit.component';
import { BooksListComponent } from './bookslist.component';

const routes: Routes = [
  {
    path: '', component: BooksComponent, children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: BooksListComponent },
      { path: 'edit/:id', component: BooksEditComponent },
      { path: 'add', component: BooksAddComponent }

    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }

export const routedComponents = [BooksComponent,BooksListComponent,BooksEditComponent,BooksAddComponent];