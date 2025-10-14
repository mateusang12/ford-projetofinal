import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoingComponent } from '../ingressos/cabecalhoing/cabecalhoing.component';
import { RodapedashboardComponent } from '../dashboard/rodapedashboard/rodapedashboard.component';
import { SennaComponent } from './senna/senna.component';


@Component({
  selector: 'app-rvenda',
  imports: [
    RouterModule,
    CabecalhoingComponent,
    RodapedashboardComponent,
    SennaComponent

    
  ],
  templateUrl: './rvenda.component.html',
  styleUrl: './rvenda.component.css'
})
export class RvendaComponent {

}
