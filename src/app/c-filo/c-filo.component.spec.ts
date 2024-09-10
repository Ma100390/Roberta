import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFiloComponent } from './c-filo.component';

describe('CFiloComponent', () => {
  let component: CFiloComponent;
  let fixture: ComponentFixture<CFiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFiloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CFiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
