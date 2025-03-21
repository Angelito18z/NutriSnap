import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlimentosService } from '../../services/alimentos/alimentos.service';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-camera-card',
  standalone: false,
  templateUrl: './camera-card.component.html',
  styleUrl: './camera-card.component.scss'
})
export class CameraCardComponent {
  supportedFormats: BarcodeFormat[] = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX, // Add more formats if needed
    BarcodeFormat.PDF_417,
  ];

  nutritionData: any = null;
  scannedResult: string | null = null;

  @ViewChild('cameraFeed') cameraFeed!: ElementRef<HTMLVideoElement>;
  isCameraActive = false;
  mediaStream: MediaStream | null = null;

  constructor(private alimentosService: AlimentosService) {}

  async activateCamera() {
    if (this.isCameraActive) {
      this.deactivateCamera();
    } else {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.cameraFeed.nativeElement.srcObject = this.mediaStream;
        this.isCameraActive = true;
        console.log('Camera activated successfully.');
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('No se puede acceder a la cámara.');
      }
    }
  }

  deactivateCamera() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
      this.cameraFeed.nativeElement.srcObject = null;
      this.isCameraActive = false;
    }
  }

  onCodeResult(result: string) {
    const cleanedResult = result.replace('id:', '').trim();
  
    const finalId = cleanedResult.replace(/[{}]/g, '');
  
    console.log('Scanned ID:', finalId); // Debugging line
  
    if (/^\d+$/.test(finalId)) {
      this.scannedResult = finalId;
      this.fetchAlimentoData(finalId);
    } else {
      console.error('Invalid scanned ID:', finalId);
      alert('El código escaneado no es válido.');
    }
    console.log(this.fetchAlimentoData(finalId))
  }

  onScanFailure(error: any) {
    console.error('Scan failed:', error);
  }

  onScanError(error: Error) {
    console.error('Scan error:', error);
  }

  fetchAlimentoData(id: string) {
    console.log('Fetching data for ID:', id); // Debugging line
    this.alimentosService.getAlimentoById(id).subscribe(
      (data) => {
        console.log('API Response:', data); // Debugging line
        this.nutritionData = data; // Assign the response to nutritionData
      },
      (error) => {
        console.error('Error al obtener alimento:', error);
        this.nutritionData = null;
      }
    );
  }

  ngOnDestroy() {
    this.deactivateCamera();
  }
}