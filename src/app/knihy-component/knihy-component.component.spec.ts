import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihyComponentComponent } from './knihy-component.component';

describe('KnihyComponentComponent', () => {
  let component: KnihyComponentComponent;
  let fixture: ComponentFixture<KnihyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
