import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}
