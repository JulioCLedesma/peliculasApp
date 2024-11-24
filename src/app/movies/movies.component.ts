import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, RouterModule, AsyncPipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  correo = 'julio.ledesma@udgvirtual.udg.mx';
  private readonly moviesSvc = inject(MoviesService)
  movies$ = this.moviesSvc.getAllMovies();
}