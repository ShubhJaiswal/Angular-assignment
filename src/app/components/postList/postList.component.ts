import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.interface';
import { UtilityService } from 'src/app/service/utility.service';


@Component({
  selector: 'app-posts',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[] = [];
  searchTerm = '';
  p: number = 1;
  postsList$!: Observable<Post[]>;
  loading = false;
  postListError = false;

  subscriptions!: Subscription;
  constructor(
    private router: Router,
    private utilityService: UtilityService
  ) { }



  ngOnInit() {

    this.getPostList();
  }


  getPostList() {

    const observer$ = this.utilityService.getPostsList();
    const postsList$ = observer$[1];
    const postListLoading$ = observer$[0];
    const postListError$ = observer$[2];
    postsList$.subscribe((posts: Post[]) => {
      this.postList = posts;
    })
    postListLoading$.subscribe((loading: boolean) => {
      this.loading = loading;
    })
    postListError$.subscribe((isError: boolean) => {
      this.postListError = isError;
    })
  }

  goToDetails(id: number) {

    this.router.navigate(['/news', id])
  }

  tryAgain() {
    this.utilityService.getPostsList();
  }

}

