import { Component, OnInit } from '@angular/core';
import { Piloto } from './piloto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piloto',
  imports: [CommonModule],
  templateUrl: './piloto.component.html',
  styleUrl: './piloto.component.css'
})
export class PilotoComponent implements OnInit { // Adicionando OnInit para inicializar a comparação

  // --- DADOS DOS PILOTOS (Atualizados com as 8 métricas) ---
  pilotos: Piloto[] = [
    {
      id: 1, // NOVO: ID único
      titulo: "Oscar Piastri",
      autoria: "McLaren",
      colocacao: "podio",
      imagem: "https://mclaren.bloomreach.io/cdn-cgi/image/format=webp,quality=80/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_oscar_team_pic_02.jpg",
      // Novas métricas de comparação (exemplos)
      posicao: 1,
      equipe: 'McLaren',
      nacionalidade: 'Australiana',
      idade: 24,
      numeroCarro: 336,
      podios2025: 14,
      vitorias2025: 7,
      vitoriasCarreira: 7
    },
    {
      id: 2,
      titulo: "Lando Norris",
      autoria: "McLaren",
      colocacao: "podio",
      imagem: "https://mclaren.bloomreach.io/cdn-cgi/image/format=webp,quality=80/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_lando_team_pic_02.jpg",
      // Novas métricas de comparação (exemplos)
      posicao: 2,
      equipe: 'McLaren',
      nacionalidade: 'Britânica',
      idade: 25,
      numeroCarro: 314,
      podios2025: 14,
      vitorias2025: 5,
      vitoriasCarreira: 9
    },
    {
      id: 3,
      titulo: "Max Verstappen",
      autoria: "Red Bull",
      colocacao: "podio",
      imagem: "https://www.jornalcruzeiro.com.br/_midias/jpg/2022/09/15/formula_1_na_band_1-991920.jpg",
      // Novas métricas de comparação (exemplos)
      posicao: 3,
      equipe: 'Red Bull',
      nacionalidade: 'Holandesa',
      idade: 28,
      numeroCarro: 273,
      podios2025: 9,
      vitorias2025: 4,
      vitoriasCarreira: 61
    }
  ];

  // --- LÓGICA DE COMPARAÇÃO ---
  pilotoSelecionado1: Piloto | null = null;
  pilotoSelecionado2: Piloto | null = null;

  caracteristicas: { label: string, key: keyof Piloto }[] = [
    { label: 'Posição (2025)', key: 'posicao' },
    { label: 'Equipe', key: 'equipe' },
    { label: 'Nacionalidade', key: 'nacionalidade' },
    { label: 'Idade', key: 'idade' },
    { label: 'Pontuação (2025)', key: 'numeroCarro' },
    { label: 'Pódios (2025)', key: 'podios2025' },
    { label: 'Vitórias (2025)', key: 'vitorias2025' },
    { label: 'Vitórias na Carreira', key: 'vitoriasCarreira' },
    
  ];

  ngOnInit(): void {
    // Inicializa a comparação com os dois primeiros pilotos por padrão
    this.pilotoSelecionado1 = this.pilotos.length > 0 ? this.pilotos[0] : null;
    this.pilotoSelecionado2 = this.pilotos.length > 1 ? this.pilotos[1] : null;
  }

  // Função para lidar com a seleção de pilotos
  onSelectChange(event: Event, isFirstPilot: boolean): void {
    const selectedId = +(event.target as HTMLSelectElement).value;
    const selectedPilot = this.pilotos.find(p => p.id === selectedId) || null;

    if (isFirstPilot) {
      if (selectedPilot && selectedPilot === this.pilotoSelecionado2) {
        alert("Erro: Não é possível comparar o piloto com ele mesmo.");
        return;
      }
      this.pilotoSelecionado1 = selectedPilot;
    } else {
      if (selectedPilot && selectedPilot === this.pilotoSelecionado1) {
        alert("Erro: Não é possível comparar o piloto com ele mesmo.");
        return;
      }
      this.pilotoSelecionado2 = selectedPilot;
    }
  }

  // Função para acessar o valor do piloto com segurança (CORRIGE O ERRO DO TEMPLATE)
  getPilotValue(piloto: Piloto | null, key: keyof Piloto): any {
    if (!piloto) {
        return 'N/A'; // Retorna N/A se o objeto for nulo
    }
    // O TypeScript confia no tipo 'keyof Piloto'
    return (piloto as Piloto)[key]; 
  }

  // Função para aplicar destaque nos dados numéricos (quem é melhor)
  getDataHighlightClass(key: keyof Piloto, value1: any, value2: any): string {
    // Se não forem números válidos (ex: 'N/A' ou string da equipe)
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return '';
    }

    // Posição: Quanto MENOR o número, MELHOR (1º é melhor que 3º)
    if (key === 'posicao') {
        if (value1 < value2) return 'highlight-left';
        if (value2 < value1) return 'highlight-right';
    }

    // Demais métricas: Quanto MAIOR o número, MELHOR
    if (value1 > value2) return 'highlight-left';
    if (value2 > value1) return 'highlight-right';
    
    return '';
  }
}
