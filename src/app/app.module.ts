import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListService } from './services/posts-list.service';
import { PostsCommentsComponent } from './components/posts-comments/posts-comments.component';


    const routes: Routes = [
        {path: '', component: PostsListComponent},
        {path: 'postslist', component: PostsListComponent},
        {path: 'newpost', component: NewpostComponent},
        {path: 'postcomment/:id', component: PostsCommentsComponent},
    ];

@NgModule({
  declarations: [
    AppComponent,
    NewpostComponent,
    PostsListComponent,
    PostsListComponent,
    PostsCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PostsListService, NgbAlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
