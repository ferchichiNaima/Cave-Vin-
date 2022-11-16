import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVinComponent } from './update-vin.component';

describe('UpdateVinComponent', () => {
  let component: UpdateVinComponent;
  let fixture: ComponentFixture<UpdateVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
