import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  nextStages = [
    { name: 'GP dos Estados Unidos', date: '17 - 19 Outubro', country: 'Estados Unidos', flagUrl: 'https://flagsapi.com/US/flat/64.png', route: '/gp-eua' },
    { name: 'GP do México', date: '24 - 26 Outubro', country: 'México', flagUrl: 'https://flagsapi.com/MX/flat/64.png', route: '/gp-mexico' },
    { name: 'GP do Brasil', date: '07 - 09 Novembro', country: 'Brasil', flagUrl: 'https://flagsapi.com/BR/flat/64.png', route: '/gp-brasil' },
    { name: 'GP de Las Vegas', date: '20 - 22 Novembro', country: 'Estados Unidos', flagUrl: 'https://flagsapi.com/US/flat/64.png', route: '/gp-las-vegas' },
    { name: 'GP do Catar', date: '28 - 30 Novembro', country: 'Catar', flagUrl: 'https://flagsapi.com/QA/flat/64.png', route: '/gp-catar' },
    { name: 'GP de Abu Dhabi', date: '05 - 07 Dezembro', country: 'Emirados Árabes Unidos', flagUrl: 'https://flagsapi.com/AE/flat/64.png', route: '/gp-abu-dhabi' }
  ];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.renderStageCards();

    const nextStagesButton = document.getElementById('next-stages-button');
    if (nextStagesButton) {
      nextStagesButton.addEventListener('click', () => this.showStageCards());
    }

    const backButton = document.getElementById('back-button');
    if (backButton) {
      backButton.addEventListener('click', () => this.showMainCards());
    }
  }

  renderStageCards(): void {
    const stagesWrapper = document.getElementById('stages-wrapper'); 
    
    if (stagesWrapper) {
      const cardsHtml = this.nextStages.map((stage, index) => `
        <div class="card stage-card" data-stage-index="${index}">
          <div class="card-top">
            <h4>${stage.name}</h4> 
            <p>${stage.date}</p>
          </div>
          <div class="card-bottom">
            <img src="${stage.flagUrl}" alt="Bandeira ${stage.country}" class="flag-icon">
          </div>
        </div>
      `).join('');
      
      stagesWrapper.innerHTML = cardsHtml;
      this.addStageCardListeners();
    }
  }

  showStageCards(): void {
    const mainCards = document.getElementById('main-cards-container');
    const stageCards = document.getElementById('stage-cards-container');

    if (mainCards && stageCards) {
      mainCards.classList.add('hidden');
      stageCards.classList.remove('hidden');
    }
  }

  showMainCards(): void {
    const mainCards = document.getElementById('main-cards-container');
    const stageCards = document.getElementById('stage-cards-container');

    if (mainCards && stageCards) {
      stageCards.classList.add('hidden');
      mainCards.classList.remove('hidden'); 
    }
  }

  addStageCardListeners(): void {
    setTimeout(() => { 
      const stageCards = document.querySelectorAll('.stage-card');
      
      stageCards.forEach(card => {
          card.addEventListener('click', (event) => {
              const index = (event.currentTarget as HTMLElement).getAttribute('data-stage-index');
              if (index !== null) {
                  const stage = this.nextStages[parseInt(index)];
                  this.goToStageDetails(stage);
              }
          });
      });
    }, 0);
  }

  // FUNÇÃO ALTERADA AQUI:
  goToStageDetails(stage: any) {
    if (stage.name === 'GP do Brasil') {
      // Rota alterada de '/detalhes-gp-brasil' para '/ingressos'
      this.router.navigate(['/ingressos']); 
    } else {
      console.log('Clicou na etapa:', stage.name);
    }
  }
}