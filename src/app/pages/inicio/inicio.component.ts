import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Mi Negocio - Inicio | Los mejores productos y servicios');
    this.seoService.updateMetaTags(
      'Descubre los mejores productos y servicios en Mi Negocio. Ofrecemos calidad, innovación y compromiso con nuestros clientes.',
      'negocio, productos, servicios, calidad, innovación, empresa, soluciones',
      'https://minegocio.com/assets/og-image.jpg'
    );
    this.seoService.updateCanonicalUrl('https://minegocio.com/');
  }

}
