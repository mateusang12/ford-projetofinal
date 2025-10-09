// O código TypeScript permanece o mesmo.
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy { 
  // ... (o código do carrossel e das funções de submissão são mantidos) ...
  carImages: string[] = [
    'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/03/02/16146818148058.jpg',
    'https://www.the-race.com/content/images/2025/02/GkGexlZXEAAz18V.jpg',
    'https://f1-motorsports-gp.com/wp-content/uploads/2024/02/SF-24-1st-01.jpg',
  ];

  currentImageIndex: number = 0;
  private imageIntervalSubscription!: Subscription;

  // Variável de controle: Começa como TRUE (Login)
  isLoginMode: boolean = true; 

  ngOnInit(): void {
    this.startImageCarousel();
  }

  ngOnDestroy(): void {
    if (this.imageIntervalSubscription) {
      this.imageIntervalSubscription.unsubscribe();
    }
  }

  startImageCarousel(): void {
    const carInterval = interval(3000);
    this.imageIntervalSubscription = carInterval.subscribe(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carImages.length;
    });
  }

  getCurrentImageUrl(): string {
    return this.carImages[this.currentImageIndex];
  }

  // Funções que controlam a visualização dos formulários
  switchToRegister(): void {
    this.isLoginMode = false;
  }

  switchToLogin(): void {
    this.isLoginMode = true;
  }

  onSubmitLogin(): void {
    console.log('Formulário de Login submetido!');
  }

  onSubmitRegister(): void {
    console.log('Formulário de Cadastro submetido!');
  }
}
