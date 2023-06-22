import { ActionReducerMap} from "@ngrx/store";
import { PostsEffects } from "./posts/posts.effects";
import { postsReducer, PostsState } from "./posts/postsReducer";


export interface AppState{
    posts: PostsState
}

export const appReducer: ActionReducerMap<AppState> = {
    posts: postsReducer
}


export const appEffects = [
    PostsEffects
]