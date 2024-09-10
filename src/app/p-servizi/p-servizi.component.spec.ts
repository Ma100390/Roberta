import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PServiziComponent } from './p-servizi.component';

describe('PServiziComponent', () => {
  let component: PServiziComponent;
  let fixture: ComponentFixture<PServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PServiziComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
