import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsModel } from '../models/postsModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPostsList(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`${environment.BASE_URL}/data`);
  }

  getPostDetails(id: string): Observable<PostsModel> {
    return this.http.get<PostsModel>(`${environment.BASE_URL}/data/${id}`);
  }
}
