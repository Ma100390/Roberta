import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHomePageComponent } from './p-home-page.component';

describe('PHomePageComponent', () => {
  let component: PHomePageComponent;
  let fixture: ComponentFixture<PHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
