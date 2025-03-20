import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  standalone: false,
  templateUrl: './camera-card.component.html',
  styleUrl: './camera-card.component.scss'
})
export class CameraCardComponent {
  // Nutritional Table Data
  nutritionData = [
    { food: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    { food: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
    { food: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  ];
  displayedColumns: string[] = ['food', 'calories', 'protein', 'carbs', 'fat'];

  // Camera Functionality
  @ViewChild('cameraFeed') cameraFeed!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraContainer') cameraContainer!: ElementRef<HTMLDivElement>;
  isCameraActive = false;
  mediaStream: MediaStream | null = null;

  // Activate or deactivate the camera
  async activateCamera() {
    if (this.isCameraActive) {
      this.deactivateCamera();
    } else {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.cameraFeed.nativeElement.srcObject = this.mediaStream;
        this.isCameraActive = true;
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access the camera. Please ensure you have granted permission.');
      }
    }
  }

  // Deactivate the camera
  deactivateCamera() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = null;
      this.cameraFeed.nativeElement.srcObject = null;
      this.isCameraActive = false;
    }
  }

  // Clean up the camera stream when the component is destroyed
  ngOnDestroy() {
    this.deactivateCamera();
  }
}
