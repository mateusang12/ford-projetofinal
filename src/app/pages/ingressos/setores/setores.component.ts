import { Component, OnInit } from '@angular/core';

interface Setor {
  id: string;
  nome: string;
  descricao: string;
  link: string;
  estaAtivo: boolean;
}

@Component({
  selector: 'app-setores', 
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit { 

  setorA: Setor = { 
    id: 'setor-a', 
    nome: 'SETOR A', 
    descricao: 'Vista da subida dos boxes e largada. Arquibancada descoberta,contém ponto de vendas e telão.', 
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
    descricao: 'Localizado no início do S do Senna, oferecendo uma visão mais ampla de múltiplos trechos da pista. Coberto.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorG: Setor = { 
    id: 'setor-g', 
    nome: 'SETOR G', 
    descricao: 'Setor popular e energético, próximo a uma curva de alta velocidade. Sem cobertura. Excelente para sentir a velocidade.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorH: Setor = { 
    id: 'setor-h', 
    nome: 'SETOR H', 
    descricao: 'Localizado no final do S do Senna. Arquibancada coberta.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorM: Setor = { 
    id: 'setor-m', 
    nome: 'SETOR M', 
    descricao: 'Em frente aos boxes, assentos numerados.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorR: Setor = { 
    id: 'setor-r', 
    nome: 'SETOR R', 
    descricao: 'Localizado após o S do Senna, inclui ponto de vendas de alimentação e produtos licenciados.', 
    link: '/rvenda',
    estaAtivo: false 
  };

    setorT: Setor = { 
    id: 'setor-t', 
    nome: 'SETOR T (SHELL)', 
    descricao: 'Setor da última curva antes da reta principal. Proporciona ótima vista.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorporto: Setor = { 
    id: 'setor-porto', 
    nome: 'ARQUIBANCADA PORTO', 
    descricao: 'No final da reta oposta, arquibanca coberta e telão.', 
    link: '/venda',
    estaAtivo: false 
  };

   setorGRAMADO: Setor = { 
    id: 'setor-gramado', 
    nome: 'HEINEKEN VILLAGE - GRAMADO', 
    descricao: 'Área gramada ao ar livre no miolo do circuito, entretenimento exclusivo.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorESTRELA: Setor = { 
    id: 'setor-estrela', 
    nome: 'HEINEKEN VILLAGE - ESTRELA', 
    descricao: 'Área premium no miolo do circuito, incluso buffet finger food e open bar.', 
    link: '/venda',
    estaAtivo: false 
  };

   setorTREECLUB: Setor = { 
    id: 'setor-treeclub', 
    nome: 'ORANGE TREE CLUB', 
    descricao: 'Vista para curva da laranjinha. Lounge e arquibancada coberta.', 
    link: '/venda',
    estaAtivo: false 
  };

  setorPITSTOPCLUB: Setor = { 
    id: 'setor-pitstopclub', 
    nome: 'PIT STOP CLUB', 
    descricao: 'Vista do Grid de largada, boxes e pódio. Área de entretenimento e games.', 
    link: '/venda',
    estaAtivo: false 
  };  

  setorGRANDPRIXCLUB: Setor = { 
    id: 'setor-grandprixclub', 
    nome: 'GRAND PRIX CLUB', 
    descricao: 'Vista da área central do circuito. Acesso ao sofisticado camarote VIP Lounge.', 
    link: '/venda',
    estaAtivo: false 
  }; 

  private todosSetores: Setor[] = [this.setorA, this.setorB, this.setorD, this.setorG];

  constructor() { }

  ngOnInit(): void {
  }

  alternarExibicao(setorClicado: Setor): void { 

    this.todosSetores.forEach(setor => {
      if (setor.id !== setorClicado.id) {
        setor.estaAtivo = false;
      }
    });

    setorClicado.estaAtivo = !setorClicado.estaAtivo;
  }
}





