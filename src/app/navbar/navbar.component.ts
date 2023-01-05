import { Component, OnInit } from '@angular/core';
import * as WOW from 'wow.js/dist/wow';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    var $nav = $("#navbar-row");
    $nav.toggleClass('scrolled', $(window).scrollTop() > $nav.height());
    $nav.toggleClass('mat-elevation-z3', $(window).scrollTop() > $nav.height());
  };

  ngAfterViewInit() {
    new WOW().init();
  }

}
