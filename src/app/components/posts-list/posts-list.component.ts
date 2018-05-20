import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsListService } from '../../services/posts-list.service';
import { Config } from 'protractor';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {PostDetails} from '../../models/post-details';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {

    public post: any;
    public vari: string;
    public postUpdated: boolean = false;
    closeResult: string;
    dataList$: Observable<PostDetails[]>;

    constructor(private postsList: PostsListService, 
                private modalService: NgbModal) {
    }
  
    ngOnInit() {
        this.dataList$ = this.postsList.getPostsList();
    }
    
    showRecordModal(post: any, modal: string) {
        this.post = post;
        this.modalService.open(modal).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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

    updatePost(post: any) {
        if (this.postsList.updatePost(post)) {
          this.postUpdated = true;
          console.log('Record Updated')
        } else {
          this.postUpdated = false;
        }
    };

    confirmUpd(){
      this.postUpdated = false;
    };


    

  



}