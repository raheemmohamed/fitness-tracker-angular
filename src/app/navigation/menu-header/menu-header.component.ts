import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  @Output() sideMenuToggle = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.sideMenuToggle.emit();
  }

}
