import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isValid: boolean = false;


  validateUser(username: string, password: string) {
    if (username === 'user1' && password === '123') {
      this.isValid = true;
    }

  }

  logOut(){
    this.isValid = false;
  }
}

