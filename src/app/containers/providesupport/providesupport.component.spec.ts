import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidesupportComponent } from './providesupport.component';

describe('ProvidesupportComponent', () => {
  let component: ProvidesupportComponent;
  let fixture: ComponentFixture<ProvidesupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidesupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidesupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
