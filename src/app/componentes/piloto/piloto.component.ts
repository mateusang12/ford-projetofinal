import { Component } from '@angular/core';
import { Piloto } from './piloto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piloto',
  imports: [CommonModule],
  templateUrl: './piloto.component.html',
  styleUrl: './piloto.component.css'
})
export class PilotoComponent {



  pilotos: Piloto[] = [
    {
      titulo: "Oscar Piastri",
      autoria: "McLaren",
      colocacao: "podio",
      imagem: "https://mclaren.bloomreach.io/cdn-cgi/image/format=webp,quality=80/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_oscar_team_pic_02.jpg"
    },
    {
      titulo: "Lando Norris",
      autoria: "McLaren",
      colocacao: "podio",
      imagem: "https://mclaren.bloomreach.io/cdn-cgi/image/format=webp,quality=80/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/2025_lando_team_pic_02.jpg"
    },
    {
      titulo: "Max Verstappen",
      autoria: "Red Bull",
      colocacao: "podio",
      imagem: "https://www.jornalcruzeiro.com.br/_midias/jpg/2022/09/15/formula_1_na_band_1-991920.jpg"
    }
  ];
}
