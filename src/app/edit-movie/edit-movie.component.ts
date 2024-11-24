import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})


export class EditMovieComponent {
  movie: any = {};

  movieId: string | null = '';
  
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovieById(id).subscribe((data) => {
      this.movie = data;
    });
  }

  updateMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.updateMovie(id, this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
  
  cancel() {
    if (this.movieId) {
      this.router.navigate(['/movie', this.movieId]);
    } else {
      this.router.navigate(['/movies']);
    }
  }
}
