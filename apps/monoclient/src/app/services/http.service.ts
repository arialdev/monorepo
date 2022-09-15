import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public get(path: String): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${path}`);
  }

  public post(path: String, body: any): Observable<any> {
    console.log(`${this.baseURL}/${path}`)
    console.log(body)
    // return this.http.post<any>(`${this.baseURL}/${path}`, body);
    return this.http.post<any>(`${this.baseURL}/${path}`, { "name": "hoseantonio" });
  }
}
