
import { Injectable } from '@angular/core';
import {Test} from "../models/test.model";
import {TestType} from "../models/test-type.model";

import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestTypeService {
  private _apiUrl = 'http://localhost:8000/testType';

  private _testType = new TestType();
  private _testTypes = new Array<TestType>();

  constructor(private _http: HttpClient) {}

  public getTestTypes(): Observable<TestType[]> {
    return this._http.get<TestType[]>(this._apiUrl);
  }

  public getTestType(id: number): Observable<TestType> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<TestType>(url);
  }

  public createTestType(testType: TestType): Observable<TestType> {
    return this._http.post<TestType>(this._apiUrl, testType);
  }

  public updateTestType(testType: TestType): Observable<TestType> {
    const url = `${this._apiUrl}/${testType.id}`;
    return this._http.put<TestType>(url, testType);
  }

  public removeTestType(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editTestType(testType: TestType): Observable<Test> {
    const url = `${this._apiUrl}/${testType.id}`;
    return this._http.put<Test>(url, testType);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get testType(): TestType {
    return this._testType;
  }

  set testType(value: TestType) {
    this._testType = value;
  }

  get testTypes(): TestType[] {
    return this._testTypes;
  }

  set testTypes(value: TestType[]) {
    this._testTypes = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
