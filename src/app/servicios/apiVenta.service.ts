import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { respuesta } from "models/respuesta";
import { venta } from "models/venta";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Contend-type': 'application/json'
    })
};

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
    RegistrarVentas(venta: venta):Observable<respuesta>{
        return this.http.post<respuesta>(this.url, venta)
    }

}