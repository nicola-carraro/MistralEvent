import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCog, faDoorOpen, faFilm, faGlassCheers, faMapSigns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isMobile: boolean = false;
  calendarAltIcon = faCalendarAlt;
  glassCheersIcon = faGlassCheers;
  mapSignsIcon = faMapSigns;
  cogIcon = faCog;
  exitIcon = faDoorOpen;

  constructor() { }
  ngOnInit(): void {
    if (window.screen.width === 360) {
      this.isMobile = true;
    }
  }

}
