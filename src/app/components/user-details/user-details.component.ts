import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import * as fromPostsAction from '../../store/posts/posts.actions';
import * as fromPostsSelector from '../../store/posts/postsReducer';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsModel } from 'src/app/models/postsModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  loadPosts$: Observable<PostsModel[]> = this.store.select(fromPostsSelector.getPosts)
  loadPost: Observable<PostsModel | null> = this.store.select(fromPostsSelector.getPost)

  user: any[] = [];
  post2!: any;
  userPosts!: any[];
  userComments: any[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  

  ngOnInit() {
    
    setTimeout(() => {
      this.store.dispatch(fromPostsAction.LoadPostsList());
      
    }, 1000)

    this.route.params.subscribe({
      next: (res: any) => {
        this.store.dispatch(fromPostsAction.LoadPost({payload:res.id}));
      } 
    });
    
    
    setTimeout(() => {
      this.getPosts();
      this.getPost();
    }, 1000);
    
  }

  // Método para obter todos a lista de posts e fazer as filtragens
  getPosts() {
    
    this.loadPosts$
    .subscribe({
      next: (value: any) =>  {
        this.user = value
        let arr1 = this.user.filter((filter) => filter.author.username == this.post2.author.username)
        this.userPosts = arr1
        let arr2 = this.user.map(obj1 => (obj1.comments.filter((obj2: any) => obj2.author.username === this.post2.author.username)));
        let vazio = []
        let arr3 = arr2.filter((filter) => filter.length > 0)
        let [array1, array2, array3] = arr3
        let objeto1 = array1[0];
        let objeto2 = array2[0];
        let objeto3 = array3[0];
        this.userComments[0] = objeto1;
        this.userComments[1] = objeto2;
        this.userComments[2] = objeto3;
          
      }
      
    });
  }

  //Método para obter a postagem
  getPost() {
    this.loadPost
    .subscribe({
      next: (value: any) =>  {
        this.post2 = value
      }
    });
  }
}
