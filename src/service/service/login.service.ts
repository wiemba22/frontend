import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../model/model/Utilisateur.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Basic_Url = "http://localhost:9000";
  constructor(private http: HttpClient) { }
  getUserDetails(email: string,password: string): Observable<any>
  {return this.http.get('http://localhost:9000/Utilisateur/'+email+'/'+password)}
/*
  PostLogin(Login: any): Observable<any>{
    return this.http.post(this.Basic_Url + "/api/v1/Utilisateur", Login);
  }

  public getUtilisateurdetails(email: String, password: String): Observable<Array<Utilisateur>>{
    return this.http.get<Array<Utilisateur>>(this.Basic_Url + "/api/v1/Utilisateur" + "/email?email=" + email + "&password=" + password);
  }

  public searchUtilisateur(email: String): Observable<Array<Utilisateur>>{
    return this.http.get<Array<Utilisateur>>(this.Basic_Url+ "/api/v1/Utilisateur/search?email=" + email);
  }*/

}
