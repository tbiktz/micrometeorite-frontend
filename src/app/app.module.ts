import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from './shared/shared.module';
import { FindingsModule } from './findings/findings.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIClientModule } from './api';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpRequestInterceptor } from './shared/Interceptors/http-request.interceptor';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    APIClientModule.forRoot({
      domain: 'https://micrometeorite-rest-api.herokuapp.com/micrometeorite/api/v1/'
    }),
    HomeModule,
    FindingsModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
