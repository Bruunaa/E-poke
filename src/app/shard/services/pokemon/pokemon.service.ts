import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  
  constructor(private http: HttpClient) { }


  

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=5`); 
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`); 
  }
}