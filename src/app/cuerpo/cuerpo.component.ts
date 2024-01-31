import { Component, EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  items:any[]=[];
  contenidoInput="";
  @Output() lanzadaPeticionEvent = new EventEmitter<string>();
  constructor(public ajax:PeticionesAJAXService,private router:Router){

  }

  iniciaSesion(){
    this.ajax.iniciarSesion();
  }

}