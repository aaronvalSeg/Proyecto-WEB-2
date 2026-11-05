import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoCard } from '../../components/producto-card/producto-card'

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
  standalone: true
})
export class Productos {
  // Estado para el filtro de consolas ('Todas', 'Xbox', 'PlayStation', 'Nintendo')
  filtroConsola: string = 'Todas';

  // Variable para cotrolar la notificacion del cartel
  mensajeFavorito: string | null = null;

  // Catalogo de videojuegos fisicos tipado con la interface Producto
  productos: Producto[] = [
      // Playstation (PS4 / PS5)
      {
      id: 1, nombre: "Marvel's Spider-Man 2", consola: "PlayStation", precio: 69.99, 
      descripcion:'Juego fisico original para PS5. Sumérgete en la acción de Spider-Man con gráficos mejorados y nuevas habilidades.', imagen: 'PS/spiderman2.jpg'
    },
    {
      id: 2, nombre: "God of War Ragnarok", consola: "PlayStation", precio: 59.99,
      descripcion:'Disco fisico para PS4. Aventura mitica de Kratos y Atreus.', imagen: 'PS/godofwar.jpg'
    },
    {
      id: 3, nombre: 'The Last of Us part II Remastered', consola: 'PlayStation', precio: 49.99,
      descripcion:'Disco fisico para PS5. Aventura postapocaliptica de Joel y Ellie.', imagen: 'PS/thelastofus.jpg'
    },

    // XBOX (Xbox One / Series X|S)
    {
      id: 4, nombre: 'Halo Infinite', consola: 'Xbox', precio: 39.99,
      descripcion:'Disco fisico para Xbox One. Aventura de ciencia ficcion de Master Chief.', imagen: 'Xbox/haloinfinite.jpg'
    },
    {
      id: 5, nombre: 'Forza Horizon 5', consola: 'Xbox', precio: 49.99,
      descripcion:'Disco fisico para Xbox One. Carreras de alto rendimiento con vehiculos realistas.', imagen: 'Xbox/forzahorizon5.jpg'
    },
    {
      id: 6,
      nombre: 'Gears 5', consola: 'Xbox', precio: 29.99,
      descripcion:'Disco fisico para Xbox One. Aventura de accion y estrategia en un mundo postapocaliptico.', imagen: 'Xbox/gears5.jpg'
    },

    // Nintendo (Switch)
    {
      id: 7, nombre: 'Super Mario Bros. Wonder', consola: 'Nintendo', precio: 59.99,
      descripcion:'Disco fisico para Nintendo Switch. Aventura de plataformas con Mario y sus amigos.', imagen: 'Nintendo/supermariobroswonder.jpg'
    },
    {
      id: 8, nombre: 'The Legend of Zelda: Tears of the Kingdom', consola: 'Nintendo', precio: 69.99,
      descripcion:'Disco fisico para Nintendo Switch. Aventura epica de Link en un mundo abierto.', imagen: 'Nintendo/zelda.jpg'
    },
    {
      id: 9, nombre: 'Mario Kart 8 Deluxe', consola: 'Nintendo', precio: 49.99,
      descripcion:'Disco fisico para Nintendo Switch. Carreras de karts con personajes de Mario y sus amigos.', imagen: 'Nintendo/mariokart8deluxe.jpg'
    }
  ];
  // Metodo para cambiar la consola seleccionada desde los botones
  seleccionarFiltro(consola: string): void {
    this.filtroConsola = consola;
  }

  // GETTER: Propiedad calculada que filtra segun la consola.
  get productosFiltrados(): Producto[] {
    if (this.filtroConsola === 'Todas') {
      return this.productos;
    }
    return this.productos.filter(p => p.consola === this.filtroConsola);
  }

  // Metodo para recibir el @Output de la tarjeta
  agregarAFavoritos(producto: Producto): void {
    this.mensajeFavorito = `¡${producto.nombre} ha sido agregado a tus favoritos!`;
  }
}