import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosproducteursComponent } from './nosproducteurs.component';

describe('NosproducteursComponent', () => {
  let component: NosproducteursComponent;
  let fixture: ComponentFixture<NosproducteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosproducteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosproducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
