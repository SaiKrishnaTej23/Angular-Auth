import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { AddPostComponent } from './addpost.component';
import { PostEntryComponent } from './postentry.component';

const routes: Routes = [
  { path: '', component: PostEntryComponent , children:[
        {path:'', component: PostComponent},
        { path: 'add', component: AddPostComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule { }

export const routedComponents = [PostComponent,AddPostComponent,PostEntryComponent];