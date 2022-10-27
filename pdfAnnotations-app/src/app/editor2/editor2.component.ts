import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editor',
  templateUrl: './editor2.component.html',
  styleUrls: ['./editor2.component.scss']
})
export class Editor2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }

}