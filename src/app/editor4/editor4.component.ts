import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editor',
  templateUrl: './editor4.component.html',
  styleUrls: ['./editor4.component.scss']
})
export class Editor4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * a function to navigate to a page specified by page. 
   * @param page the route to navigate to. Please see app-routing.module.ts for a list
   * of all routes in the application. 
   */
  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }

}