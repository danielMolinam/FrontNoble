import { Component, OnInit } from '@angular/core';
import { TipoPago } from "../../models/tipoPago/tipoPago";
@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.css']
})
export class TipoPagoComponent implements OnInit {
  
  taskTypes = TipoPago;
  taskTypeOptions = [];
  seleccionado;
  constructor() { }

  ngOnInit() {
    this.taskTypeOptions = Object.keys(this.taskTypes);
  }
  tipoDoc(){
    console.log("sel"+ this.seleccionado)
  }
}
