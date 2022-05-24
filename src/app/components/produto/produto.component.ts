import { Component, Input, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {
  @Input('dadoProduto') produto!: Produto;
  
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  @Input('categoria') categoria!: CategoriaProduto;


  ngOnDestroy(): void {
    console.log("E Morreu")
  }

  onComprar() {
    alert("Produto adicionado no carrinho!");
    this.onCarrinho.emit(this.produto);
  }

  ngOnInit(): void {
    console.log("ta indo")
  }

}
