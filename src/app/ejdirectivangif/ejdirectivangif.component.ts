import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejdirectivangif',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './ejdirectivangif.component.html',
  styleUrl: './ejdirectivangif.component.css'
})
export class EjdirectivangifComponent {
  nombre !: string; //En Angular 13 para declarar sin inicializar usamos !:

  capital !: string;   

  constructor() {
  }

  ngOnInit() {
  }

  setResultado(){
     return this.capital === "Sevilla" ? true : false;
  }
}
