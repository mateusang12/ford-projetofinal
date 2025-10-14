import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Noticia {
  titulo: string;
  dataPublicacao: Date;
  imagemUrl: string;
  link: string;
  resumo: string;
}

@Component({
  selector: 'app-lista-noticias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent {
  public noticias: Noticia[] = [
    {
      titulo: 'Campeonato de Construtores: McLaren é bicampeã',
      dataPublicacao: new Date('2025-10-07T14:30:00'),
      imagemUrl: 'https://f1grandprix.motorionline.com/wp-content/uploads/2023/09/stella-norris-piastri-mclaren-suzuka-f1-2023-1024x683.jpg',
      link: '/home',
      resumo: 'A gigante automotiva Ford anunciou uma colaboração de longo prazo com a equipe de Fórmula 1 Red Bull Racing, focando em novas tecnologias híbridas.'
    },
    {
      titulo: 'Red Bull Powertrains e Ford trabalhando em parceria',
      dataPublicacao: new Date('2025-09-03T10:00:00'),
      imagemUrl: 'fordredbull.jpg',
      link: '/ford',
      resumo: 'Recorde de capital alocado em projetos de energia solar e eólica no último trimestre, impulsionando a transição energética global.'
    },
    {
      titulo: 'O Brasil de volta na Fórmula 1 com Bortoleto',
      dataPublicacao: new Date('2025-08-14T08:00:00'),
      imagemUrl: 'https://imagens.ebc.com.br/SKCnxSYxHVifJqU0GkEfQgm46fQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/12/08/2024-12-08t110008z_1660654742_up1ekc80uk6of_rtrmadp_3_motor-f1-abudhabi.jpg?itok=9bQaoEMn',
      link: '/dev',
      resumo: 'Com o crescimento do Angular e React, o uso de recursos avançados do TypeScript está se tornando mandatório no mercado de desenvolvimento.'
    }
  ];

  public formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

}
