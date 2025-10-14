import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngressosComponent } from './pages/ingressos/ingressos.component';
import { NewsComponent } from './pages/news/news.component';
import { VendaComponent } from './pages/venda/venda.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaNoticiasComponent } from './pages/news/lista-noticias/lista-noticias.component';
import { FordComponent } from './pages/ford/ford.component';
import { MotorComponent } from './pages/ford/motor/motor.component';
import { RvendaComponent } from './pages/rvenda/rvenda.component';

 


export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' 
    },
    

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
        path: 'ford',
        component: FordComponent
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
     {
        path: 'motor',
        component: MotorComponent
    },
     {
        path: 'rvenda',
        component: RvendaComponent
    },

];
