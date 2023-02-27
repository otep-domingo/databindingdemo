import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecalculatorComponent } from './simplecalculator.component';

describe('SimplecalculatorComponent', () => {
  let component: SimplecalculatorComponent;
  let fixture: ComponentFixture<SimplecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplecalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
