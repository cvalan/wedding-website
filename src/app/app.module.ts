import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/services/service.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './common/404/404.component';
import { BlogDetailComponent } from './components/blog-detail/blogdetail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppHeaderComponent } from './common/header/app.header.component';
import { AppFooterComponent } from './common/footer/app.footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NgxTypedJsModule} from '../assets/js/ngx-typed-js/src/lib/ngx-typed-js.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PicturesComponent,
    BlogComponent,
    ErrorComponent,
    ContactComponent,
    BlogDetailComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule
   // NgxTypedJsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent, AppHeaderComponent, AppFooterComponent]
})
export class AppModule {
}
