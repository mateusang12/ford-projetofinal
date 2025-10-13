import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { CarrosselComponent } from "./carrossel/carrossel.component";
import { ListaPilotosComponent } from "./lista-pilotos/lista-pilotos.component";
import { PilotoComponent } from "./piloto/piloto.component";
import { ApoiadoresComponent } from "./apoiadores/apoiadores.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { EquipesComponent } from './equipes/equipes.component';

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent, 
          CarrosselComponent, 
          ListaPilotosComponent, 
          PilotoComponent, 
          EquipesComponent,
          ApoiadoresComponent, 
          RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
