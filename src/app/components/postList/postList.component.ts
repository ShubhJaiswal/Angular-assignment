import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Post } from 'src/app/model/post.interface';
import { PostsService } from 'src/app/service/posts.service';
import { UtilityService } from 'src/app/service/utility.service';
import { RootReducerState } from 'src/app/stateStore';
import { PostListFailureAction, PostListRequestAction, PostListSuccessAction } from 'src/app/stateStore/actions/posts.action';
import { getPostById, getPostListError, getPostsList, getPostsLoaded, getPostsLoading } from '../../stateStore/selector/posts.selector';

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
    private utilityService: UtilityService,
    private store: Store<RootReducerState>,
    private api: PostsService
  ) { }



  ngOnInit() {
    this.getPostList();
  }


  getPostList() {
    // const observer$ = this.utilityService.getPostsList();

    // const getpostLoading$ = this.store.select(getPostsLoading);
    // const getpostLoaded$ = this.store.select(getPostsLoaded);
    // const getPostList$ = this.store.select(getPostsList);
    // const getPostListError$ = this.store.select(getPostListError);

    // combineLatest([getpostLoading$, getpostLoaded$, getPostList$, getPostListError$]).pipe(take(1)).subscribe((data) => {
    //   if (!data[0] && !data[1]) {
    //     debugger;
    //     this.store.dispatch(new PostListRequestAction());
    //     this.postList = data[2];
    //     this.loading = data[0];
    //     this.postListError = data[3];
    //     this.api.getAllPosts().subscribe((res: Post[]) => {
    //       this.store.dispatch(new PostListSuccessAction({ posts: res }));
          
    //     }, error => {
    //       this.store.dispatch(new PostListFailureAction());
    //     });

       
    //   }
    // });


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

