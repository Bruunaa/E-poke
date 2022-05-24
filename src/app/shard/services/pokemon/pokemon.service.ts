import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/?offset=-0&limit=50';
  constructor(private http: HttpClient) {}

  pokemons: Pokemon[] = [];

  getPokemons() {
    return this.http
      .get<any>(this.url)
      .pipe(
        map((value) => value.results),
        map((results: any) => {
          //From converte outros objetos e tipos de dados em um observable, podendo der um objeto iterável em um observable q
          return from(results).pipe(mergeMap((v: any) => this.http.get(v.url)));
        }),
        mergeMap((value) => value)
      )
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          imagem: result.sprites.front_default,
          number: result.id,
          name: result.name,
          types: result.types.map((t: any) => t.type.name),
        };
        this.pokemons[result.id] = pokemon;
      });
  }
}