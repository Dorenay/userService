import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private HEROES = [
    {name: 'maph', age: 1000},
    {name: 'Marine', age: 200}
  ]

  constructor( private _http: HttpClient) { }

  /**
   * getALL
   */
  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
}
