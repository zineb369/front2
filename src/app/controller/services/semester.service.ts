// @ts-ignore
import { Injectable } from '@angular/core';
import {Semester} from "../models/semester.model";
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Test} from "../models/test.model";



@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private _apiUrl = 'http://localhost:8000/semester';

  private _semester = new Semester();
  private _semesters = new Array<Semester>();

  constructor(private _http: HttpClient) {}

  public getSemesters(): Observable<Semester[]> {
    return this._http.get<Semester[]>(this._apiUrl);
  }

  public getSemester(id: number): Observable<Semester> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Semester>(url);
  }

  public createSemester(semester: Semester): Observable<Semester> {
    return this._http.post<Semester>(this._apiUrl, semester);
  }

  public updateSemester(semester: Semester): Observable<Semester> {
    const url = `${this._apiUrl}/${semester.id}`;
    return this._http.put<Semester>(url, semester);
  }

  public removeSemester(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editSemester(semester: Semester): Observable<Semester> {
    const url = `${this._apiUrl}/${semester.id}`;
    return this._http.put<Semester>(url, semester);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get semester(): Semester {
    return this._semester;
  }

  set semester(value: Semester) {
    this._semester = value;
  }

  get semesters(): Semester[] {
    return this._semesters;
  }

  set semesters(value: Semester[]) {
    this._semesters = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
