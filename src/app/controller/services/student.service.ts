import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _apiUrl = 'http://localhost:8000/student';

  private _student = new Student();
  private _students = new Array<Student>();
  constructor(private _http: HttpClient) {}

  public getStudents(): Observable<Student[]> {
    return this._http.get<Student[]>(this._apiUrl);
  }

  public getStudent(code: string): Observable<Student> {
    const url = `${this._apiUrl}/${code}`;
    return this._http.get<Student>(url);
  }

  public createStudent(student: Student): Observable<Student> {
    return this._http.post<Student>(this._apiUrl, student);
  }
  public updateStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.code}`;
    return this.http.put<Student>(url, student);
  }
  public removeStudent(code: string): Observable<any> {
    const url = `${this._apiUrl}/${code}`;
    return this._http.delete(url);
  }


  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }


  get student(): Student {
    return this._student;
  }

  set student(value: Student) {
    this._student = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }
}

