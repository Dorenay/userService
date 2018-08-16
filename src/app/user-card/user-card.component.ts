import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public heroes;
  private _userService;

  constructor(userService : UserService) {
    this._userService = userService;
   }

  ngOnInit() {
    this.heroes = this._userService.getAll();
  }

}
