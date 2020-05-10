import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotaVenta } from "../../models/notaVenta/notaVenta";
import { ServiceXmlService } from "../../services/xmlService/service-xml.service";
import { Router } from '@angular/router';
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';
@Component({
  selector: 'app-ingreso-nota',
  templateUrl: './ingreso-nota.component.html',
  styleUrls: ['./ingreso-nota.component.css']
})
export class IngresoNotaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  notaVenta: '';

  notaV: NotaVenta = {
    notaVenta: '',
    cliente: '',
    fecha:'',
    montoTotal: 0
  };

  constructor(private formBuilder: FormBuilder, private serviceXmlService: ServiceXmlService, private router: Router, private sweetAlertService: SweetAlertService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      notaVenta: ['', [Validators.required]],
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.getNotaVenta();
  }
  async getNotaVenta(){
    var response = await this.serviceXmlService.getNotaVenta(this.registerForm.value.notaVenta);
    if(response['status']){
      localStorage.setItem("detalle", JSON.stringify(response));
      this.router.navigate(['/detalleCompra']);
    }
    else{
      this.sweetAlertService.swalErrorM("Ha ocurrido un problema, intentelo nuevamente");
    }
  }
}
