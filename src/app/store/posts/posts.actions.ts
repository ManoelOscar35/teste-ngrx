import { createAction, props } from "@ngrx/store";
import { PostsModel } from "src/app/models/postsModel";


export const enum postsTypeAction {
    LOAD_POSTS_LIST = '[LOAD_POSTS_LIST] LOAD POSTS LIST',
    LOAD_POSTS_LIST_SUCCESS = '[LOAD_POSTS_LIST_SUCCESS] LOAD POSTS LIST SUCCESS',
    LOAD_POSTS_LIST_FAIL = '[LOAD_POSTS_LIST_FAIL] LOAD POSTS LIST FAIL',

    LOAD_POST = '[LOAD_POST] LOAD POST',
    LOAD_POST_SUCCESS = '[LOAD_POST_SUCCESS] LOAD POST SUCCESS',
    LOAD_POST_FAIL = '[LOAD_POST_FAIL] LOAD POST FAIL',
    
    
}

//Load POSTS_LIST
export const LoadPostsList = createAction(
    postsTypeAction.LOAD_POSTS_LIST
);

export const LoadPostsListSuccess = createAction(
    postsTypeAction.LOAD_POSTS_LIST_SUCCESS,
    props<{payload: PostsModel[]}>()
);

export const LoadPostsListFail = createAction(
    postsTypeAction.LOAD_POSTS_LIST_FAIL,
    props<{error: string}>()
);

//Load Post
export const LoadPost = createAction(
    postsTypeAction.LOAD_POST,
    props<{payload: string}>()
);

export const LoadPostSuccess = createAction(
    postsTypeAction.LOAD_POST_SUCCESS,
    props<{payload: PostsModel}>()
);

export const LoadPostFail = createAction(
    postsTypeAction.LOAD_POST_FAIL,
    props<{error: string}>()
);


