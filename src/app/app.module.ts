
// Modules 

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgSemanticModule } from 'ng-semantic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { RegisterModule } from './register/register.module';
// import { Ng2BootstrapModule,DatepickerModule, AlertModule,ModalModule,TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

// Components 

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post.component';
import { RestrictedComponent } from './shared/restricted/restricted.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './shared/nav/nav.component';

// Services

import { PostService } from './posts/post.service';
import { ObserveService } from './utility/observeservice';
import { UtilityService } from './utility/utilityservice';
import { ActionService } from './utility/action.service';
import { UserService } from './utility/user.service';
import { EventBusService } from './utility/eventbus.service'
import { TextSlicePipe } from './utility/length.pipe';
import { HttpClient } from './shared/customhttp.service';
import { CanActivateRoute } from './guards/canActivateRoute';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    PostComponent, TextSlicePipe,RestrictedComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    // DatepickerModule.forRoot(),
    // AlertModule.forRoot(),
    // ModalModule.forRoot(),
    // TypeaheadModule.forRoot(),
    // DropdownModule.forRoot()
    NgSemanticModule,
    SimpleNotificationsModule
    // RegisterModule
  ],
  providers: [
    GithubService, HttpClient, PostService,ObserveService, UtilityService, CanActivateRoute, UserService, ActionService,EventBusService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
