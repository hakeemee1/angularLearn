import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interface/data'; // import from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor (private http: HttpClient) {}
  getData() {
    return ['data1', 'data2', 'data3', 'haloo'];
  }

  getPost(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
