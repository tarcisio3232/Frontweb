import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    let dados = `
    nome: $(forme.value.nome)
    telefone: $(forme.value.telefone)
    endereco: $(forme.value.endereco) 
    `;
  }

}
