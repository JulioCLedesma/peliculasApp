import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})


export class MovieComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    
    if (movieId) {
      this.moviesService.getMovieById(movieId).subscribe(data => {
        this.movie = data;
      });
    }
  }
}
