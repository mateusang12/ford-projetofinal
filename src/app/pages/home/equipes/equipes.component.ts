import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

interface EquipeF1 {
  id: string;
  nome: string;
  logoUrl: string; 
  carroUrl: string; 
  anoEstreia: number;
  motor: string;
  titulosConstrutores: number;
  pilotos: string[];
  posicao2025: number; 
  pontuacao2025: number; 
}

@Component({
  selector: 'app-equipes',
  standalone: true, 
  imports: [
    CommonModule, 
    FormsModule    
  ],
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  equipes: EquipeF1[] = [
    { id: 'mclaren', nome: 'McLaren', logoUrl: 'https://cdn.motorsport.com/images/mgl/0qXxd4E6/s1000/mclaren-mcl38.jpg', carroUrl: 'assets/mclaren-car.png', anoEstreia: 1966, motor: 'Mercedes', titulosConstrutores: 10, pilotos: ['Lando Norris', 'Oscar Piastri'], posicao2025: 1, pontuacao2025: 650 },
    { id: 'ferrari', nome: 'Ferrari', logoUrl: 'https://images.autosport.pt/2024/02/sf-24-iii-e1707824217607.jpg', carroUrl: 'assets/ferrari-car.png', anoEstreia: 1950, motor: 'Ferrari', titulosConstrutores: 16, pilotos: ['Charles Leclerc', 'Lewis Hamilton'], posicao2025: 3, pontuacao2025: 298 },
    { id: 'redbull', nome: 'Red Bull Racing', logoUrl: 'https://images6.alphacoders.com/121/1215629.jpg', carroUrl: 'assets/redbull-car.png', anoEstreia: 2005, motor: 'Honda RBPT', titulosConstrutores: 6, pilotos: ['Max Verstappen', 'Yuki Tsunoda'], posicao2025: 4, pontuacao2025: 290 },
    { id: 'mercedes', nome: 'Mercedes', logoUrl: 'https://www.carscoops.com/wp-content/uploads/2023/02/Mercedes-W14-7.jpg', carroUrl: 'assets/mercedes-car.png', anoEstreia: 1970, motor: 'Mercedes', titulosConstrutores: 8, pilotos: ['George Russell', 'Kimi Antonelli'], posicao2025: 2, pontuacao2025: 325 },
    { id: 'williams', nome: 'Williams', logoUrl: 'https://tse2.mm.bing.net/th/id/OIP.xzH_4F2GJKUPKpqcFOr6oQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', carroUrl: 'assets/williams-car.png', anoEstreia: 1978, motor: 'Mercedes', titulosConstrutores: 9, pilotos: ['Alexander Albon', 'Carlos Sainz Jr.'], posicao2025: 5, pontuacao2025: 102 },
    { id: 'astonmartin', nome: 'Aston Martin', logoUrl: 'https://www.mundodeportivo.com/files/image_990_484/uploads/2022/02/10/6205291341f89.jpeg', carroUrl: 'assets/astonmartin-car.png', anoEstreia: 2021, motor: 'Mercedes', titulosConstrutores: 0, pilotos: ['Fernando Alonso', 'Lance Stroll'], posicao2025: 7, pontuacao2025: 68 },
    { id: 'alpine', nome: 'Alpine', logoUrl: 'https://www.labrujula24.com/wp-content/uploads/2025/02/alpine2.jpg', carroUrl: 'assets/alpine-car.png', anoEstreia: 2021, motor: 'Renault', titulosConstrutores: 0, pilotos: ['Pierre Gasly', 'Franco Colapinto'], posicao2025: 10, pontuacao2025: 20 },
    { id: 'visa_rb', nome: 'Racing Bulls', logoUrl: 'https://wallpapercave.com/wp/wp15100150.webp', carroUrl: 'assets/rb-car.png', anoEstreia: 2024, motor: 'Honda RBPT', titulosConstrutores: 0, pilotos: ['Isack Hadjar', 'Yuki Tsunoda'], posicao2025: 6, pontuacao2025: 72 },
    { id: 'haas', nome: 'Haas', logoUrl: 'https://pbs.twimg.com/media/GFVjytfWMAAPUMp?format=jpg&name=4096x4096', carroUrl: 'assets/haas-car.png', anoEstreia: 2016, motor: 'Ferrari', titulosConstrutores: 0, pilotos: ['Oliver Bearman', 'Esteban Ocon'], posicao2025: 9, pontuacao2025: 46 },
    { id: 'sauber', nome: 'Sauber', logoUrl: 'https://www.racexpress.nl/imgitems/article/2025/02/2025_C45_Studio_Images_Stake_4_5.jpg', carroUrl: 'assets/sauber-car.png', anoEstreia: 1993, motor: 'Ferrari', titulosConstrutores: 0, pilotos: ['Gabriel Bortoleto', 'Nico Hulkenberg'], posicao2025: 8, pontuacao2025: 55 }
  ];

  equipesSelecionadas: EquipeF1[] = [];
  equipeA: EquipeF1 | undefined; 
  equipeB: EquipeF1 | undefined; 
  
  mostrarComparacao: boolean = false;
  ngOnInit() {
    
  }

  selecionarEquipe(equipe: EquipeF1): void {
    const index = this.equipesSelecionadas.findIndex(e => e.id === equipe.id);

    if (index > -1) {
     
      this.equipesSelecionadas.splice(index, 1);
    } else {
  
      if (this.equipesSelecionadas.length < 2) {
        
        this.equipesSelecionadas.push(equipe);
      } else {
   
        alert('Você já selecionou duas equipes. Clique no botão "Comparar Equipes" ou desmarque uma equipe.');
      }
    }
  }

  iniciarComparacao(): void {
    if (this.equipesSelecionadas.length !== 2) {
      alert('Por favor, selecione exatamente duas equipes para comparar.');
      return;
    }

    this.equipeA = this.equipesSelecionadas[0];
    this.equipeB = this.equipesSelecionadas[1];
    this.mostrarComparacao = true;
  }

  voltarSelecao(): void {
    this.mostrarComparacao = false;
  
  }

  estaSelecionada(equipe: EquipeF1): boolean {
    return this.equipesSelecionadas.some(e => e.id === equipe.id);
  }
}