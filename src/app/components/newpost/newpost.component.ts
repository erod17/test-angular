import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import { PostsListService } from '../../services/posts-list.service';
import { PostDetails } from '../../models/post-details';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-newpost',
    templateUrl: './newpost.component.html',
    styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

    PostData = new PostDetails;
    public loading: boolean;
    public newpost: any;
    public vari: string;
    closeResult: string;
    public inserted: boolean = false;

  constructor(private srvPosts: PostsListService,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
  }


//  insertPost(post: any) {
//    console.log(post);
//    if (this.srvPosts.insertPost(post)) {
//      this.inserted = true;
//
//      console.log('Record Inserted')
//    } else {
//      this.inserted = false;
//    }
//};
  
  
  insertPost(post: PostDetails) {
    this.srvPosts.insertPost(post).subscribe(
      post => {
        console.log(post);
        this.PostData.id = post.id;
        this.inserted = true;
      },
      err => {
        console.log(err);
      }
    );
  }
  

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
  
}


confirmIns(){
  this.inserted = false;
  this.router.navigateByUrl('/postslist');
};


}
