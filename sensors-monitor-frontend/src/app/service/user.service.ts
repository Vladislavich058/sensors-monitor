import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCred } from './../Store/Model/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://localhost:8080/api/login';

  login(userdata: UserCred) {
    return this.http.post<User>(this.baseURL, userdata);
  }

  setUserToStorage(userdata: User) {
    localStorage.setItem('user', JSON.stringify(userdata));
  }

  getUserFromStorage() {
    let _obj: User = {
      accessToken: '',
      type: '',
      id: 0,
      username: '',
      role: '',
    };
    if (localStorage.getItem('user') != null) {
      _obj = JSON.parse(localStorage.getItem('user') as string);
      return _obj;
    } else {
      return _obj;
    }
  }
}
