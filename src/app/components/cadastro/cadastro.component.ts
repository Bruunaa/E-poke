import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
   
  cadastroForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    endereco: ['', [Validators.required, Validators.maxLength(60)]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required, Validators.maxLength(2)]],
    
  });
    get nome(){
      return this.cadastroForm.get('nome');
    }
    get email(){
      return this.cadastroForm.get('email');
    }
    get senha(){
      return this.cadastroForm.get('senha');
    }
    get endereco(){
      return this.cadastroForm.get('endereco');
    }
    get cidade(){
      return this.cadastroForm.get('senha');
    }
    get estado(){
      return this.cadastroForm.get('senha');
    }
    
  
    onSubmit(){
      alert('E-Cadastro realizado com sucesso!');
      console.log(this.cadastroForm.value);
    }

  ngOnInit(): void {
  }

}