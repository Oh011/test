import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookproComponent } from './bookpro.component';

describe('BookproComponent', () => {
  let component: BookproComponent;
  let fixture: ComponentFixture<BookproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
