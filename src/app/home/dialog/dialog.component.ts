import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ApiVentaService } from "src/app/servicios/apiVenta.service";

@Component({
    templateUrl: 'dialog.component.html',   
})

export class DialogComponent{

    constructor(private apiVenta: ApiVentaService,
                private dialgoRef: MatDialogRef<DialogComponent>){

    }

    close(){
        this.dialgoRef.close();
    }
}