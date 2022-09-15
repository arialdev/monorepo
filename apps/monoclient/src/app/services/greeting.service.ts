import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private httpService: HTTPService) { }

  public getSimpleGreeting(): Observable<string> {
    return this.httpService.get('').pipe(map(data => data.msg));
  }

  public getComplexGreeting(name: string): Observable<string> {
    return this.httpService.post('', { name }).pipe(map(data => data.msg));;
  }
}
