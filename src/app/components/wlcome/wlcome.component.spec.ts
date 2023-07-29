import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlcomeComponent } from './wlcome.component';

describe('WlcomeComponent', () => {
  let component: WlcomeComponent;
  let fixture: ComponentFixture<WlcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WlcomeComponent]
    });
    fixture = TestBed.createComponent(WlcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
