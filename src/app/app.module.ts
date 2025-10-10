import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// >>> 1. IMPORTAR AQUI: 
import { ReactiveFormsModule } from '@angular/forms'; 

// Importe seus componentes de Login e Home
import { LoginComponent } from './pages/login/login.component'; 
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // >>> 2. ADICIONAR AQUI:  
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }