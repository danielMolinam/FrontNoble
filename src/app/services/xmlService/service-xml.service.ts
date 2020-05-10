import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceXmlService {

  apiUrl: string;
  //headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  status: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://localhost:44345/api/NotaVenta';
  }
  async getNotaVenta(req) {
    try {
      var request = {
        "NotaVenta": req
      };
      return await this.http.post(`${this.apiUrl}/ConsultaNota`, request, { headers: this.headers }).toPromise()
    } catch (error) {
      let resultado =
      {
        'status': false,
        'data': 'error al ejeceutar petición',
        'codeStatus': error.status
      };
      return resultado;
    }   
  }
}
