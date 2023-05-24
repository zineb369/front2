import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Absence } from '../models/absence.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private _apiUrl = 'http://localhost:8000/absence';
  private _absence = new Absence();
  private _absences = new Array<Absence>();

  constructor(private _http: HttpClient) {}

  public getAbsences(): Observable<Absence[]> {
    const url = `${this._apiUrl}/absence/absences`;
    return this._http.get<Absence[]>(url);
  }

  public addAbsence(absence: Absence): Observable<Absence> {
    const url = `${this._apiUrl}/absence/add`;
    return this._http.post<Absence>(url, absence);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get absence(): Absence {
    return this._absence;
  }

  set absence(value: Absence) {
    this._absence = value;
  }

  get absences(): Absence[] {
    return this._absences;
  }

  set absences(value: Absence[]) {
    this._absences = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}

