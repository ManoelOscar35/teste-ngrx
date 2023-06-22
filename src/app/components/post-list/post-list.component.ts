import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app-state';
import * as fromPostsAction from '../../store/posts/posts.actions';
import * as fromPostsSelector from '../../store/posts/postsReducer';
import { PostsModel } from 'src/app/models/postsModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postsLista$ : Observable<PostsModel[]> = this.store.select(fromPostsSelector.getPosts);
  
  
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.store.dispatch(fromPostsAction.LoadPostsList());
  }

  lerPost(id: string){
    this.router.navigate([`post-details/${id}`])
  }
}
