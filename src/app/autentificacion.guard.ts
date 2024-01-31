import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { PeticionesAJAXService } from './peticiones-ajax.service';

 

@Injectable({

  providedIn: 'root'

})

export class autentificacionGuard {

 

  constructor (public ajax : PeticionesAJAXService,

               public router: Router) {}

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

 

      if (!this.ajax.logueado) {
        console.log("No te dejo pasar...")
        return false;

      }else{
        return true;
      }

      

  }

}