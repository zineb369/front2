
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Test} from "../models/test.model";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _apiUrl = 'http://localhost:8000/test';

  private _test = new Test();
  private _tests = new Array<Test>();

  constructor(private _http: HttpClient) {}

  public getTests(): Observable<Test[]> {
    return this._http.get<Test[]>(this._apiUrl);
  }

  public getTest(id: number): Observable<Test> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Test>(url);
  }

  public createTest(test: Test): Observable<Test> {
    return this._http.post<Test>(this._apiUrl, test);
  }

  public updateTest(test: Test): Observable<Test> {
    const url = `${this._apiUrl}/${test.id}`;
    return this._http.put<Test>(url, test);
  }

  public removeTest(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editTest(test: Test): Observable<Test> {
    const url = `${this._apiUrl}/${test.id}`;
    return this._http.put<Test>(url, test);
  }

    get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get test(): Test {
    return this._test;
  }

  set test(value: Test) {
    this._test = value;
  }

  get tests(): Test[] {
    return this._tests;
  }

  set tests(value: Test[]) {
    this._tests = value;
  }

  get http(): HttpClient
  {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
