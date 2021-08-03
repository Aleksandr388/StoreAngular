import { PrintingEditionParameters } from "src/app/models/printing-edition.model";

export class GetEditionsData{
    static readonly type = '[PrintingEdition] GetEditionsData';

    constructor (public params : PrintingEditionParameters){};
}