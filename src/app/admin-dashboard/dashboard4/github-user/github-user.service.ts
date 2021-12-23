import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  constructor( private http: HttpClient) { }
  
  getData(): Observable<any> {

    const url = "https://api.github.com/users"

    return this.http.get<any>(url)

  }
}