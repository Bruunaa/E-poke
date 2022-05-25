import { Component, Input, OnInit } from '@angular/core';
import { get } from 'http';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/shard/services/pokemon/pokemon.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .subscribe((result: any) => {
      console.log(result); 
      
    });
}
}
