import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private usersUrl = 'api/users';  // URL to web api
 
  constructor(private http: HttpClient){
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


getUser(id: number): Observable<User> {
  const url = `${this.usersUrl}/${id}`;
  return this.http.get<User>(url).pipe();
}

updateUser (user: User): Observable<any> {
  return this.http.put(this.usersUrl, user, httpOptions);
}


}