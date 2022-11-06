/*
Test cases for the PSPDFKIT part of the site. 
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from '../about/about.component';

import { Editor2Component } from './editor2.component';

describe('Editor2Component', () => {
  let component: Editor2Component;
  let fixture: ComponentFixture<Editor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
      RouterTestingModule.withRoutes(
        [{path: 'about', component: AboutComponent}]
      )
    ],
      declarations: [ Editor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the goToPage function', () => {
    const fixture = TestBed.createComponent(Editor2Component);
    const app = fixture.debugElement.componentInstance as Editor2Component;
    fixture.detectChanges();
    spyOn(app, "goToPage").and.callThrough();
    app.goToPage("about");
    expect(app.goToPage).toHaveBeenCalled();
  })
});
