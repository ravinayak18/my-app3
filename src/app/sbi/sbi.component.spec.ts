import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiComponent } from './sbi.component';

describe('SbiComponent', () => {
  let component: SbiComponent;
  let fixture: ComponentFixture<SbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
