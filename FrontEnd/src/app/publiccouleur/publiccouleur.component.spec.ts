import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccouleurComponent } from './publiccouleur.component';

describe('PubliccouleurComponent', () => {
  let component: PubliccouleurComponent;
  let fixture: ComponentFixture<PubliccouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliccouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliccouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
