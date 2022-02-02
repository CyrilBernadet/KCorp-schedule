import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitHttpInterceptor } from './interceptors/http.interceptor';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { CsgoMatchDetailsComponent } from './match-details/csgo-match-details/csgo-match-details.component';
import { LolMatchDetailsComponent } from './match-details/lol-match-details/lol-match-details.component';
import { R6sMatchDetailsComponent } from './match-details/r6s-match-details/r6s-match-details.component';
import { RlMatchDetailsComponent } from './match-details/rl-match-details/rl-match-details.component';
import { ValorantMatchDetailsComponent } from './match-details/valorant-match-details/valorant-match-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMatchesComponent,
    LolMatchDetailsComponent,
    CsgoMatchDetailsComponent,
    R6sMatchDetailsComponent,
    RlMatchDetailsComponent,
    ValorantMatchDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: VitHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
