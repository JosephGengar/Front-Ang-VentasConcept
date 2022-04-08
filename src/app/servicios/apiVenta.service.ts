import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { respuesta } from "models/respuesta";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiVentaService{

    url: string = "https://localhost:44382/api/Venta";
    constructor(private http: HttpClient){

    }

    ObtenerVentas():Observable<respuesta>{
        return this.http.get<respuesta>(this.url);
    }
}