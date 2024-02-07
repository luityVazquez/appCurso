import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { MenuitemDirective } from './menuitem.directive';
import { PadreComponent } from './padre/padre.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CopyrightComponent, EjdirectivangswitchComponent, ViewmodeloComponent, 
    EjmetodoComponent, EjpropertybindingComponent, EjeventbindingComponent, Ej2waybindingComponent, 
    EjdirectivangifComponent, EjdirectivangstyleComponent, EjdirectivangclassComponent, 
    EjdirectivangforComponent, ArrayobjetosComponent, MenuitemDirective, EjmidirectivaComponent,
    PadreComponent, FechaactualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCurso';
  destino: string='Universo';
}
