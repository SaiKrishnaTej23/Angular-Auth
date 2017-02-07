import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule,routedComponents } from './profile.route';
@NgModule({
    imports: [ProfileRoutingModule,CommonModule,FormsModule,ReactiveFormsModule],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})
export class ProfileModule { }
