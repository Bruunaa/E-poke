import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos: Produto[] = [
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Poké_Ball_Sprite.png',
      nomeDoProduto: 'Pokéball',
      descricao: 'Um dispositivo para a captura de Pokémon selvagem.Ele é lançado como uma bola no alvo. Ele é sistema de cápsula. ',
      preco: 10,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Great_Ball_Sprite.png',
      nomeDoProduto: 'GreatBall',
      descricao: 'Uma bola de bom e alto desempenho que oferece uma taxa de captura de Pokémon maior do que um Pokébola padrão. ',
      preco: 10,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Ultra_Ball_Sprite.png',
      nomeDoProduto: 'UltraBall',
      descricao: 'Uma bola ultra-performance que oferece uma taxa de captura de Pokémon mais elevada do que a Great Ball.',
      preco: 10,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Master_Ball_Sprite.png',
      nomeDoProduto: 'MasterBall',
      descricao: 'A melhor bola com o nível máximo de desempenho. Ele vai pegar qualquer Pokémon selvagem sem falhar ',
      preco: 1000,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
  ]
  

  


getProdutos(): Produto[] {
  return this.produtos;
}

addProduto(produto: Produto) {
  this.produtos.push(produto);
}

}