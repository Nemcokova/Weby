import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickyComponent } from './vypozicky.component';

describe('VypozickyComponent', () => {
  let component: VypozickyComponent;
  let fixture: ComponentFixture<VypozickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
