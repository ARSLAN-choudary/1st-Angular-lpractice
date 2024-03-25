import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainSectionComponent } from './mountain-section.component';

describe('MountainSectionComponent', () => {
  let component: MountainSectionComponent;
  let fixture: ComponentFixture<MountainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MountainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
