import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostDetails } from '../models/post-details';
import { PostComment } from '../models/post-comment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private http: HttpClient) {}

   apiUrl: string = "https://jsonplaceholder.typicode.com/posts/";

    public datos: any;
   
    getPostsList(): Observable<PostDetails[]> {
        return this.http.get<PostDetails[]>(this.apiUrl);
    }
    
    getPostsListById(id: number): Observable<PostDetails[]> {
        return this.http.get<PostDetails[]>(this.apiUrl + id);
    }
    
    getPostsListComments(id: number): Observable<PostComment[]> {
        return this.http.get<PostComment[]>(this.apiUrl + id + '/comments');
    }
    
    insertPost(dataPost: PostDetails): Observable<PostDetails> {
        
        let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };        
        return this.http.post<PostDetails>(this.apiUrl, dataPost, options);
    }

   deletePost() {}

    updatePost(dataPost: any) {
       console.log(dataPost);
        let data = JSON.stringify(dataPost);
        console.log('UPDATE');
        console.log(data);
        return this.http.put(this.apiUrl + dataPost.id, data, httpOptions);

   }
}
