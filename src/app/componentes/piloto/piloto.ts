export interface Piloto {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    colocacao: ColocacaoCamp;
}

export interface ColocacaoCamp {
    id: string;
    value: string;
    pilotos: Piloto[]
}