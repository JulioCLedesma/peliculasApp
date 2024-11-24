import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MoviesComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'peliculasApp';
  correo = 'julio.ledesma@udgvirtual.udg.mx';
  isHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = this.router.url === '/';
      }
    });
  }
}
