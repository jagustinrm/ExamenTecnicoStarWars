
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }
  API_URL = "https://swapi.dev/api/people/"
  getCharacters(url?: string): Observable<any> {
    if (url) {
      return this.http.get(url);
    }
    return this.http.get(this.API_URL);
  }
}