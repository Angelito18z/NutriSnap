import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  standalone: false,
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss'
})
export class DialogUserComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.usuarioForm = this.fb.group({    
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data?.id) {
      // Si hay un usuario, llenar el formulario con su información, incluyendo el ID
      this.usuarioForm.patchValue({
        id: this.data.id, // Asegurar que el ID se establece
        nombre: this.data.nombre,
        email: this.data.email,
        rol: this.data.rol,
        contrasena: this.data.contrasena
      });
    } else {
      // Si es un nuevo usuario, quitar la validación de 'required' en el ID
      this.usuarioForm.get('id')?.clearValidators();
      this.usuarioForm.get('id')?.updateValueAndValidity();
    }
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.usuarioForm.valid) {
      // Si el usuario ya existe, enviamos su ID para actualizar
      const updatedData = { ...this.data, ...this.usuarioForm.value };
      this.dialogRef.close(updatedData);
    }
  }
}
