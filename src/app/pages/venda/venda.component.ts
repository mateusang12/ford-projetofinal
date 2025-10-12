import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoVendaComponent } from "./cabecalho-venda/cabecalho-venda.component";
import { PagamentoComponent } from './pagamento/pagamento.component';
import { RodapepagComponent } from './rodapepag/rodapepag.component';

@Component({
  selector: 'app-venda',
  imports: [
    RouterModule,
    CabecalhoVendaComponent,
    RodapepagComponent,
    PagamentoComponent
],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent {

}
