// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AboutComponent } from "../about/about.component";
import { Editor3Component } from "./editor3.component";

describe("Editor3Component", () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
         imports: [
      RouterTestingModule.withRoutes(
        [{path: 'about', component: AboutComponent}]
      )
    ],
        declarations: [],
      }).compileComponents();
    })
  );

  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(Editor3Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get CoreControls', (done: DoneFn) => {
    const fixture = TestBed.createComponent(Editor3Component);
    const app = fixture.debugElement.componentInstance as Editor3Component;
    fixture.detectChanges();
    spyOn(app.coreControlsEvent, 'emit');
    app.getDocumentLoadedObservable().subscribe(() => {
      expect(app.coreControlsEvent.emit).toHaveBeenCalledWith('Single');
      done();
    });
  });

  it('should call the goToPage function', () => {
    const fixture = TestBed.createComponent(Editor3Component);
    const app = fixture.debugElement.componentInstance as Editor3Component;
    fixture.detectChanges();
    spyOn(app, "goToPage").and.callThrough();
    app.goToPage("about");
    expect(app.goToPage).toHaveBeenCalled();
  })

});