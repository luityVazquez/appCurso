import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejdirectivangstyle',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrl: './ejdirectivangstyle.component.css'
})
export class EjdirectivangstyleComponent {

  puntuacion !: number;

  constructor() {
  }

  ngOnInit() {
  }

  setColor() {
            return this.puntuacion >= 5 ? 'green' : 'red';    (1)
  }
}
