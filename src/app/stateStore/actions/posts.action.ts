import { Post } from "src/app/model/post.interface";

export const POST_LIST_REQUEST = 'post list request';
export const POST_LIST_SUCCESS = 'post list success';
export const POST_LIST_FAILURE = 'post list failure';
export const POST_VISIT = '[Post] Visit';



export class PostListRequestAction {
    readonly type = POST_LIST_REQUEST;
}

export class PostListSuccessAction {
    readonly type = POST_LIST_SUCCESS;
    constructor(public payload: { posts: Post[]}) {}
}

export class PostListFailureAction {
    readonly type = POST_LIST_FAILURE;
}

export class PostVisitAction {
    readonly type = POST_VISIT;
  
    constructor(public payload: { post: Post }) {}
}