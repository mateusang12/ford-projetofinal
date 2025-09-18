import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PilotoComponent } from './componentes/piloto/piloto.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    PilotoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ford-projetofinal';
}
