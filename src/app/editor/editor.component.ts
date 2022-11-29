/*
Component for the PDF.js page. Main functionality here includes the "goToPage" function,
which allows the page to go back to the previous page. 
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * Navigates to the page specified by page. 
   * @param page the route, in string form, to navigate to. Please see the app-routing.module.ts for a list of 
   * all routes.
   */
  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }

}