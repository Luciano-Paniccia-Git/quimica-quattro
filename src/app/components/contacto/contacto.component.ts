import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  private fb    = inject(FormBuilder);
  private email = inject(EmailService);

  enviando  = signal(false);
  enviado   = signal(false);
  error     = signal(false);

  form = this.fb.group({
    nombre:   ['', Validators.required],
    empresa:  [''],
    email:    ['', [Validators.required, Validators.email]],
    telefono: [''],
    producto: [''],
    mensaje:  ['', Validators.required],
  });

  async enviar(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.error.set(false);

    try {
      await this.email.send(this.form.value as any);
      this.enviado.set(true);
      this.form.reset();
    } catch {
      this.error.set(true);
    } finally {
      this.enviando.set(false);
    }
  }

  isInvalid(campo: string): boolean {
    const c = this.form.get(campo);
    return !!(c?.invalid && c?.touched);
  }
}
