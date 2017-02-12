import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule,routedComponents } from './post.route';
import { PostService } from './post.service';
import { NgSemanticModule } from 'ng-semantic';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [PostRoutingModule,FormsModule, ReactiveFormsModule,CommonModule,NgSemanticModule, SharedModule],
    exports: [],
    declarations: [routedComponents],
    providers: [PostService],
})
export class PostModule { }
