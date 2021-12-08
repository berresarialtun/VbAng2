import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  logout(event:Event){
    event.preventDefault();
    this.userService.logOut();

  }

}
