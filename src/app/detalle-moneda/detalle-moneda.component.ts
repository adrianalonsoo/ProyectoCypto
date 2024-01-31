import { Component,Input, inject,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalle-moneda',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './detalle-moneda.component.html',
  styleUrl: './detalle-moneda.component.css'
})
export class DetalleMonedaComponent implements OnInit{
  @Input()id:string="";
  moneda: any;
  private route = inject(ActivatedRoute);
  constructor(private PeticionesAJAXService: PeticionesAJAXService, private router:Router){}
  ngOnInit(){
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.id);
    //peticion ajax con el detalle
    this.PeticionesAJAXService.getCoinDetalle(this.id).subscribe((data:any)=>{
      //console.log(data);
      this.moneda = data;
    })
  }
}
