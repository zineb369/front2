
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import {SubjectDegree} from "../models/subject-degree.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private _apiUrl = 'http://localhost:8000/subjectDegree';

  private _subjectDegree = new SubjectDegree();
  private _subjectDegrees = new Array<SubjectDegree>();

  constructor(private _http: HttpClient) {}

  public getSubjectDegrees(): Observable<SubjectDegree[]> {
    return this._http.get<SubjectDegree[]>(this._apiUrl);
  }

  public getSubjectDegree(id: number): Observable<SubjectDegree> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<SubjectDegree>(url);
  }

  public createSubjectDegree(subjectDegree: SubjectDegree): Observable<SubjectDegree> {
    return this._http.post<SubjectDegree>(this._apiUrl, subjectDegree);
  }

  public updateSubjectDegree(subjectDegree: SubjectDegree): Observable<SubjectDegree> {
    const url = `${this._apiUrl}/${subjectDegree.id}`;
    return this._http.put<SubjectDegree>(url, subjectDegree);
  }

  public removeSubjectDegree(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editSubjectDegree(subjectDegree: SubjectDegree): Observable<SubjectDegree> {
    const url = `${this._apiUrl}/${subjectDegree.id}`;
    return this._http.put<SubjectDegree>(url, subjectDegree);
  }
  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get subjectDegree(): SubjectDegree {
    return this._subjectDegree;
  }

  set subjectDegree(value: SubjectDegree) {
    this._subjectDegree = value;
  }

  get subjectDegrees(): SubjectDegree[] {
    return this._subjectDegrees;
  }

  set subjectDegrees(value: SubjectDegree[]) {
    this._subjectDegrees = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
