/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GilComponent } from './gil.component';

describe('GilComponent', () => {
  let component: GilComponent;
  let fixture: ComponentFixture<GilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
