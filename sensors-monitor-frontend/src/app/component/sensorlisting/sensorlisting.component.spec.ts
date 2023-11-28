import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorlistingComponent } from './sensorlisting.component';

describe('SensorlistingComponent', () => {
  let component: SensorlistingComponent;
  let fixture: ComponentFixture<SensorlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorlistingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SensorlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
