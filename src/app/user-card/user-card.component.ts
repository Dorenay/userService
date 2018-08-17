import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public heroes;
  public KEYS = [];

  constructor(private userService : UserService) {
   }

  ngOnInit() {
    this.userService.getAll().subscribe(heroes => this.heroes = heroes);
    this.userService.getAll().subscribe(_=> {
      for (let item of this.heroes){
        for (let key in item){
          if (this.KEYS.indexOf(key) === -1 && key != 'name'){
            this.KEYS.push(key);
          }
        } 
      }
      console.log(this.KEYS);
    });
  }

}
