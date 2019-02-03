import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {
  @Output() closeSideMenuBar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSideMenu() {
    this.closeSideMenuBar.emit();
  }
}
