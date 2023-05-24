
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Subject} from '../models/subject.model';
import {Observable} from 'rxjs';

// @ts-ignore
import { APIResponse } from './path/to/api-response.interface';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private _apiUrl = 'http://localhost:8000/subject';

  private _subject = new Subject();
  private _subjects = new Array<Subject>();

  constructor(private _http: HttpClient) {
  }

  public getSubjects(): Observable<APIResponse[]> {
    return this._http.get<APIResponse[]>(this._apiUrl);
  }

  public getSubject(id: number): Observable<APIResponse> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<APIResponse>(url);
  }

  public createSubject(subject: Subject): Observable<APIResponse> {
    return this._http.post<APIResponse>(this._apiUrl, subject);}

  public updateSubject(subject: Subject): Observable<APIResponse> {
    const url = `${this._apiUrl}/${subject.id}`;
    return this._http.put<APIResponse>(url, subject);
  }

  public removeSubject(id: number): Observable<APIResponse> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete<APIResponse>(url);
  }

  public editSubject(subject: Subject): Observable<APIResponse> {
    const url = `${this._apiUrl}/${subject.id}`;
    return this._http.put<APIResponse>(url, subject);
  }

  public findSubject(id: string): Observable<APIResponse> {
    const url = `${this._apiUrl}/search?id=${id}`;
    return this._http.get<APIResponse>(url);
  }

  public findSubjects(id: string): Observable<APIResponse> {
    const url = `${this._apiUrl}/search?id=${id}`;
    return this._http.get<APIResponse>(url);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get subjects(): Subject[] {
    return this._subjects;
  }

  set subjects(value: Subject[]) {
    this._subjects = value;
  }

  get http(): HttpClient   {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
