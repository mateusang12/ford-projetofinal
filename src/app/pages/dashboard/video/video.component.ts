import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  // 🎥 Vídeo de destaques da Fórmula 1 (sem autoplay)
  videoUrl: string = 'https://www.youtube.com/embed/xkRXnrvFCY0'; // sem autoplay nem mute

  constructor() {}
}
