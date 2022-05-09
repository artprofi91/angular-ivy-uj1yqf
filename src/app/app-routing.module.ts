import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashboardComponent,
  MovieFormComponent,
  MoviesListComponent,
} from './components';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie/:id', component: MovieFormComponent },
  { path: 'moviesList', component: MoviesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
