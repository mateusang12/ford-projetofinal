import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabedashboardComponent } from './cabedashboard/cabedashboard.component';
import { RodapedashboardComponent } from './rodapedashboard/rodapedashboard.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterModule, CabedashboardComponent, RodapedashboardComponent, NavegacaoComponent, VideoComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
