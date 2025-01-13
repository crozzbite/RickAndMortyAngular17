import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponentComponent } from './error-message-component.component';

describe('ErrorMessageComponentComponent', () => {
  let component: ErrorMessageComponentComponent;
  let fixture: ComponentFixture<ErrorMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
