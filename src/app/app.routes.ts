import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './posts/post.component';
import { CanActivateRoute } from './guards/canActivateRoute'
import { RestrictedComponent } from './shared/restricted/restricted.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [CanActivateRoute] },
  { path: 'posts', component: PostComponent, canActivate: [CanActivateRoute] },
  { path: 'restrict', component: RestrictedComponent },
  {
    path: 'github', component: RepoBrowserComponent, canActivate: [CanActivateRoute],
    children: [
      { path: '', component: RepoListComponent },
      {
        path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
];

