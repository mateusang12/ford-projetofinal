import { Component } from '@angular/core';
import { Piloto } from './piloto';

@Component({
  selector: 'app-piloto',
  imports: [],
  templateUrl: './piloto.component.html',
  styleUrl: './piloto.component.css'
})
export class PilotoComponent {

  alternarFavorito() {
    this.piloto.favorito = !this.piloto.favorito
  }

  piloto: Piloto = {
    titulo: "Lewis Hamilton",
    autoria: "Ferrari",
    favorito: false,
    colocacao: "6th",
    imagem: "https://f1store4.formula1.com/content/ws/all/d9dc40a3-2ff9-46a6-b175-a628e3a02093__800X1080.png?w=800"
  }
}
