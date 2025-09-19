import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListaPilotosComponent } from './componentes/lista-pilotos/lista-pilotos.component';
import { PilotoComponent } from './componentes/piloto/piloto.component';
import { ColocacaoCampComponent } from './componentes/colocacao-camp/colocacao-camp.component';


@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaPilotosComponent,
    PilotoComponent,
    ColocacaoCampComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ford-projetofinal';
}
