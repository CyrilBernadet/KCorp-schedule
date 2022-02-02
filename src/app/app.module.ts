import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitHttpInterceptor } from './interceptors/http.interceptor';
import { ListMatchesComponent } from './list-matches/list-matches.component';

@NgModule({
  declarations: [AppComponent, ListMatchesComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: VitHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
