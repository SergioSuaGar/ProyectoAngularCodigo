import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'} ,
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true }), CommonModule],
  declarations: []
})
export class AppRoutingModule {}
