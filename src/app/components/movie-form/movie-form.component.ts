import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { MovieFacade } from '../../facades/movie.facade';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFormComponent implements OnInit, OnChanges {
  @Input() movie: Movie;

  formGroup: FormGroup;
  userName$: Observable<string>;
  isDeleted = false;

  constructor(private fb: FormBuilder, private movieFacade: MovieFacade) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: this.movie?.title,
      year: this.movie?.year,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movie && this.formGroup && this.movie) {
      this.formGroup.setValue({
        title: this.movie.title,
        year: this.movie.year,
      });

      this.userName$ = this.movieFacade
        .getUser(this.movie.userId)
        .pipe(map((i) => i.name));
    }
  }

  save() {
    const saveMovie: Movie = this.formGroup.value;
    this.movieFacade
      .save({
        ...this.movie,
        title: saveMovie.title,
        year: saveMovie.year,
      })
      .subscribe();
  }

  cancel() {}

  markDeleted(isDeleted: boolean) {
    this.isDeleted = isDeleted;
  }
}
