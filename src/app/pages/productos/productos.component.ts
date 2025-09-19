import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Vestido Elegante',
      descripcion: 'Vestido largo de tela suave, ideal para eventos especiales.',
      precio: 159.99,
      imagen: '👗',
      categoria: 'Mujer'
    },
    {
      id: 2,
      nombre: 'Camisa Casual',
      descripcion: 'Camisa de algodón para uso diario, disponible en varios colores.',
      precio: 79.99,
      imagen: '👔',
      categoria: 'Hombre'
    },
    {
      id: 3,
      nombre: 'Pantalón Jeans',
      descripcion: 'Jeans clásicos, cómodos y resistentes para cualquier ocasión.',
      precio: 99.99,
      imagen: '👖',
      categoria: 'Mujer'
    },
    {
      id: 4,
      nombre: 'Casaca Denim',
      descripcion: 'Casaca moderna de mezclilla, perfecta para combinar con cualquier prenda.',
      precio: 129.99,
      imagen: '🧥',
      categoria: 'Hombre'
    },
    {
      id: 5,
      nombre: 'Bolso de Mano',
      descripcion: 'Bolso elegante y espacioso, ideal para el día a día.',
      precio: 69.99,
      imagen: '👜',
      categoria: 'Accesorios'
    },
    {
      id: 6,
      nombre: 'Gorra Urbana',
      descripcion: 'Gorra con diseño exclusivo, perfecta para complementar tu estilo.',
      precio: 39.99,
      imagen: '🧢',
      categoria: 'Accesorios'
    },
    {
      id: 7,
      nombre: 'Oferta: Pack Verano',
      descripcion: 'Incluye polo, short y gorra a precio especial.',
      precio: 119.99,
      imagen: '🎁',
      categoria: 'Ofertas'
    }
  ];

  categorias = ['Todos', 'Mujer', 'Hombre', 'Accesorios', 'Ofertas'];
  categoriaSeleccionada = 'Todos';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Prendas - Moda Urbana | Colección de ropa y accesorios');
    this.seoService.updateMetaTags(
      'Explora nuestra colección de ropa y accesorios para mujer, hombre y ofertas especiales.',
      'ropa, moda, mujer, hombre, accesorios, ofertas, tienda',
      'https://modaurbana.com/assets/og-prendas.jpg'
    );
    this.seoService.updateCanonicalUrl('https://modaurbana.com/productos');
  }

  filtrarProductos(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

}