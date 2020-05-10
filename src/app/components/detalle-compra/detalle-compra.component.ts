import { Component, OnInit } from '@angular/core';
import { ServiceXmlService } from "../../services/xmlService/service-xml.service";
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import { NotaVenta } from "../../models/notaVenta/notaVenta";
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  
  ItemArrayC;
  ItemsArray;
  frmDetalle: FormGroup;

  notaV: NotaVenta = {
    notaVenta: '',
    cliente: '',
    fecha:'',
    montoTotal: 0
  };

  constructor(private serviceXmlService: ServiceXmlService,private fb: FormBuilder, private sweetAlertService: SweetAlertService, private router: Router) {
    this.frmDetalle = this.fb.group({
      checkArray: this.fb.array([])
    });
   }

  ngOnInit() {
    this.getDetalle();
  }

  async getDetalle(){
    var response = JSON.parse(localStorage.getItem("detalle"));
    console.log("response" + JSON.stringify(response));
    
    response['dataD'].forEach(element => {
      element.cantidad = element.cantidad.split('.')[0];
      element.totalProd = element.totalProd.split('.')[0];
    });  
    this.ItemArrayC = response['dataC'];
    this.notaV.cliente = this.ItemArrayC['cliente']; 
    this.notaV.fecha = this.ItemArrayC['fecha'];
    this.notaV.montoTotal = 0;//this.ItemArrayC['total'].split('.')[0];
    this.ItemsArray =  response['dataD'];   
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.frmDetalle.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.notaV.montoTotal = 0;
    for (let index = 0; index < checkArray.length; index++) {
      this.notaV.montoTotal = this.notaV.montoTotal +  parseInt(checkArray.value[index]);
    }
  }
 submitForm(){
  this.router.navigate(['/tipoPago']);
 }
}
