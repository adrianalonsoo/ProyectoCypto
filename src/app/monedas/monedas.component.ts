import { Component, EventEmitter, Output } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router } from '@angular/router';
import {Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  RouterModule } from '@angular/router';
@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './monedas.component.html',
  styleUrl: './monedas.component.css'
})
export class MonedasComponent {
  items:any[]=[];
  contenidoInput="";
  buscarmoneda:string="";
  timeoutId:any;
  monedas:any[]=[];
  monedasFollows = new Array();
  moneda!: Object;
  monedasA = new Array();



  @Output() lanzadaPeticionEvent = new EventEmitter<string>();

  @Output() monedaBorrada: EventEmitter<any> = new EventEmitter();

  constructor(public ajax:PeticionesAJAXService,private router:Router,private http: HttpClient){
    if (localStorage.getItem('monedasFollows') != null && localStorage.getItem('monedasFollows') != undefined) {
      this.monedasFollows = JSON.parse(String(localStorage.getItem('monedasFollows')));
      console.log(this.monedasFollows)
    }
  }
  obtenDatos(){
    this.ajax.peticionAJAX();
    this.lanzadaPeticionEvent.emit("btc");
    this.ajax.obtenerDatosFirestore();
  }
  
  buscarMoneda() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.ajax.buscarMoneda(this.buscarmoneda).subscribe((data:any)=>{
        this.monedas=data.coins;
      })
    }, 500);
  }
  

  
  

  monedaClick(moneda: any) {
    this.router.navigate(['detalle/',moneda.item.id]);
  }

  borrarMonedaClick(moneda: Object) {      
    this.monedaBorrada.emit(moneda);  
  }

 




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
