import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngressosComponent } from './pages/ingressos/ingressos.component';
import { NewsComponent } from './pages/news/news.component';
import { VendaComponent } from './pages/venda/venda.component';
import { LoginComponent } from './pages/login/login.component';



export const routes: Routes = [
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
    }
];
