import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './list-matches/list-matches.component';

const routes: Routes = [{ path: '', component: ListMatchesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
