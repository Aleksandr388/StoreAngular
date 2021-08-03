import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { PrintingEditionModel, PrintingEditionParameters } from 'src/app/models/printing-edition.model';
import { GetEditionsData } from 'src/app/store/actions/printing-edition.action';
import { PrintingEditionState } from 'src/app/store/states/printing-edition.state';

@Component({
  selector: 'app-printing-edition-page',
  templateUrl: './printing-edition-page.component.html',
  styleUrls: ['./printing-edition-page.component.css']
})
export class PrintingEditionPageComponent implements OnInit {

  pageParams !: PrintingEditionParameters;
  printingEditionList !: PrintingEditionModel[];

  constructor(private store: Store,) {
    this.store.select(PrintingEditionState.getPageParams).subscribe(
      (res) => {
        debugger
        if (res === null) {
          this.pageParams = {
            description: "",
            isAccesing: false,
            minPrice: 0.1,
            maxPrice: 50000,
            nameAuthor: "",
            sortOrder: "CreationDate",
            title: "",
            pageNumber: 1,
            pageSize: 50,
            totalAmount: "",
            type: [1, 2, 3]
          }
        }
      }
    )
  };

  ngOnInit(): void {
    this.getPage();
  }


  getPage() {
    debugger
    this.store.dispatch(new GetEditionsData(this.pageParams));

    this.store.select(PrintingEditionState.printingEdition).subscribe(
      (editionPage) => {
        this.printingEditionList = editionPage!;
      })
  }
}
