import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrls: ['./camera-card.component.scss']
})
export class CameraCardComponent {
  @ViewChild('video') videoElement!: ElementRef;
  isCameraActive = false;

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = stream;
      this.isCameraActive = true;
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  }
}
