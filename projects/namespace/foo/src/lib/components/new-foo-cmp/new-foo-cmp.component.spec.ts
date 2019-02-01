import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFooCmpComponent } from './new-foo-cmp.component';

describe('NewFooCmpComponent', () => {
  let component: NewFooCmpComponent;
  let fixture: ComponentFixture<NewFooCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFooCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFooCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
