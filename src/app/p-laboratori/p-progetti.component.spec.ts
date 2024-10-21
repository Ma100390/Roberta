import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PProgettiComponent } from './p-progetti.component';

describe('PProgettiComponent', () => {
  let component: PProgettiComponent;
  let fixture: ComponentFixture<PProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PProgettiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
