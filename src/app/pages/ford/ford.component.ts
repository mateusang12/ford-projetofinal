import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../home/cabecalho/cabecalho.component';
import { RodapeComponent } from '../home/rodape/rodape.component';
import { MotorComponent } from './motor/motor.component';

@Component({
  selector: 'app-ford',
  imports: [
    RouterModule,
    CabecalhoComponent,
    RodapeComponent,
    MotorComponent
  ],
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.css'
})
export class FordComponent {

}
