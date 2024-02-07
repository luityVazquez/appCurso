import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, NgFor],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  valorPadre: string = 'Este texto se inyecta desde el padre';

  avisos: string[] = ['Aviso 1' , 'Aviso 2' , 'Aviso 3'];
  texto !: string;

  mostrarMensaje(event: any) {
    this.texto = event + ' marcado como leido';
  }
}
