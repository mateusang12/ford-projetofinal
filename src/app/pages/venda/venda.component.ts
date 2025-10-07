import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoVendaComponent } from "./cabecalho-venda/cabecalho-venda.component";

@Component({
  selector: 'app-venda',
  imports: [
    RouterModule,
    CabecalhoVendaComponent
],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent {

}
