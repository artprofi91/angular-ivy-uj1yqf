import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardComponent,
  MoviesListComponent,
  MovieFormComponent,
  Movies2000sComponent,
} from './components';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesListComponent,
    MovieFormComponent,
    Movies2000sComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
