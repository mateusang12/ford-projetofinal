export interface Piloto {
    titulo: string; // Vai ser o nome do piloto
    autoria: string; // Vai ser o nome da equipe
    colocacao: string; // Pode ser removido se não for mais usado
    imagem: string;
  
    // NOVAS PROPRIEDADES PARA COMPARAÇÃO
    id: number; // Chave única para seleção
    posicao: number;
    equipe: string; // Duplicado de 'autoria', mas mantido para clareza na comparação
    nacionalidade: string;
    idade: number;
    numeroCarro: number;
    podios2025: number;
    vitorias2025: number;
    vitoriasCarreira: number;
  }