import { Component } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodelo',
  standalone: true,
  imports: [],
  templateUrl: './viewmodelo.component.html',
  styleUrl: './viewmodelo.component.css'
})
export class ViewmodeloComponent {
  alumno1 = new Alumno (1, 'Juan', 'Gutiérrez', 'Madrid');
}
