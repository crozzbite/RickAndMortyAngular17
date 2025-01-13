import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyItemsComponent } from './rickandmorty-items.component';

describe('RickandmortyItemsComponent', () => {
  let component: RickandmortyItemsComponent;
  let fixture: ComponentFixture<RickandmortyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandmortyItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickandmortyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
