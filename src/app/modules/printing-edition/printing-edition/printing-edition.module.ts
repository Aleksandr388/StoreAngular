import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintingEditionPageComponent } from 'src/app/components/printing-edition/printing-edition-page/printing-edition-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrintingEditionPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PrintingEditionModule { 
  
}
