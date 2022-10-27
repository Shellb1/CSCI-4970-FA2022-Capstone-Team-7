import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editor4Component } from './editor4.component';

describe('Editor4Component', () => {
  let component: Editor4Component;
  let fixture: ComponentFixture<Editor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editor4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
