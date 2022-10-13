import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../sidenav.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}
}
