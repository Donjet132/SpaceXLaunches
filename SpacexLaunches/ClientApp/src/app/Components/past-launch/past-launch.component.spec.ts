import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunchComponent } from './past-launch.component';

describe('PastLaunchComponent', () => {
  let component: PastLaunchComponent;
  let fixture: ComponentFixture<PastLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastLaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
