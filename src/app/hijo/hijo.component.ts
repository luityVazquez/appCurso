import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input() aviso !: string;  
     constructor() { }
     ngOnInit() {  }

     leido: boolean = false;
     mensaje !: string;
     
     marcar() {
         this.leido = !this.leido;
     }

     detectar(event: any) {
      this.mensaje = this.aviso;
      this.mensajeMarcado.emit(this.mensaje);
    }

     @Output() mensajeMarcado = new EventEmitter();
}
