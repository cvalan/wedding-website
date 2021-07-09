import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TravelComponent } from './components/travel/travel.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './common/404/404.component';
import { BlogDetailComponent } from './components/blog-detail/blogdetail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: AboutComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'wedding-party', component: BlogComponent },
  { path: '404', component: ErrorComponent },
  { path: 'schedule', component: BlogDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegisterComponent },
  { path: 'rsvp', component: ContactComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
