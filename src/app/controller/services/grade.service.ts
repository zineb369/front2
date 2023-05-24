import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from '../models/grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private _apiUrl = 'http://localhost:8000/notes';
  private _grade = new Grade();
  private _grades = new Array<Grade>();

  constructor(private _http: HttpClient) {}

  public getGrades(): Observable<Grade[]> {
    const url = `${this._apiUrl}/notes`;
    return this._http.get<Grade[]>(url);
  }

  public addGrade(grade: Grade): Observable<Grade> {
    const url = `${this._apiUrl}/notes/new`;
    return this._http.post<Grade>(url, grade);
  }

  public updateGrade(grade: Grade): Observable<Grade> {
    const url = `${this._apiUrl}/notes/edit`;
    return this._http.post<Grade>(url, grade);
  }

  public deleteGrade(grade: Grade): Observable<void> {
    const url = `${this._apiUrl}/notes/delete`;
    return this._http.post<void>(url, { _token: 'your-csrf-token', gradeId: grade.id });
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get grade(): Grade {
    return this._grade;
  }

  set grade(value: Grade) {
    this._grade = value;
  }

  get grades(): Grade[] {
    return this._grades;
  }

  set grades(value: Grade[]) {
    this._grades = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
