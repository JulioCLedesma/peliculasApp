import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 // private readonly _http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, movie);
  }

  deleteMovie(movieId: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/movies/${movieId}`);
  }
}
