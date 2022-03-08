import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvastrankaComponent } from './prvastranka.component';

describe('PrvastrankaComponent', () => {
  let component: PrvastrankaComponent;
  let fixture: ComponentFixture<PrvastrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvastrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvastrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
