import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private url = 'https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10';
  constructor(private httpClient: HttpClient) { }
  getlistdata()
  {
    
    return this.httpClient.get(this.url);
  }
}
