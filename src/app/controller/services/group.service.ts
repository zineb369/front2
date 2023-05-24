
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Group} from "../models/group.model";
import {Observable} from "rxjs";

import {Test} from "../models/test.model";
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _apiUrl = 'http://localhost:8000/group';

  private _group = new Group();
  private _groups = new Array<Group>();

  constructor(private _http: HttpClient) {}

  public getGroups(): Observable<Group[]> {
    return this._http.get<Group[]>(this._apiUrl);
  }

  public getGroup(id: number): Observable<Group> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Test>(url);
  }

  public createGroup(group: Group): Observable<Group> {
    return this._http.post<Group>(this._apiUrl, group);
  }

  public updateGroup(group: Group): Observable<Group> {
    const url = `${this._apiUrl}/${group.id}`;
    return this._http.put<Group>(url, group);
  }

  public removeGroup(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editGroup(group: Group): Observable<Group> {
    const url = `${this._apiUrl}/${group.id}`;
    return this._http.put<Test>(url, group);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get group(): Group {
    return this._group;
  }

  set group(value: Group) {
    this._group = value;
  }

  get groups(): Group[] {
    return this._groups;
  }

  set groups(value: Group[]) {
    this._groups = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
