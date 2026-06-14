import { Component } from '@angular/core';

interface Feature {
  title: string;
  text: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {
  readonly features: Feature[] = [
    { title: 'Fabricación propia',     text: 'Producción y fraccionamiento en planta propia con control de calidad en cada etapa.' },
    { title: 'Distribución nacional',  text: 'Entregamos en todo el país, con logística ágil y pedidos a medida.' },
    { title: 'Asesoramiento técnico',  text: 'Nuestro equipo orienta al cliente en la elección y aplicación correcta del producto.' },
    { title: 'Registros ANMAT/SENASA', text: 'Productos con registros habilitantes para uso alimentario, hospitalario e industrial.' },
  ];
}
