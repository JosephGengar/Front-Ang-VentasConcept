import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiVentaService } from '../servicios/apiVenta.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lst: any;
  public columnas: string[] = ['Id', 'Nombre', 'Fecha', 'Total'];

  constructor(private apiVenta: ApiVentaService,
              private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.DevolucionDatos();
  }

  DevolucionDatos(){
    this.apiVenta.ObtenerVentas().subscribe(resp => {
        this.lst = resp.data;
      });
    }

  OpenDialog(){
    const dialog = this.dialogRef.open(DialogComponent, {
      width: '650px',
      height:'400px',
    })
  }
}
