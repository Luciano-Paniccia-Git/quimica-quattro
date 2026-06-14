import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactForm {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  producto: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  // ⚠️ Reemplazá con tus datos de emailjs.com
  private readonly SERVICE_ID  = 'YOUR_SERVICE_ID';
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

  send(form: ContactForm): Promise<void> {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        from_name:     form.nombre,
        from_empresa:  form.empresa,
        from_email:    form.email,
        from_telefono: form.telefono,
        producto:      form.producto,
        message:       form.mensaje,
      },
      this.PUBLIC_KEY
    ).then(() => undefined);
  }
}
