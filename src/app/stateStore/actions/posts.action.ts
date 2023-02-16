import { Post } from "src/app/model/post.interface";
import {Action as NgRxAction } from '@ngrx/store';

export interface Action extends NgRxAction {
    payload?: any;
}


export const POST_LIST_REQUEST = 'post list request';
export const POST_LIST_SUCCESS = 'post list success';
export const POST_LIST_FAILURE = 'post list failure';



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