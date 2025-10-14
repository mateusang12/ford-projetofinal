import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagamentoComponent } from './pagamento/pagamento.component';
import { RodapedashboardComponent } from '../dashboard/rodapedashboard/rodapedashboard.component';
import { CabecalhoingComponent } from '../ingressos/cabecalhoing/cabecalhoing.component';

@Component({
  selector: 'app-venda',
  imports: [
    RouterModule,
    PagamentoComponent,
    RodapedashboardComponent,
    CabecalhoingComponent
],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent {

}
