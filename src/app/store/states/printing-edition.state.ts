import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { PrintingEditionModel, PrintingEditionParameters, PrintingEditionResponseModel } from "src/app/models/printing-edition.model";
import { PrintingEditionService } from "src/app/services/printing-edition.service";
import { GetEditionsData } from "../actions/printing-edition.action";

export interface PrintingEditionStateModel {
    printingEditionPage: PrintingEditionResponseModel | null
    printingEdition: PrintingEditionModel | null
    editionPageParametrs: PrintingEditionParameters | null
}

@State<PrintingEditionStateModel>({

    name: "PrintingEdition",
    defaults: {
        printingEditionPage: null,
        printingEdition: null,
        editionPageParametrs: null
    }
})

@Injectable()
export class PrintingEditionState {

    constructor(private printingEditionService: PrintingEditionService, private router: Router) { }

    @Selector()
    static printingEdition(state: PrintingEditionStateModel){
        debugger
        return state.printingEditionPage?.printingEditions;
    }
    @Selector() static getPageParams (state:PrintingEditionStateModel){
        return state!.editionPageParametrs;
    }

    
    @Action(GetEditionsData)
    getEditionsData(ctx: StateContext<PrintingEditionStateModel>, action: GetEditionsData) {
        debugger
        return this.printingEditionService.getEditionsData(action.params).pipe(
            tap((result: PrintingEditionResponseModel) => {
                let response = Object.values(result);
                ctx.patchState({
                    printingEditionPage:{
                        maxPageSize: response[2],
                        pageNumber: response[3],
                        count: response[4],
                        pageSize: response[5],
                        printingEditions : response[1]
                }})
            })
        );
    }
}