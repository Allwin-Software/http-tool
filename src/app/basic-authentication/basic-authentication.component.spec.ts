import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthenticationComponent } from './basic-authentication.component';

describe('BasicAuthenticationComponent', () => {
  let component: BasicAuthenticationComponent;
  let fixture: ComponentFixture<BasicAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
