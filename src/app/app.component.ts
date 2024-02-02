import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { MonedasComponent } from './monedas/monedas.component';
import { Input } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabeceraComponent,CuerpoComponent,NgbAlertModule,DetalleMonedaComponent,MonedasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //local Storage
  constructor() {
    if (localStorage.getItem('monedasFollows') != null && localStorage.getItem('monedasFollows') != undefined) {
      this.monedasFollows = JSON.parse(String(localStorage.getItem('monedasFollows')));
      console.log(this.monedasFollows)
    }

  }
  title = 'ProyectoCrypto';
  //prueba
  trataEventoDeHijo(datoRecibido:string){
    console.log("salta evento= "+datoRecibido);
  }
  monedasFollows = new Array();
  moneda!: Object;
  monedas = new Array();


  

  add(moneda: any) {
    if (!this.monedasFollows.find(x => x.id === moneda.id)) {
      this.monedasFollows.push(moneda);
      localStorage.setItem('monedasFollows', JSON.stringify(this.monedasFollows));
    }
  }

  borrar(moneda: any) {
    let i = this.monedasFollows.findIndex(x => x.id === moneda.id);
    this.monedasFollows.splice(i, 1);
    localStorage.setItem('monedasFollows', JSON.stringify(this.monedasFollows));
  }
}

