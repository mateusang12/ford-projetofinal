import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent {
  public noticias: Noticia[] = [
    {
      titulo: 'Ford fecha parceria com Red Bull',
      dataPublicacao: new Date('2025-10-03T14:30:00'),
      imagemUrl: 'fordredbull.jpg', // Primeira imagem
      link: '/home',
      resumo: 'A gigante automotiva Ford anunciou uma colaboração de longo prazo com a equipe de Fórmula 1 Red Bull Racing, focando em novas tecnologias híbridas.'
    },
    {
      titulo: 'Novos Investimentos em Energia Sustentável',
      dataPublicacao: new Date('2025-10-02T10:00:00'),
      imagemUrl: 'fordredbull.jpg', // Segunda imagem
      link: '/sustentabilidade',
      resumo: 'Recorde de capital alocado em projetos de energia solar e eólica no último trimestre, impulsionando a transição energética global.'
    },
    {
      titulo: 'Tendências do TypeScript em 2026',
      dataPublicacao: new Date('2025-10-01T08:00:00'),
      imagemUrl: 'https://imagens.ebc.com.br/SKCnxSYxHVifJqU0GkEfQgm46fQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/12/08/2024-12-08t110008z_1660654742_up1ekc80uk6of_rtrmadp_3_motor-f1-abudhabi.jpg?itok=9bQaoEMn', // Terceira imagem
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
