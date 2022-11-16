import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VinDetailsComponent } from './vin-details.component';



describe('VinDetailsComponent', () => {
  let component: VinDetailsComponent;
  let fixture: ComponentFixture<VinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
