import { Routes } from '@angular/router';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { autentificacionGuard } from './autentificacion.guard';
import { MonedasComponent } from './monedas/monedas.component';
export const routes: Routes = [
    {path: '', component: CuerpoComponent},
    { path: "Cuerpo",component:CuerpoComponent,canActivate:[autentificacionGuard]},
    { path: 'detalle', component: DetalleMonedaComponent,canActivate:[autentificacionGuard]},
    { path: 'detalle/:id', component: DetalleMonedaComponent,canActivate:[autentificacionGuard]},
    { path: 'monedas', component: MonedasComponent,canActivate:[autentificacionGuard]},
   
];
