import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiPlanetDataService {

  constructor(private http:HttpClient) {
  }

  getData(){
    let url="https://swapi.dev/api/planets/";
    return this.http.get(url);
  }
}
