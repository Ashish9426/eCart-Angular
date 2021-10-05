import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCartPlus=faCartPlus
  src = "https://www.chetu.com/img/chetu-logo-white.png"
  constructor() { }

  ngOnInit(): void {
  }

}
