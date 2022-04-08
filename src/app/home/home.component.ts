import { Component, OnInit } from '@angular/core';
import { ApiVentaService } from '../servicios/apiVenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lst: any;
  public columns: string[] = ['Id', 'Nombre', 'Fecha', 'Total']

  constructor(private apiVenta: ApiVentaService) { }

  ngOnInit(): void {
    this.DevolucionDatos();
  }

  DevolucionDatos(){
    this.apiVenta.ObtenerVentas().subscribe(resp => {
      if(resp.exito == 1){
        this.lst = resp.data;
      }
    })
  }

}
