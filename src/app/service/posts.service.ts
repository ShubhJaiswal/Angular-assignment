import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Post } from '../model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }


  getAllPosts() : Observable<any> {
    
    return this.http.get<Observable<Post[]>>(this.baseUrl+ 'posts')
  }

  getPost(id: number) : Observable<any> {
    return this.http.get<Observable<Post>>(`${this.baseUrl}posts/${id}`);
  }

  getPostComments(id: number): Observable<[Post] | any> {
    return this.http.get<Observable<Post[]>>(`${this.baseUrl}posts/${id}/comments`);
  }

}
