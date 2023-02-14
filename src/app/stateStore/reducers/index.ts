import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromPosts from "./posts.reducers";

export interface RootReducerState {
    posts: fromPosts.PostReducerState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    posts: fromPosts.PostReducer
}

export const getPostState = (state: RootReducerState) => state.posts;

export const getPostsLoaded = createSelector(getPostState, fromPosts.getLoaded);
export const getPostsLoading = createSelector(getPostState, fromPosts.getLoading);
export const getPostsList = createSelector(getPostState, fromPosts.getPostList);
export const getPostListError = createSelector(getPostState, fromPosts.getPostListError);
const selectCurrentPostId = createSelector(getPostState, fromPosts.selectCurrentPostId);
export const getPostById =  (id: number) => createSelector(
    getPostsList,
    selectCurrentPostId,
    (postList) => {
        
        if (postList?.length && id) {
          return postList.find(post => post.id == id);
        } else {
            
          return null;
        }
      }
);
