import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
//import { WOW } from 'wowjs/dist/wow.js';
import { NgwWowService } from 'ngx-wow';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
   
  }
  constructor(private wowService: NgwWowService, private router: Router) {
    this.wowService.init();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.router.events
          .subscribe((event) => {
            $.getScript('assets/js/main.js');
          });
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
      }
    });
  }

}
