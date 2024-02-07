import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejdirectivangclass',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './ejdirectivangclass.component.html',
  styleUrl: './ejdirectivangclass.component.css'
})
export class EjdirectivangclassComponent {
  puntuacion !: number;
}
