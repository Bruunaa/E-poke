import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ServicosComponent } from './components/servicos/servicos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'navbar', component: NavbarComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
