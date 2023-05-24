
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {DocumentType} from "../models/document-type.model";
import {Observable} from "rxjs";
import {Document} from "../models/document.model";
import {Test} from "../models/test.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private _apiUrl = 'http://localhost:8000/documentType';

  private _documentType = new DocumentType();
  private _documentTypes = new Array<DocumentType>();

  constructor(private _http: HttpClient) {}

  public getDocumentTypes(): Observable<DocumentType[]> {
    return this._http.get<DocumentType[]>(this._apiUrl);
  }

  public getDocumentType(id: number): Observable<DocumentType> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<DocumentType>(url);
  }

  public createDocumentType(documentType: DocumentType): Observable<DocumentType> {
    return this._http.post<DocumentType>(this._apiUrl, documentType);
  }

  public updateDocumentType(documentType: DocumentType): Observable<DocumentType> {
    const url = `${this._apiUrl}/${documentType.id}`;
    return this._http.put<DocumentType>(url, documentType);
  }

  public removeDocumentType(id: number): Observable<any> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.delete(url);
  }

  public editDocumentType(documentType: DocumentType): Observable<DocumentType> {
    const url = `${this._apiUrl}/${documentType.id}`;
    return this._http.put<DocumentType>(url, documentType);
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get documentType(): DocumentType {
    return this._documentType;
  }

  set documentType(value: DocumentType) {
    this._documentType = value;
  }

  get documentTypes(): DocumentType[] {
    return this._documentTypes;
  }

  set documentTypes(value: DocumentType[]) {
    this._documentTypes = value;
  }

  get http(): HttpClient {
    return this._http;
  }
  set http(value:HttpClient) {
    this._http = value;
  }
}
