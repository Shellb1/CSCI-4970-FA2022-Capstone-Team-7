/*
Component for the about page. Not much logic is happening here besides the goToPage function, 
which provides the mechanism to go back to the home page. 
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }

}
