import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendbooksComponent } from './recomendbooks.component';

describe('RecomendbooksComponent', () => {
  let component: RecomendbooksComponent;
  let fixture: ComponentFixture<RecomendbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomendbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
