import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartappComponent } from './flipkartapp.component';

describe('FlipkartappComponent', () => {
  let component: FlipkartappComponent;
  let fixture: ComponentFixture<FlipkartappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
