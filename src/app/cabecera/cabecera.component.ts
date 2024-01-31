import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  constructor(public ajax:PeticionesAJAXService,private router:Router){

  }
  iniciaSesion(){
    this.ajax.iniciarSesion();
  }

  github(){
    this.ajax.GitHubInicio();
  }
}
