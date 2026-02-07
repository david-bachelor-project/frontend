import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  private readonly URL = `${environment.apiUrl}/api/documents/ping`;

  constructor(private http: HttpClient) {}

  ping(): Observable<string> {
    return this.http.get(this.URL, { responseType: 'text' });
  }
}
