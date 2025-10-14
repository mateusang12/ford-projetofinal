import { Component } from '@angular/core';
import { SetoresComponent } from "./setores/setores.component";
import { RodapedashboardComponent } from '../dashboard/rodapedashboard/rodapedashboard.component';
import { CabecalhoingComponent } from './cabecalhoing/cabecalhoing.component';

@Component({
  selector: 'app-ingressos',
  imports: [ 
    SetoresComponent, 
RodapedashboardComponent,
CabecalhoingComponent
],
  templateUrl: './ingressos.component.html',
  styleUrl: './ingressos.component.css'
})
export class IngressosComponent {

}
