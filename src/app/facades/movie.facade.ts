import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movie } from '../models/movie.model';

import { MovieService } from '../services/movie.service';

@Injectable({ providedIn: 'root' })
export class MovieFacade {
  movieList$ = this.movieService.getList();
  movies2000$ = this.movieList$.pipe(
    map((i) => i.filter((j) => j.year > 2000))
  );

  constructor(private movieService: MovieService) {}

  getList(term: string) {
    return this.movieService.getList(term);
  }

  save(movie: Movie) {
    return this.movieService.save(movie);
  }

  delete(id: number) {
    return this.movieService.delete(id);
  }

  getUser(id: number) {
    return this.movieService.getUser(id);
  }
}
