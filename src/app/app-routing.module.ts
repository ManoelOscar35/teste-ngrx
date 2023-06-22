import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post-list',
    pathMatch: 'full'
  },
  {
    path: 'post-list',
    loadChildren: () => import('./components/post-list/post-list.module').then((m) => m.PostListModule)
  },
  {
    path: 'post-details/:id',
    loadChildren: () => import('./components/post-details/post-details.module').then((m) => m.PostDetailsModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./components/user-details/user-details.module').then((m) => m.UserDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
