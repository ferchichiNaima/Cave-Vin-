import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosvincompteComponent } from './nosvincompte.component';

describe('NosvincompteComponent', () => {
  let component: NosvincompteComponent;
  let fixture: ComponentFixture<NosvincompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosvincompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosvincompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
