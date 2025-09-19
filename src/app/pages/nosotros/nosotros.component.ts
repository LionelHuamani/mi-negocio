import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Sobre Nosotros - Mi Negocio | Nuestra historia y valores');
    this.seoService.updateMetaTags(
      'Conoce la historia de Mi Negocio, nuestros valores fundamentales y el equipo que hace posible nuestra excelencia en productos y servicios.',
      'nosotros, empresa, historia, valores, equipo, misión, visión, calidad',
      'https://minegocio.com/assets/og-nosotros.jpg'
    );
    this.seoService.updateCanonicalUrl('https://minegocio.com/nosotros');
  }

}
