import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCommentsComponent } from './posts-comments.component';

describe('PostsCommentsComponent', () => {
  let component: PostsCommentsComponent;
  let fixture: ComponentFixture<PostsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
