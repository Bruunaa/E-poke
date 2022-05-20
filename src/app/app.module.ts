import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CadastroComponent,
    FeedbackComponent,
    NotFoundComponent,
    ProdutoComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
