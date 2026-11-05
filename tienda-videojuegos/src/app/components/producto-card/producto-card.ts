import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() producto!: Producto;

  @Output() favorito = new EventEmitter<Producto>();

  onFavorito(): void {
    this.favorito.emit(this.producto);
  }
}