import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  singIn(login : Login): Observable<Response<string>> {
    return this.http.get<Response<string>>(environment.urlAuthentication+"Login?userName="+login.userName+"&password="+login.password);
  }
}
