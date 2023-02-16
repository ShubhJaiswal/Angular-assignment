import { Post } from "src/app/model/post.interface";
import { Action } from "../actions/posts.action";
import * as UserActions from '../actions/posts.action';

export interface PostReducerState {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    posts: Post[];
    currentPostId: number;
    singlePost: Post;
}

const initialState: PostReducerState = {
    loaded: false,
    loading: false,
    error: false,
    posts: [],
    currentPostId: 0,
    singlePost: {
        body: '',
        id: 0,
        title: '',
        userId: 0
    }

}

export function PostReducer(state = initialState, action: Action): PostReducerState {


    switch (action.type) {
        case UserActions.POST_LIST_REQUEST: {
            return { ...state , loading: true }
        }

        case UserActions.POST_LIST_SUCCESS: {
            
            return { ...state, loaded: true, loading: false, posts: action.payload.posts, error: false }
        }


        case UserActions.POST_LIST_FAILURE: {


            return { ...state, error: true, loading: false }
        }

        default: {
            return state;
        }

    }


}


// selector

export const getLoading = (state: PostReducerState) => state.loading;
export const getLoaded = (state: PostReducerState) => state.loaded;
export const getPostList = (state: PostReducerState) => state.posts;
export const getPostListError = (state: PostReducerState) => state.error;
export const selectCurrentPostId = (state: PostReducerState) => state.currentPostId;
export const getPostById = (id: number, state: PostReducerState) => state.singlePost;




