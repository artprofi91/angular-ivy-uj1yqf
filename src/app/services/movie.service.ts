import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

import { Movie } from '../models/movie.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private MOVIES: Movie[] = [
    { id: 1, title: 'The Godfather', year: 1972, userId: 1 },
    { id: 2, title: 'The Dark Knight', year: 2008, userId: 2 },
    { id: 3, title: 'Star Wars', year: 1977, userId: 2 },
    { id: 4, title: 'Avatar', year: 2009, userId: 1 },
    { id: 5, title: 'Twilight', year: 2008, userId: 1 },
    { id: 6, title: 'Mr. and Mrs. Smith', year: 2005, userId: 3 },
    { id: 7, title: 'The Hangover', year: 2009, userId: 3 },
    { id: 8, title: 'Million Dollar Baby', year: 2004, userId: 1 },
  ];

  private USERS: User[] = [
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'FOO' },
    { id: 3, name: 'BAR' },
  ];

  getList(term?: string): Observable<Movie[]> {
    return of(this.MOVIES).pipe(
      tap(() => (term ? console.log('getList', term) : console.log('getList'))),
      map((i) =>
        !!term
          ? i.filter((x) =>
              x.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
            )
          : i
      )
    );
  }

  save(movie: Movie): Observable<Movie> {
    console.log('save movie', movie);
    if (!movie.id) {
      const newMovie = { ...movie, id: Math.floor(Math.random() * 999999) };
      this.MOVIES.push(newMovie);
      return of(newMovie);
    }
    this.MOVIES = this.MOVIES.map((i) =>
      i.id === movie.id ? { ...i, ...movie } : i
    );

    return of(movie);
  }

  delete(id: number) {
    console.log('delete movie', id);
    this.MOVIES = this.MOVIES.filter((i) => i.id !== id);
    return of(id);
  }

  getUser(id: number): Observable<User> {
    return of(this.USERS.find((i) => i.id === id)).pipe(
      tap(() => console.log('getUser', id))
    );
  }
}
