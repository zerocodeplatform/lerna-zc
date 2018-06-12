import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcMenuComponent } from './zc-menu.component';

describe('ZcMenuComponent', () => {
  let component: ZcMenuComponent;
  let fixture: ComponentFixture<ZcMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
