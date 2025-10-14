import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy { 
  
  carImages: string[] = [
    'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/03/02/16146818148058.jpg',
    'https://www.the-race.com/content/images/2025/02/GkGexlZXEAAz18V.jpg',
    'https://f1-motorsports-gp.com/wp-content/uploads/2024/02/SF-24-1st-01.jpg',
  ];

  currentImageIndex: number = 0;
  private imageIntervalSubscription!: Subscription;

  isLoginMode: boolean = true; 
  
  constructor(private router: Router) {} 

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

  switchToRegister(): void {
    this.isLoginMode = false;
  }

  switchToLogin(): void {
    this.isLoginMode = true;
  }

  fazerLogin(emailValue: string): void {
    this.onSubmitLogin(emailValue);
  }

  onSubmitLogin(email: string): void {
    const EMAIL_ADMIN = "admin@formulaone.com";
    
    const emailLimpo = email.trim().toLowerCase();
    
    if (emailLimpo === EMAIL_ADMIN) {
      console.log('Login de Administrador bem-sucedido! Redirecionando...'); 
      
      this.router.navigate(['/dashboard']);
      
    } else {
      console.error(`Acesso negado. Apenas o e-mail ${EMAIL_ADMIN} é permitido.`);
      alert("Email não cadastrado. Tente novamente."); 
    }
  }

  onSubmitRegister(): void {
    console.log('Formulário de Cadastro submetido!');
  }
}