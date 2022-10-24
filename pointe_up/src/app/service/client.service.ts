
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { Client } from '../models/client';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  url = environment.baseUrl + 'projects';
  // authService: any;
   constructor(private http: HttpClient,private authService: StorageService) {}
   public getHeaders(): HttpHeaders {
     let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Headers': 'Content-Type',
       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
       "Authorization": "Bearer " + this.authService.getToken()
     });
     return headers;
   }

  public getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + '/',{ headers: this.getHeaders() });
  }
  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + '/',{ headers: this.getHeaders() });
  }
  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(this.url + '/',{ headers: this.getHeaders() });
  }

  public postClient(client: any) {
    return this.http.post<Client>(this.url + '/',{ headers: this.getHeaders() });
  }

  public UpdateClient(client: Client, id: number) {
    console.log(id);
    return this.http.put<any>(this.url + '/',{ headers: this.getHeaders() });
  }

 
  public DeleteClient(id: number) {
    return this.http.delete<any>(this.url + '/',{ headers: this.getHeaders() });
  }

  public imprimerClient(): Observable<Blob> {
    return this.http.get(this.url + "client/clientpdf", { responseType: 'blob', headers: this.getHeaders() });
  }

 
}