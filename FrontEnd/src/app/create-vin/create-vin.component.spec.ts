import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVinComponent } from './create-vin.component';

describe('CreateVinComponent', () => {
  let component: CreateVinComponent;
  let fixture: ComponentFixture<CreateVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
