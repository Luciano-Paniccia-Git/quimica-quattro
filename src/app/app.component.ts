import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductsComponent } from './components/products/products.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, NosotrosComponent, ProductsComponent, VentajasComponent, ContactoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quimica-quattro';
}
