import { Component, OnInit } from '@angular/core';

// Interface em Português: Setor (singular)
interface Setor {
  id: string;
  nome: string;
  descricao: string;
  link: string;
  estaAtivo: boolean; // Controla o estado de expansão (aberto/fechado)
}

@Component({
  selector: 'app-setores', 
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit { 

  // Dados dos 4 setores, declarados como variáveis individuais (sem array)
  setorA: Setor = { 
    id: 'setor-a', 
    nome: 'SETOR A', 
    descricao: 'Vista privilegiada da largada/chegada e da primeira curva. É uma das áreas mais emocionantes para assistir à corrida, com assentos cobertos disponíveis.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorB: Setor = { 
    id: 'setor-b', 
    nome: 'SETOR B', 
    descricao: 'Boa visibilidade da reta principal e da entrada do pit lane. Potenciais momentos de ultrapassagem na reta. Coberto.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorD: Setor = { 
    id: 'setor-d', 
    nome: 'SETOR D', 
    descricao: 'Localizado no miolo do circuito, oferecendo uma visão mais ampla de múltiplos trechos da pista. Coberto.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorG: Setor = { 
    id: 'setor-g', 
    nome: 'SETOR G', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorH: Setor = { 
    id: 'setor-h', 
    nome: 'SETOR H', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorM: Setor = { 
    id: 'setor-m', 
    nome: 'SETOR M', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorR: Setor = { 
    id: 'setor-r', 
    nome: 'SETOR R', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

    setorT: Setor = { 
    id: 'setor-t', 
    nome: 'SETOR T (SHELL)', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorporto: Setor = { 
    id: 'setor-porto', 
    nome: 'ARQUIBANCADA PORTO', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

   setorGRAMADO: Setor = { 
    id: 'setor-gramado', 
    nome: 'HEINEKEN VILLAGE - GRAMADO', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorESTRELA: Setor = { 
    id: 'setor-estrela', 
    nome: 'HEINEKEN VILLAGE - ESTRELA', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

   setorTREECLUB: Setor = { 
    id: 'setor-treeclub', 
    nome: 'ORANGE TREE CLUB', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorPITSTOPCLUB: Setor = { 
    id: 'setor-pitstopclub', 
    nome: 'PIT STOP CLUB', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };  

  setorGRANDPRIXCLUB: Setor = { 
    id: 'setor-grandprixclub', 
    nome: 'GRAND PRIX CLUB', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Descoberto. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  }; 




  // Array de todos os setores para facilitar a lógica de fechar outros cards
  private todosSetores: Setor[] = [this.setorA, this.setorB, this.setorD, this.setorG];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Função genérica para alternar a exibição de um setor e fechar todos os outros.
   * Recebe o objeto do setor clicado.
   */
  alternarExibicao(setorClicado: Setor): void { 
    // 1. Fecha todos os cards que não sejam o card clicado
    this.todosSetores.forEach(setor => {
      if (setor.id !== setorClicado.id) {
        setor.estaAtivo = false;
      }
    });

    // 2. Alterna o estado do setor clicado (abre ou fecha)
    setorClicado.estaAtivo = !setorClicado.estaAtivo;
  }
}





