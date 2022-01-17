import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { ErrorComponent } from './common/404/404.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RegistryComponent } from './components/registry/registry.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppHeaderComponent } from './common/header/app.header.component';
import { AppFooterComponent } from './common/footer/app.footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import {NgxTypedJsModule} from '../assets/js/ngx-typed-js/src/lib/ngx-typed-js.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    PicturesComponent,
    WeddingPartyComponent,
    ErrorComponent,
    ContactComponent,
    ScheduleComponent,
    RegistryComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NgxTypedJsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    EmailService,
  ],
  bootstrap: [AppComponent, AppHeaderComponent, AppFooterComponent],
})
export class AppModule {}
