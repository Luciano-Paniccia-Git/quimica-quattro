import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  tag: string;
  nombre: string;
  descripcion: string;
  usos: string[];
  gradiente: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  readonly productos: Producto[] = [
    {
      tag: 'Fabricación propia',
      nombre: 'Ácido Peracético',
      descripcion: 'Desinfectante de alto nivel con amplio espectro bactericida, fungicida, viricida y esporicida. Ideal para industria alimentaria y sanitaria.',
      usos: ['Industria alimentaria', 'Hospitales', 'CIP/SIP'],
      gradiente: 'from-[#0d3d5a] to-[#1B6B7B]',
    },
    {
      tag: 'Desinfectantes',
      nombre: 'Desinfectantes de superficies',
      descripcion: 'Formulados para superficies de contacto alimentario, pisos, equipos e instalaciones. Eficacia comprobada contra bacterias Gram+ y Gram-.',
      usos: ['Gastronomía', 'Industria', 'Limpieza general'],
      gradiente: 'from-[#122850] to-[#1B3A6B]',
    },
    {
      tag: 'Limpieza profesional',
      nombre: 'Productos de limpieza',
      descripcion: 'Detergentes, desengrasantes y limpiadores multiuso para uso profesional e institucional. Fórmulas concentradas y de alta performance.',
      usos: ['Institucional', 'Hotelería', 'Oficinas'],
      gradiente: 'from-[#1B3A6B] to-[#2a4f8a]',
    },
    {
      tag: 'Distribución',
      nombre: 'Químicos industriales',
      descripcion: 'Distribución de productos químicos para distintos sectores productivos. Hipoclorito, soda cáustica, ácidos y más.',
      usos: ['A granel', 'Fraccionado', 'Industrial'],
      gradiente: 'from-[#1a4060] to-[#1B3A6B]',
    },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
