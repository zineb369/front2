
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ExerciceResponse} from "../models/exercice-responce.model";
import {Observable} from "rxjs";
import {Test} from "../models/test.model";


@Injectable({
  providedIn: 'root'
})
export class ExerciceResponceService {

  private _apiUrl = 'http://localhost:8000/exerciceReponce';

  private _exerciceResponce= new ExerciceResponse();
  private _exerciceResponces = new Array<ExerciceResponse>();

  constructor(private _http: HttpClient) {}

  public getExerciceResponces(): Observable<ExerciceResponse[]> {
    return this._http.get<ExerciceResponse[]>(this._apiUrl);
  }

  public getExerciceResponce(id: number): Observable<ExerciceResponse> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<ExerciceResponse>(url);
  }

  public createExerciceResponce(exerciceResponce: ExerciceResponse): Observable<ExerciceResponse> {
    return this._http.post<ExerciceResponse>(this._apiUrl, ExerciceResponse);
  }

  public updateExerciceResponce(exerciceResponce: ExerciceResponse): Observable<ExerciceResponse> {
    const url = `${this._apiUrl}/${exerciceResponce.id}`;
    return this._http.put<ExerciceResponse>(url, exerciceResponce);
  }

  public removeExerciceResponce(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editExerciceResponce(exerciceResponce: ExerciceResponse): Observable<ExerciceResponse> {
    const url = `${this._apiUrl}/${exerciceResponce.id}`;
    return this._http.put<ExerciceResponse>(url, exerciceResponce);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }


  get exerciceResponce(): ExerciceResponse {
    return this._exerciceResponce;
  }

  set exerciceResponce(value: ExerciceResponse) {
    this._exerciceResponce = value;
  }

  get exerciceResponces(): ExerciceResponse[] {
    return this._exerciceResponces;
  }

  set exerciceResponces(value: ExerciceResponse[]) {
    this._exerciceResponces = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
