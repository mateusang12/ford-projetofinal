import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PilotoComponent } from './componentes/piloto/piloto.component';
import { ListaPilotosComponent } from './componentes/lista-pilotos/lista-pilotos.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { ApoiadoresComponent } from './componentes/apoiadores/apoiadores.component';


@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    PilotoComponent,
    ListaPilotosComponent,
    CarrosselComponent,
    ApoiadoresComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ford-projetofinal';
}
