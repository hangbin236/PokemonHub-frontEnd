import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../services/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  
  currentAllPokemons: Pokemon[];
  Message: string= "";
 
  constructor(private pokemonService: PokemonService, private router: Router) { 
    this.currentAllPokemons = [];
  }

  ngOnInit(): void {
    this.loadAllPokemon();
  }

  loadAllPokemon(){
    this.pokemonService.getAllPokemons().subscribe(
    {
      next: (Response) => {
        console.log(Response);
        this.Message = '';
        this.currentAllPokemons = Response;
      },
      error:(error) =>{
        console.log(error.error.errorMessage);
        this.Message = error.error.errorMessage;
      }
          
    });
  }
}
