// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ListviewComponent } from './listview.component';

// describe('ListviewComponent', () => {
//   let component: ListviewComponent;
//   let fixture: ComponentFixture<ListviewComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ListviewComponent]
//     });
//     fixture = TestBed.createComponent(ListviewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewComponent } from './listview.component';

describe('ListviewComponent', () => {
  let component: ListviewComponent;
  let fixture: ComponentFixture<ListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
