import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
    movie = {
      title: '',
      year: '',
      synopsis: '',
      cover: ''
    };
    movieId: string | null = '';

    constructor(private moviesService: MoviesService, private router: Router) {}


    
    addMovie() {
      console.log('Adding movie:', this.movie);
      this.moviesService.addMovie(this.movie).subscribe({
        next: () => {
          console.log('Movie added successfully!');
          this.router.navigate(['/movies']);
        },
        error: (error) => console.error('Error adding movie:', error)
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
