import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private appComponent:AppComponent) { }
  
  title = 'Tour of Heroes';

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.appComponent.sidenav.toggle();
  }

}
