import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Professor} from "../models/professor.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private _apiUrl = 'http://localhost:8000/prof';

  private _professor = new Professor();
  private _professors = new Array<Professor>();
  constructor(private _http: HttpClient) {}



  public getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  public getProfessor(code: string): Observable<Professor> {
    const url = `${this.apiUrl}/${code}`;
    return this.http.get<Professor>(url);
  }

  public createProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  public updateProfessor(professor: Professor): Observable<Professor> {
    const url = `${this.apiUrl}/${professor.code}/update`;
    return this.http.put<Professor>(url, professor);
  }

  public removeSubject(code: string): Observable<any> {
    const url = `${this.apiUrl}/${code}/delete`;
    return this.http.delete(url);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get professor(): Professor {
    return this._professor;
  }

  set professor(value: Professor) {
    this._professor = value;
  }

  get professors(): Professor[] {
    return this._professors;
  }

  set professors(value: Professor[]) {
    this._professors = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
