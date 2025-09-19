import { Component, input } from '@angular/core';
import { Piloto } from './piloto';

@Component({
  selector: 'app-piloto',
  imports: [],
  templateUrl: './piloto.component.html',
  styleUrl: './piloto.component.css'
})
export class PilotoComponent {

  piloto = input.required<Piloto>();

  alternarFavorito(): void {
    this.piloto().favorito = !this.piloto().favorito
  }


}
