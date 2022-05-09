import { Component, Input } from '@angular/core';
import { map } from 'rxjs';

import { MovieFacade } from '../../facades/movie.facade';

@Component({
  selector: 'app-movies-2000s',
  templateUrl: './movies-2000s.component.html',
})
export class Movies2000sComponent {
  @Input() count = 3;

  movies2000$ = this.movieFacade.movies2000$.pipe(
    map((i) => i.slice(0, this.count))
  );

  constructor(private movieFacade: MovieFacade) {}
}
