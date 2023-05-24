// @ts-ignore
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Degree} from "../models/degree.model";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  private _apiUrl = 'http://localhost:8000/degree';

  private _degree = new Degree();
  private _degrees = new Array<Degree>();

  constructor(private _http: HttpClient) {}

  public getDegrees(): Observable<Degree[]> {
    return this._http.get<Degree[]>(this._apiUrl);
  }

  public getDegree(id: number): Observable<Degree> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Degree>(url);
  }

  public createDegree(degree: Degree): Observable<Degree> {
    return this._http.post<Degree>(this._apiUrl, degree);
  }

  public updateDegree(degree: Degree): Observable<Degree> {
    const url = `${this._apiUrl}/${degree.id}`;
    return this._http.put<Degree>(url, degree);
  }

  public removeDegree(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editDegree(degree: Degree): Observable<Degree> {
    const url = `${this._apiUrl}/${degree.id}`;
    return this._http.put<Degree>(url, degree);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get degree(): Degree {
    return this._degree;
  }

  set degree(value: Degree) {
    this._degree = value;
  }

  get degrees(): Degree[] {
    return this._degrees;
  }

  set degrees(value: Degree[]) {
    this._degrees = value;
  }

  get http():HttpClient {
    return this._http;
  }
  set http(value: HttpClient) {
    this._http = value;
  }
}
