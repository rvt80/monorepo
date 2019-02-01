import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazCmpComponent } from './baz-cmp.component';

describe('BazCmpComponent', () => {
  let component: BazCmpComponent;
  let fixture: ComponentFixture<BazCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
