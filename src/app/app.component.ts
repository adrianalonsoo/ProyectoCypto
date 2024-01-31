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
  constructor() {
    if (localStorage.getItem('monedasVigiladas') != null && localStorage.getItem('monedasVigiladas') != undefined) {
      this.monedasVigiladas = JSON.parse(String(localStorage.getItem('monedasVigiladas')));
      console.log(this.monedasVigiladas)
    }

  }
  title = 'ProyectoCrypto';
  trataEventoDeHijo(datoRecibido:string){
    console.log("salta evento= "+datoRecibido);
  }
  monedasVigiladas = new Array();
  moneda!: Object;
  monedas = new Array();


  

  addToSelected(moneda: any) {
    if (!this.monedasVigiladas.find(x => x.id === moneda.id)) {
      this.monedasVigiladas.push(moneda);
      localStorage.setItem('monedasVigiladas', JSON.stringify(this.monedasVigiladas));
    }
  }

  deleteCoin(moneda: any) {
    let i = this.monedasVigiladas.findIndex(x => x.id === moneda.id);
    this.monedasVigiladas.splice(i, 1);
    localStorage.setItem('monedasVigiladas', JSON.stringify(this.monedasVigiladas));
  }
}

