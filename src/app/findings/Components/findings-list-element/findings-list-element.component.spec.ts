import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingsListElementComponent } from './findings-list-element.component';

describe('FindingsListElementComponent', () => {
  let component: FindingsListElementComponent;
  let fixture: ComponentFixture<FindingsListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindingsListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
