import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Post, PostComment } from 'src/app/model/post.interface';
import { PostsService } from 'src/app/service/posts.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post!: Post;
  comments: PostComment[] = [];
  constructor(private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private utility: UtilityService) { }

  ngOnInit(): void {
    this.getPostById();
  }



  getPostById() {

    const post$ = this.route.params.pipe(map((data) => data.id),
      switchMap((postId) => this.utility.getPostById(postId)),
      filter(res => !!res));

    post$.subscribe((post: Post) => {

      this.post = post;

      this.postService.getPostComments(+post.id)
        .subscribe((commentsResponse: PostComment[]) => {
          this.comments = commentsResponse;
        });
    })

  }


  back() {
    this.router.navigate(['']);
  }

}
