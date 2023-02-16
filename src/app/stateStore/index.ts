import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromPosts from "./reducers/posts.reducers";

export interface RootReducerState {
    posts: fromPosts.PostReducerState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    posts: fromPosts.PostReducer
}

export const getPostState = (state: RootReducerState) => state.posts;