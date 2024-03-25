import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStidioComponent } from './about-stidio.component';

describe('AboutStidioComponent', () => {
  let component: AboutStidioComponent;
  let fixture: ComponentFixture<AboutStidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutStidioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutStidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
