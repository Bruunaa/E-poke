import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  bruna: string = 'https://github.com/Bruunaa'
  bruno: string = 'https://github.com/Brn-Gaab'
  bianca: string = 'https://github.com/Bianca-goncalvess'
  felipe: string = 'https://github.com/FelipeOrtiz-Dev'
  thiago: string = 'https://github.com/ThiagoInnwinkl'


  constructor() {}

    ngOnInit(): void {
  }
}