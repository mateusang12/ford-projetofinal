import { Component } from '@angular/core';
import { RodapeComponent } from "../home/rodape/rodape.component";
import { SetoresComponent } from "./setores/setores.component";
import { CabecalhoingComponent } from "./cabecalhoing/cabecalhoing.component";

@Component({
  selector: 'app-ingressos',
  imports: [RodapeComponent, SetoresComponent, CabecalhoingComponent],
  templateUrl: './ingressos.component.html',
  styleUrl: './ingressos.component.css'
})
export class IngressosComponent {

}
