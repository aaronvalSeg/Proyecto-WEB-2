import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  nombre: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  get formularioValido(): boolean {
    return this.nombre.trim() !== '' && this.mensaje.trim() !== '';
  }

  enviar(): void {
    this.enviado = true;
  }

  nuevoMensaje(): void {
    this.nombre = '';
    this.mensaje = '';
    this.enviado = false;
  }
}