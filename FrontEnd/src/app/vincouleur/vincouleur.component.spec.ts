import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincouleurComponent } from './vincouleur.component';

describe('VincouleurComponent', () => {
  let component: VincouleurComponent;
  let fixture: ComponentFixture<VincouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
