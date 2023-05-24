
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Document} from "../models/document.model";
import {Observable} from "rxjs";
import {Test} from "../models/test.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _apiUrl = 'http://localhost:8000/document';

  private _document = new Document();
  private _documents = new Array<Document>();

  constructor(private _http: HttpClient) {}

  public getDocuments(): Observable<Document[]> {
    return this._http.get<Document[]>(this._apiUrl);
  }

  public getDocument(id: number): Observable<Document> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<Document>(url);
  }

  public createDocument(document: Document): Observable<Document> {
    return this._http.post<Document>(this._apiUrl, document);
  }

  public updateDocument(document: Document): Observable<Document> {
    const url = `${this._apiUrl}/${document.id}`;
    return this._http.put<Document>(url, document);
  }

  public removeDocument(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editDocument(document: Document): Observable<Document> {
    const url = `${this._apiUrl}/${document.id}`;
    return this._http.put<Document>(url, document);
  }


    get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get document(): Document {
    return this._document;
  }

  set document(value: Document) {
    this._document = value;
  }

  get documents(): Document[] {
    return this._documents;
  }

  set documents(value: Document[]) {
    this._documents = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
