import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { PipesModule } from 'src/app/shared/pipe.module';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    MaterialModule,
    PipesModule
  ]
})
export class PostListModule { }
