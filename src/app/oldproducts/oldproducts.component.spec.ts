import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldproductsComponent } from './oldproducts.component';

describe('OldproductsComponent', () => {
  let component: OldproductsComponent;
  let fixture: ComponentFixture<OldproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
