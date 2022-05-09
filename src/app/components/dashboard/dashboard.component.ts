import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieFacade } from '../../facades/movie.facade';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  search$: Observable<Movie[]>;

  constructor(private movieFacade: MovieFacade) {}

  search(term: string): void {}
}
