import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ejdirectivangfor.component.html',
  styleUrl: './ejdirectivangfor.component.css'
})
export class EjdirectivangforComponent {
  cursos: string[];

  constructor() {
           this.cursos = ['Angular', 'HTML', 'CSS', 'JavaScript'];
  }

  ngOnInit() {
  }
}
