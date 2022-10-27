import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editor3Component } from './editor3.component';

describe('Editor3Component', () => {
  let component: Editor3Component;
  let fixture: ComponentFixture<Editor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editor3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
