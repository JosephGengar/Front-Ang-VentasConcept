import { Component, OnInit } from '@angular/core';
import { ApiVentaService } from '../servicios/apiVenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lst: any;
  public columnas: string[] = ['Id', 'Nombre', 'Fecha', 'Total'];

  constructor(private apiVenta: ApiVentaService) { }

  ngOnInit(): void {
    this.DevolucionDatos();
  }

  DevolucionDatos(){
    this.apiVenta.ObtenerVentas().subscribe(resp => {
        this.lst = resp.data;
      });
    }
}
