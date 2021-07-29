import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingEditionPageComponent } from './printing-edition-page.component';

describe('PrintingEditionPageComponent', () => {
  let component: PrintingEditionPageComponent;
  let fixture: ComponentFixture<PrintingEditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingEditionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingEditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
