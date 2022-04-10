import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { venta } from "models/venta";
import { ApiVentaService } from "src/app/servicios/apiVenta.service";
import { conceptos } from "models/conceptos";

@Component({
    templateUrl: 'dialog.component.html',   
})

export class DialogComponent{
    public ventas: venta;
    public form = this.formb.group({
        Cantidad: [0, Validators.required],
        PrecioUnitario: [0, Validators.required],
    });
    public concepts: conceptos[];
    public nombre: string;

    constructor(private apiVenta: ApiVentaService,
                private dialgoRef: MatDialogRef<DialogComponent>,
                private snackbar: MatSnackBar,
                private formb: FormBuilder){
                    this.ventas = {Nombrecliente: "", Conceptos: []};
                    this.concepts = [];
                    this.nombre = "";
    }

    close(){
        this.dialgoRef.close();
    }

    SubirConcepto(){
        this.concepts.push(this.form.value);
    }

    RealizarVenta(){
        this.ventas.Conceptos = this.concepts;
        this.ventas.Nombrecliente = this.nombre;
        this.apiVenta.RegistrarVentas(this.ventas).subscribe(resp => {
            if(resp.exito == 1){
                this.close();
                this.snackbar.open('Venta Agregada con exito!!', '', {duration: 2000});
                console.log(this.ventas.Nombrecliente);
                console.log(this.ventas.Conceptos)
            }
            else{
                console.log(resp.mensajes);
                console.log(this.ventas.Nombrecliente);
                console.log(this.ventas.Conceptos);
            }
        })
    }
}