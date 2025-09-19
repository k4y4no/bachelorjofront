import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserCreate, UserPublic } from '../../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)
  readonly userUrl: string = "http://127.0.0.1:8000/user/register"

  constructor() { }

  registerRequest(newUser: UserCreate){
    return this.http.post<UserPublic>(this.userUrl, newUser)
  }


}
