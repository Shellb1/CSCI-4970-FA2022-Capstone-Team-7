/*
Test cases for the about page. Mainly checking to see the component can be created and 
the goPage functionality is working as expected. 
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
      RouterTestingModule.withRoutes(
        [{path: 'home', component: HomeComponent}]
      )
    ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the goToPage function', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.debugElement.componentInstance as AboutComponent;
    fixture.detectChanges();
    spyOn(app, "goToPage").and.callThrough();
    app.goToPage("home");
    expect(app.goToPage).toHaveBeenCalled();
  })
});
