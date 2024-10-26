import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule aquí
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Lógica del componente aquí
  onSubmit(form: any) {
    // Manejo de envío de formulario
    console.log('Formulario enviado:', form);
  }
}
