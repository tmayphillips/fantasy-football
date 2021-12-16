import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlotComponent } from './plot/plot.component';

const routes: Routes = [
  { path: '', component: PlayerSearchComponent },
  { path: 'details/:playerID', component: PlotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
