import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from "../home/cabecalho/cabecalho.component";
import { RodapeComponent } from "../home/rodape/rodape.component";
import { ListaNoticiasComponent } from "./lista-noticias/lista-noticias.component";


@Component({
  selector: 'app-news',
  imports: [
    RouterModule,
    CabecalhoComponent,
    RodapeComponent,
    ListaNoticiasComponent
],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
