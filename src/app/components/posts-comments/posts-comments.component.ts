import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { PostsListService } from '../../services/posts-list.service';
import { PostComment } from '../../models/post-comment';
import { PostDetails } from '../../models/post-details';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {

    private postId: number;
    postDet: {};
    commentList$: Observable<PostComment[]>;
    postById$: Observable<PostDetails[]>;
    
    
    constructor(private postsList: PostsListService,
                private route: ActivatedRoute) {}
    
    ngOnInit() {
        //const queryParams = this.route.snapshot.queryParams
        const routeParams = this.route.snapshot.params;

        this.postId = routeParams.id;
        
        console.log(this.postId);
        this.commentList$ = this.postsList.getPostsListComments(this.postId);        
        //this.postById$ = this.postsList.getPostsListById(this.postId);
        
        
        this.postsList.getPostsListById(this.postId)
            .subscribe((data)=> {
                this.postDet = data;
                this.postDet = Array.of(this.postDet);
                console.log(this.postDet);
        });

        
    }
   
    

}
