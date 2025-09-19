import { Piloto } from "./componentes/piloto/piloto";

export const pilotos: Piloto[] = [
    {
        titulo: 'Oscar Piastri',
        autoria: 'McLaren',
        colocacao: {
            id: '1st',
            value: '1ST',
            pilotos: []
        },
        favorito: false,
        imagem: 'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_oscar_team_pic_02.jpg'
    },
    {
        titulo: 'Lando Norris',
        autoria: 'McLaren',
        colocacao: {
            id: '2nd',
            value: '2ND',
            pilotos: []
        },
        favorito: false,
        imagem: 'https://mclaren.bloomreach.io/cdn-cgi/image/format=webp,quality=80/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_lando_team_pic_02.jpg'

    }

]