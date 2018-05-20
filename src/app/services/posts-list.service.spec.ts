import { TestBed, inject } from '@angular/core/testing';

import { PostsListService } from './posts-list.service';

describe('PostsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsListService]
    });
  });

  it('should be created', inject([PostsListService], (service: PostsListService) => {
    expect(service).toBeTruthy();
  }));
});
