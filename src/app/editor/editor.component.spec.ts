import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from '../about/about.component';

import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
      RouterTestingModule.withRoutes(
        [{path: 'about', component: AboutComponent}]
      )
    ],
      declarations: [ EditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the goToPage function', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    const app = fixture.debugElement.componentInstance as EditorComponent;
    fixture.detectChanges();
    spyOn(app, "goToPage").and.callThrough();
    app.goToPage("about");
    expect(app.goToPage).toHaveBeenCalled();
  })
});