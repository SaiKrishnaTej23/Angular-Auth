import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent }   from './login.component';
import { LoginRoutingModule,routedComponents } from './login.route';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
