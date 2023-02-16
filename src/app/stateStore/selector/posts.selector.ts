import { createSelector } from "@ngrx/store";
import * as fromPosts from "../reducers/posts.reducers";
import { getPostState } from "..";


export const getPostsLoaded =  createSelector(getPostState, fromPosts.getLoaded); 
    
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