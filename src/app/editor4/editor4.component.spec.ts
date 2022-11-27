/*
Test cases for the feature comparison page. 
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from '../about/about.component';

import { Editor4Component } from './editor4.component';

describe('Editor4Component', () => {
  let component: Editor4Component;
  let fixture: ComponentFixture<Editor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
      RouterTestingModule.withRoutes(
        [{path: 'about', component: AboutComponent}]
      )
    ],
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

  it('should call the goToPage function', () => {
    const fixture = TestBed.createComponent(Editor4Component);
    const app = fixture.debugElement.componentInstance as Editor4Component;
    fixture.detectChanges();
    spyOn(app, "goToPage").and.callThrough();
    app.goToPage("about");
    expect(app.goToPage).toHaveBeenCalled();
  })
});
