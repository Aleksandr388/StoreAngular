import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PrintingEditionParameters, PrintingEditionResponseModel } from "../models/printing-edition.model";

@Injectable({
    providedIn: 'root'
})
export class PrintingEditionService{
    constructor(private http: HttpClient) {
    }

    getEditionsData(editionParams: PrintingEditionParameters | null){
        return this.http.post<PrintingEditionResponseModel>('https://localhost:5001/api/PrintingEdition/Get', editionParams)
    }

}
