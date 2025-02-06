import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLaunchComponent } from './upcoming-launch.component';

describe('UpcomingLaunchComponent', () => {
  let component: UpcomingLaunchComponent;
  let fixture: ComponentFixture<UpcomingLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingLaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
