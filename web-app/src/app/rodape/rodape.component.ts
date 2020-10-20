import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public headertext = `esse carinha aqui??? `;
  public url = 'https://animeshouse.net/filme/boku-no-hero-academia-the-movie-2-heroesrising/';
  constructor() { }

  ngOnInit(): void {
  }

}
