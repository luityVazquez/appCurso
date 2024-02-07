import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  standalone: true,
  imports: [NgFor, NgSwitchCase, NgSwitch],
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrl: './ejdirectivangswitch.component.css'
})
export class EjdirectivangswitchComponent {
  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'}
 ]
}
