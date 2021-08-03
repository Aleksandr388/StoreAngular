import { CurencyType } from "../shared/enums/CurencyType"
import { EditionType } from "../shared/enums/EditionType"
import { StatusType } from "../shared/enums/StatusType"

export interface PrintingEditionModel {
    id: number
    title: string
    description: string
    price: number
    status: StatusType
    curency: CurencyType
    type: EditionType
    authors: AuthorsModel[]
}

export class PrintingEditionParameters {
    title!: string
    description!: string
    maxPrice!: number
    minPrice!: number
    type!: EditionType[]
    nameAuthor!: string
    totalAmount!: string
    pageNumber!: number
    pageSize!: number
    isAccesing!: boolean
    sortOrder!: string

}

export interface PrintingEditionResponseModel {
    maxPageSize: number,
    pageNumber: number,
    count: number,
    pageSize: number
    printingEditions: PrintingEditionModel[];
}
export interface AuthorsModel {
    id: number
    name: string
}