import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = 'http://localhost:8000/login';
  private _users: User[] = [];
  private _user: User = new User();
  constructor(private _http: HttpClient) {}

  public login(username: string | null | undefined, password: string | null | undefined): Observable<any> {
    const url = `${this._apiUrl}/login`;
    const body = { username, password };
    return this._http.post<any>(url, body);
  }

  public logout(): Observable<any> {
    const url = `${this._apiUrl}/logout`;
    return this._http.get<any>(url);
  }

  public resetPasswordRequest(email: string): Observable<any> {
    const url = `${this._apiUrl}/oubli-pass`;
    const body = { email };
    return this._http.post<any>(url, body);
  }

  public resetPassword(token: string, password: string): Observable<any> {
    const url = `${this._apiUrl}/oubli-pass/${token}`;
    const body = { password };
    return this._http.post<any>(url, body);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}

