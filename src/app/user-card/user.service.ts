import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private HEROES = [
    {name: 'maph', age: 1000},
    {name: 'Marine', age: 200}
  ]

  constructor() { }

  /**
   * getALL
   */
  public getALL() {
    return this.HEROES;
  }
}
