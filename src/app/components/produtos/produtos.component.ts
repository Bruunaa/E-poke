import { Component, HostListener, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  addCarrinho(produto: Produto) {
    this.carrinho.push(produto);
  }

  produtoNoCarrinho(produto: Produto): boolean {
    return this.carrinho.includes(produto);
  }

  ngOnInit(): void {
      this.produtos = this.produtosService.getProdutos();
  }

}
