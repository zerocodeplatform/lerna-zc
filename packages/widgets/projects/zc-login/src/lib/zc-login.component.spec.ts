import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcLoginComponent } from './zc-login.component';

describe('ZcLoginComponent', () => {
  let component: ZcLoginComponent;
  let fixture: ComponentFixture<ZcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
