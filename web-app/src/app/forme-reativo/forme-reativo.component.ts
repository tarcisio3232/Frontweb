import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-forme-reativo',
  templateUrl: './forme-reativo.component.html',
  styleUrls: ['./forme-reativo.component.css']
})
export class FormeReativoComponent implements OnInit {

  formCadastro : FormGroup

  constructor() {
    this.formCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)
      ]
      )),
      'email': new FormControl(null, Validators.required),
      'telefone' : new FormControl(null, Validators.required)
  });
}

enviar(){
  let dados = `
  Nome: ${this.formCadastro.value.nome}
  email: ${this.formCadastro.value.email}
  telefone: ${this.formCadastro.value.telefone}              
`;

console.log(dados);
}


  ngOnInit(): void {
  }

}
