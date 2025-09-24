import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngressosComponent } from './pages/ingressos/ingressos.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'ingressos',
        component: IngressosComponent
    }
];
