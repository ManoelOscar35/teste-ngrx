import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import * as fromPostsAction from '../../store/posts/posts.actions';
import * as fromPostsSelector from '../../store/posts/postsReducer';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post$: Observable<any> = this.store.select(fromPostsSelector.getPost)

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (res: any) => {
        this.store.dispatch(fromPostsAction.LoadPost({payload:res.id}));
      } 
    });
    
  }

  user(id: string) {
    this.router.navigate([`user-details/${id.toString()}`]);
  }
}
