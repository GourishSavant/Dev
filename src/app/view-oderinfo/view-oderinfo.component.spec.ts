import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOderinfoComponent } from './view-oderinfo.component';

describe('ViewOderinfoComponent', () => {
  let component: ViewOderinfoComponent;
  let fixture: ComponentFixture<ViewOderinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOderinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
