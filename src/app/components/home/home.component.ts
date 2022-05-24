import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagem: string = "https://jazwaresv2.s3.amazonaws.com/media/ATG002074_2022_POK_JazBanner.jpg";
  imagem2: string = "https://alltimelines.com/wp-content/uploads/2019/10/pokemongames-banner.jpg";
  imagem3: string = "https://gamersrd.com/wp-content/uploads/2019/11/Pokemon-Top-5-juegos.jpg";
  imagem4: string = "https://3.bp.blogspot.com/--__pYNgV-ms/VY9fFjhNjsI/AAAAAAAAb38/oUj3QSujBZQ/s1600/Dream_Pok%25C3%25A9_Ball_Sprite.png";
  imagem5: string = "https://1.bp.blogspot.com/-956bABkamzs/VydUlRHGesI/AAAAAAAApxU/cgzKTsqrgakWyodfRj6ZtDuVfsCZoGeUgCK4B/s1600/Dream_Water_Stone_Sprite.png";
  imagem6: string = "./assets/Imagens/Pokebolas/Dream_Great_Ball_Sprite.png";
  imagem7: string = "https://3.bp.blogspot.com/-hePneIVAcQY/VydUj6zCsmI/AAAAAAAApwo/8REOLMmtSucfXr7O7DhFoAcPS-TnoPAOwCK4B/s1600/Dream_Shiny_Stone_Sprite.png";

  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
