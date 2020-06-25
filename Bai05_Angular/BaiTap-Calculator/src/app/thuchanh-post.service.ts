import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThuchanhPost} from './thuchanh-post';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThuchanhPostService {
  private API_URL = 'http://localhost:3000/postList';

  constructor(private http: HttpClient) {
  }

  getPosts(count = 10): Observable<ThuchanhPost[]> {
    return this.http.get<ThuchanhPost[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }

  getPostById(id: number): Observable<ThuchanhPost> {
    return this.http.get<ThuchanhPost>(this.API_URL + '/' + id);
  }

  createPost(post: Partial<ThuchanhPost>): Observable<ThuchanhPost> {
    return this.http.post<ThuchanhPost>(this.API_URL, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updatePost(post: ThuchanhPost): Observable<ThuchanhPost> {
    return this.http.patch<ThuchanhPost>(`${this.API_URL}/${post.id}`, post);
  }
}
