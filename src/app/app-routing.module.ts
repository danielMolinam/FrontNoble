import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagoComponent } from './components/pago/pago.component';
import { PagoEfectivoComponent } from './components/pago-efectivo/pago-efectivo.component';
import { IngresoNotaComponent } from './components/ingreso-nota/ingreso-nota.component';
import { DetalleCompraComponent } from "./components/detalle-compra/detalle-compra.component";
import { TipoPagoComponent } from "./components/tipo-pago/tipo-pago.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: IngresoNotaComponent },
  { path: 'detalleCompra', component: DetalleCompraComponent },
  { path: 'tipoPago', component: TipoPagoComponent},
  { path: 'inicioPago', component: PagoComponent},
  { path: 'efectivo', component: PagoEfectivoComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
