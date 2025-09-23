import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CarrosselComponent implements OnInit, OnDestroy {

  imagens: string[] = [
    'https://s2-ge.glbimg.com/0D7wlTN7QMRwtv-jU0M4MaNALSI=/0x0:2000x1138/1008x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2016/03/23/gettyimages-86150541_xKALYBN.jpg',
    'https://pbs.twimg.com/media/GbKQD6_akAMNX1v?format=jpg&name=large',
    'https://s2-ge.glbimg.com/DGzQOTcWv0Dj5xgB_BvAz39vW2Q=/0x0:3000x1962/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/T/Z/SaWqHZTnCFolBBtZPCPQ/gettyimages-72240149.jpg',
    'https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/11/03/17306576580270.jpg'
  ];

  indexAtual: number = 0;
  private intervalo: any;

  constructor() { }

  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  ngOnDestroy(): void {
    // Limpa o intervalo quando o componente é destruído
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  iniciarCarrossel() {
    this.intervalo = setInterval(() => {
      this.indexAtual = (this.indexAtual + 1) % this.imagens.length;
    }, 2000); // 2000 ms = 2 segundos
  }

}
