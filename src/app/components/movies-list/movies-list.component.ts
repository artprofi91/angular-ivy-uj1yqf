import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieFormComponent } from '..';
import { MovieFacade } from '../../facades/movie.facade';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent implements OnInit {
  @ViewChild(MovieFormComponent)
  formComponent: MovieFormComponent;

  movies: Movie[] = [];
  selectedMovie: Movie;
  movieCount: number;

  constructor(private movieFacade: MovieFacade) {}

  ngOnInit(): void {
    // this.formComponent.markDeleted(false);

    this.movieFacade.movieList$.subscribe((i) => (this.movies = i));
  }

  getMovieTitle(movie: Movie) {
    const yearsOld = new Date().getFullYear() - movie.year;
    return `${movie.title} ${yearsOld}`;
  }

  open(movie: Movie) {
    this.selectedMovie = movie;
  }

  delete(id: number) {
    this.movieFacade
      .delete(id)
      .subscribe((i) =>
        this.formComponent.markDeleted(id == this.selectedMovie.id)
      );
  }
}
