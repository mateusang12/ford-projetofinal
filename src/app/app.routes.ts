import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngressosComponent } from './pages/ingressos/ingressos.component';
import { NewsComponent } from './pages/news/news.component';


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
    }
];
