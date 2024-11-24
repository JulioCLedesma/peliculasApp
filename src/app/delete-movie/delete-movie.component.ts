import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-delete-movie',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delete-movie.component.html',
  styleUrl: './delete-movie.component.css',
})
export class DeleteMovieComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.moviesService.getMovieById(movieId).subscribe((data) => {
        this.movie = data;
      });
    }
  }

  deleteMovie(): void {
    if (confirm(`¿Estás seguro de eliminar la película: ${this.movie.title}?`)) {
      this.moviesService.deleteMovie(this.movie.id).subscribe(() => {
        alert('Película eliminada con éxito.');
        this.router.navigate(['/movies']);
      });
    }
  }
}

