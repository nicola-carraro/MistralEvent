import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isMobile: boolean = false;

  constructor() { }
  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.isMobile = true;
    }
  }

}
