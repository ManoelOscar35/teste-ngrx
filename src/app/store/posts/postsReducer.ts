import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as fromPostsAction from "./posts.actions"
import { PostsModel } from "src/app/models/postsModel";

export interface PostsState{
    posts: PostsModel[];
    post: PostsModel | null;
    error: string | '';
}

export const initialState: PostsState = {
    posts: [],
    post: null,
    error: ''
}

const _postsReducer= createReducer(
    initialState,
    on(fromPostsAction.LoadPostsListSuccess,(state,{ payload })=>({...state, posts: payload, error: ''})),
    on(fromPostsAction.LoadPostsListFail,(state,{ error })=>({...state, error: error})),

    on(fromPostsAction.LoadPostSuccess,(state,{ payload })=>({...state, post: payload, error: ''})),
    on(fromPostsAction.LoadPostFail,(state,{ error })=>({...state, error: error})),

    
    
  
)

export function postsReducer(state = initialState, action: Action){
    return _postsReducer(state, action);
}


const getPostsFeatureState = createFeatureSelector<PostsState>(
    'posts'
)

export const getPosts = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.posts
)

export const getPost = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.post
)

export const getPostsErro = createSelector(
    getPostsFeatureState,
    (state: any) => state.error
)
