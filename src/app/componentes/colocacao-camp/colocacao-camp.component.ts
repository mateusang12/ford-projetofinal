import { Component } from '@angular/core';
import { PilotoComponent } from '../piloto/piloto.component';
import { pilotos } from '../../mock-pilotos';

@Component({
  selector: 'app-colocacao-camp',
  imports: [PilotoComponent],
  templateUrl: './colocacao-camp.component.html',
  styleUrl: './colocacao-camp.component.css'
})
export class ColocacaoCampComponent {
  piloto = pilotos[0]
}
