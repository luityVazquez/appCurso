import { Component } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  standalone: true,
  imports: [],
  templateUrl: './ejmetodo.component.html',
  styleUrl: './ejmetodo.component.css'
})
export class EjmetodoComponent {
  puntuacion = 9;

  getPuntuacion() {
         return this.puntuacion;
  }
}
