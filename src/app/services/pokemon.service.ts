import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = "http://localhost:7474/api/allpokemons";
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.baseUrl);
  }
}
