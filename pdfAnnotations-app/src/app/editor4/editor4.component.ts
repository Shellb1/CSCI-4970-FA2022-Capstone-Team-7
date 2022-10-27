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
  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }

}