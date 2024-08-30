import { Component, OnInit } from '@angular/core';
import { ConexionService } from './conexion.service';


interface Comic {
  name: string;
  resourceURI: string;
}

interface Series {
  name: string;
  resourceURI: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: {
    available: number;
    items: Comic[];
  };
  series: {
    available: number;
    items: Series[];
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  characters: Character[] = [];
  error: string | null = null;

  constructor(private ConexionService: ConexionService) {}

  ngOnInit(): void {
    this.ConexionService.obtenerDatos().subscribe(
      (data) => {
        this.characters = data;
      },
      (error) => {
        this.error = 'Error al cargar los personajes.';
      }
    );
  }
}
