import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAreeComponent } from './p-aree.component';

describe('PAreeComponent', () => {
  let component: PAreeComponent;
  let fixture: ComponentFixture<PAreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PAreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PAreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
