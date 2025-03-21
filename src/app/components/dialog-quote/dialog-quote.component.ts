import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-quote',
  standalone: false,
  templateUrl: './dialog-quote.component.html',
  styleUrl: './dialog-quote.component.scss'
})
export class DialogQuoteComponent implements OnInit {
  quoteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogQuoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Inicializar el formulario con los campos de Quote
    this.quoteForm = this.fb.group({
      id: ['', Validators.required],
      paciente_id: ['', Validators.required],
      trabajador_id: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      duracion: ['', [Validators.required, Validators.min(1)]], // Duración en minutos
      notas: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data?.id) {
      // Si hay una quote, llenar el formulario con su información, incluyendo el ID
      this.quoteForm.patchValue({
        id: this.data.id, // Asegurar que el ID se establece
        paciente_id: this.data.paciente_id,
        trabajador_id: this.data.trabajador_id,
        fecha: this.data.fecha,
        hora: this.data.hora,
        duracion: this.data.duracion,
        notas: this.data.notas
      });
    } else {
      // Si es una nueva quote, quitar la validación de 'required' en el ID
      this.quoteForm.get('id')?.clearValidators();
      this.quoteForm.get('id')?.updateValueAndValidity();
    }
  }

  // Cerrar el diálogo sin guardar cambios
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Confirmar y enviar los datos del formulario
  onConfirm(): void {
    if (this.quoteForm.valid) {
      // Si la quote ya existe, enviamos su ID para actualizar
      const updatedData = { ...this.data, ...this.quoteForm.value };
      this.dialogRef.close(updatedData);
    }
  }
}