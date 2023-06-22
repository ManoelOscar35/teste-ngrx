import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as fromPostsAction from "./posts.actions";
import { ApiService } from "src/app/services/api.service";

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private apiService: ApiService) {
    }

    loadPosts$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromPostsAction.postsTypeAction.LOAD_POSTS_LIST),
                exhaustMap(() => this.apiService.getPostsList()
                    .pipe(
                        map((payload) =>
                            fromPostsAction.LoadPostsListSuccess({ payload }),
                            catchError(error => of(fromPostsAction.LoadPostsListFail({ error })))
                        )
                    )
                )
            )
    )

    loadPost$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromPostsAction.postsTypeAction.LOAD_POST),
                exhaustMap((res: any) => this.apiService.getPostDetails(res.payload)
                    .pipe(
                        map((payload) =>
                            fromPostsAction.LoadPostSuccess({ payload }),
                            catchError(error => of(fromPostsAction.LoadPostFail({ error })))
                        )
                    )
                )
            )
    )

    


}