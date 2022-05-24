import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/shard/services/pokemon/pokemon.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  resultados: Pokemon[] = [];

  constructor(private api: PokemonService) { }

  ngOnInit(): void {
    this.api.getPokemons();
    this.resultados = this.api.pokemons;
  }
}

