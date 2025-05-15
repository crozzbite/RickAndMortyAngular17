import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyModalComponent } from './rick-and-morty-modal.component';

describe('RickAndMortyModalComponent', () => {
  let component: RickAndMortyModalComponent;
  let fixture: ComponentFixture<RickAndMortyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickAndMortyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
