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
      preco: 100,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Great_Ball_Sprite.png',
      nomeDoProduto: 'GreatBall',
      descricao: 'Uma bola de bom e alto desempenho que oferece uma taxa de captura de Pokémon maior do que um Pokébola padrão. ',
      preco: 250,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Pokebolas/Dream_Ultra_Ball_Sprite.png',
      nomeDoProduto: 'UltraBall',
      descricao: 'Uma bola ultra-performance que oferece uma taxa de captura de Pokémon mais elevada do que a Great Ball.',
      preco: 500,
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
    {
      imagem: './assets/Imagens/Potions/Dream_Potion_Sprite.png',
      nomeDoProduto: 'Potion',
      descricao: ' Recupera 25 pontos de HP do Pokemon dentro e fora de batalhas',
      preco: 50,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Potions/Dream_Super_Potion_Sprite.png',
      nomeDoProduto: 'Super Potion',
      descricao: ' Recupera 50 pontos de HP do Pokemon dentro e fora de batalhas',
      preco: 100,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Potions/Dream_Hyper_Potion_Sprite.png',
      nomeDoProduto: 'Hyper Potion',
      descricao: ' Recupera 200 pontos de HP do Pokemon dentro e fora de batalhas',
      preco: 250,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Potions/Dream_Max_Potion_Sprite.png',
      nomeDoProduto: 'Max Potion',
      descricao: ' Recupera todo o HP do Pokemon dentro e fora de batalhas',
      preco: 500,
      emPromocao: true,
      desconto: 0.03,
      categoria: CategoriaProduto.POKEBOLA
    },
    {
      imagem: './assets/Imagens/Potions/Dream_Full_Restore_Sprite.png',
      nomeDoProduto: 'FullRestore',
      descricao: 'Recupera todo o HP e retira todas as condições de status ',
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