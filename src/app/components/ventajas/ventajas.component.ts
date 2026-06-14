import { Component } from '@angular/core';

interface Ventaja {
  titulo: string;
  texto: string;
  icono: string;
}

@Component({
  selector: 'app-ventajas',
  standalone: true,
  templateUrl: './ventajas.component.html',
})
export class VentajasComponent {
  readonly ventajas: Ventaja[] = [
    {
      titulo: 'Productos con registros habilitantes',
      texto: 'Todos nuestros productos cuentan con registros sanitarios ante ANMAT y SENASA según su aplicación.',
      icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      titulo: 'Formulaciones propias',
      texto: 'Desarrollamos nuestras propias formulaciones para garantizar eficacia y adaptarnos a requerimientos específicos.',
      icono: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      titulo: 'Fichas técnicas y de seguridad',
      texto: 'Proveemos documentación técnica completa: fichas de seguridad (FDS), fichas técnicas y modos de uso.',
      icono: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    },
    {
      titulo: 'Entregas programadas',
      texto: 'Coordinamos entregas periódicas y planificadas para que nunca te quedes sin stock.',
      icono: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
    {
      titulo: 'Atención personalizada',
      texto: 'Equipo técnico-comercial disponible para asesorarte en la selección de productos y resolver consultas.',
      icono: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      titulo: 'Fraccionamiento a medida',
      texto: 'Desde bidones de 5L hasta tanques de 1.000L según el volumen que necesite tu operación.',
      icono: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    },
  ];
}
