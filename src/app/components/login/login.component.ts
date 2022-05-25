import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email(){
    return this.loginForm.get('email');
  }
  get senha(){
    return this.loginForm.get('senha');
  }

  onSubmit(){
    alert('Bem vindo ao EPoke');
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}