import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public exibe = false;
  public descricao = `disciplinas de prog`;
  public usuario = 'eu'
  public profissao = 'assistente de sup tecnico';

  public lista = [
    {
      id:'1',
      year:'2007',
      cert:'CSJP 1.5'
    },
    {
      id:'2',
      year:'2009',
      cert:'SCWCD 1.5'
    },
    {
      id:'3',
      year:'20011',
      cert:'CTFL'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil(){
    this.exibe = true
  }

  public ocultar(){
    this.exibe = false
  }

}
