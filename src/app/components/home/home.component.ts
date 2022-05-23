import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imagem: string = "https://gamersrd.com/wp-content/uploads/2019/11/Pokemon-Top-5-juegos.jpg";
    imagem2: string = "https://gamersrd.com/wp-content/uploads/2019/11/Pokemon-Top-5-juegos.jpg";
    imagem3: string = "https://gamersrd.com/wp-content/uploads/2019/11/Pokemon-Top-5-juegos.jpg";
    imagem4: string = "https://static6.minhalojanouol.com.br/pokestoprodutos/produto/20220201112202_5399994601_D.jpg";

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
