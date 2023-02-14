import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all posts', () => {
    const mockResponse = [
      {
        "userId": 1,
        "id": 1,
        "title": "Test post 1",
        "body": "This is a test post"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "Test post 2",
        "body": "This is another test post"
      }
    ];
    service.getAllPosts().subscribe(posts => {
      expect(posts).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}posts`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

  });


  it('should get a single post by id', () => {
    const mockResponse = {
      "userId": 1,
      "id": 1,
      "title": "Test post 1",
      "body": "This is a test post"
    };

    service.getPost(1).subscribe(post => {
      expect(post).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}posts/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });


  it('should get comments for a single post by id', () => {
    const mockResponse = [
      {
        "postId": 1,
        "id": 1,
        "name": "Test comment 1",
        "email": "test1@example.com",
        "body": "This is a test comment"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "Test comment 2",
        "email": "test2@example.com",
        "body": "This is another test comment"
      }
    ];

    service.getPostComments(1).subscribe((comments: any) => {
      expect(comments.length).toBe(2);
      expect(comments).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}posts/1/comments`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

});
