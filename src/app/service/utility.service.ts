import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { combineLatest, Observable, of, } from 'rxjs';
import { Post } from '../model/post.interface';
import { PostListFailureAction, PostListRequestAction, PostListSuccessAction } from '../stateStore/actions/posts.action';
import { RootReducerState } from '../stateStore';
import {  getPostById, getPostListError, getPostsList, getPostsLoaded, getPostsLoading } from '../stateStore/selector/posts.selector';
import { PostsService } from './posts.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  constructor(private api: PostsService,
    private store: Store<RootReducerState>) { }


  getPostsList(force = false): [Observable<boolean>, Observable<Post[]>, Observable<boolean>] {
    const getpostLoading$ = this.store.select(getPostsLoading);
    const getpostLoaded$ = this.store.select(getPostsLoaded);
    const getPostList$ = this.store.select(getPostsList);
    const getPostListError$ = this.store.select(getPostListError);

    combineLatest([getpostLoading$, getpostLoaded$]).pipe(take(1)).subscribe((data) => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new PostListRequestAction());
        this.api.getAllPosts().subscribe((res: Post[]) => {

          this.store.dispatch(new PostListSuccessAction({ posts: res }));

        }, error => {
          this.store.dispatch(new PostListFailureAction());
        }
        );
      }
    });
    return [getpostLoading$, getPostList$, getPostListError$]
  }

  getPostById(id: number, force = false): Observable<any> {


    const post$ = this.store.select(getPostById(id));
    post$.pipe(take(1)).subscribe((res) => {
      
      if (force || !res) {
        // return this.api.getPost(id).subscribe(( post: Post ) => {
        //   console.log(post);
        //   
        //    this.store.dispatch(new PostVisitAction({ post })) 

        // })
        this.api.getAllPosts().subscribe((res: Post[]) => {

          this.store.dispatch(new PostListSuccessAction({ posts: res }));

        }, error => {
          this.store.dispatch(new PostListFailureAction());
        }
        );

      }
      return res;
    });    
    return post$;
  }
}


