import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'nosotros', component: Nosotros },
  { path: 'contacto', component: Contacto },
  { path: '**', component: NotFound },
];
