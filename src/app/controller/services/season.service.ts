
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Season} from "../models/season.model";
import {Observable} from "rxjs";
import {Test} from "../models/test.model";
@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private _apiUrl = 'http://localhost:8000/seasion';
  private _season = new Season();
  private _seasons = new Array<Season>();

  constructor(private _http: HttpClient) {}

  public getSeasons(): Observable<Season[]> {
    return this._http.get<Season[]>(this._apiUrl);
  }

  public getSeason(id: number): Observable<Season> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Season>(url);
  }

  public createSeason(season: Season): Observable<Season> {
    return this._http.post<Season>(this._apiUrl, season);
  }

  public updateSeason(season: Season): Observable<Season> {
    const url = `${this._apiUrl}/${season.id}`;
    return this._http.put<Season>(url, season);
  }

  public removeSeason(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editSeason(season: Season): Observable<Season> {
    const url = `${this._apiUrl}/${season.id}`;
    return this._http.put<Season>(url, season);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get season(): Season {
    return this._season;
  }

  set season(value: Season) {
    this._season = value;
  }

  get seasons(): Season[] {
    return this._seasons;
  }

  set seasons(value: Season[]) {
    this._seasons = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
