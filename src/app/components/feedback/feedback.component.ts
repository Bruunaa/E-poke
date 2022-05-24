import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
   feedbackForm = this.fb.group({
    nome: [''],
    email: [''],
    comentario: [''],
  });

  
  get nome() {
    return this.feedbackForm.get('nome');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get comentario() {
    return this.feedbackForm.get('comentario');
  }


  onSubmit() {
    alert('Seu feedback foi enviado com Sucesso.')
    console.log(this.feedbackForm.value);
  }
  ngOnInit(): void {
  }

}
