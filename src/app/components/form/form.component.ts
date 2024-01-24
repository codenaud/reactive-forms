//form.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  formExemple: FormGroup;
  submitted = false; // Bandera para rastrear si se ha intentado enviar el formulario

  constructor(private form: FormBuilder) {
    // ... inicialización del formulario
    this.formExemple = form.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
    });
  }
  ngOnInit(): void {
    // ... implementa la lógica si es necesario, o deja vacío
    throw new Error('Method not implemented.');
  }

  addUser() {
    this.submitted = true; // Establece la bandera a true cuando se intenta enviar el formulario
    if (this.formExemple.valid) {
      alert('Se ha agregado un usuario');
      // Aquí puedes agregar la lógica para manejar el formulario válido
    }
  }
}
