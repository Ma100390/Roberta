import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PContattiComponent } from './p-contatti.component';

describe('PContattiComponent', () => {
  let component: PContattiComponent;
  let fixture: ComponentFixture<PContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PContattiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
