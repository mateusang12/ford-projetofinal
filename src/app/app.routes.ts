import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngressosComponent } from './pages/ingressos/ingressos.component';
import { NewsComponent } from './pages/news/news.component';
import { VendaComponent } from './pages/venda/venda.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaNoticiasComponent } from './pages/news/lista-noticias/lista-noticias.component';

// Importe o componente para páginas não encontradas (Crie um se não tiver)
// import { NotFoundComponent } from './pages/not-found/not-found.component'; 


export const routes: Routes = [
    // 1. ROTA PADRÃO: Redireciona a URL raiz para a página de Login
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' // Garante que apenas a URL completa seja redirecionada
    },
    
    // 2. ROTAS PRINCIPAIS
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ingressos',
        component: IngressosComponent
    },
    {
        path: 'noticias',
        component: NewsComponent
    },
    {
        path: 'venda',
        component: VendaComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
     {
        path: 'dashboard',
        component: DashboardComponent
    },
     {
        path: 'lista-noticias',
        component: ListaNoticiasComponent
    },

    // 3. ROTA CURINGA: Captura qualquer URL que não corresponda às acima
    // Geralmente redireciona para uma página de erro 404
    /*
    { 
        path: '**', 
        component: NotFoundComponent 
    }
    */
];
