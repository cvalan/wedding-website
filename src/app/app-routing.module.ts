import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TravelComponent } from './components/travel/travel.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { ErrorComponent } from './common/404/404.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: AboutComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'wedding-party', component: WeddingPartyComponent },
  { path: '404', component: ErrorComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'rsvp', component: ContactComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
