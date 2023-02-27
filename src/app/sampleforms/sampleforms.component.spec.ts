import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleformsComponent } from './sampleforms.component';

describe('SampleformsComponent', () => {
  let component: SampleformsComponent;
  let fixture: ComponentFixture<SampleformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
