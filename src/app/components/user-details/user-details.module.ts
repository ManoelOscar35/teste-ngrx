import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { EncurtarPipe } from 'src/app/encurtar.pipe';


@NgModule({
  declarations: [
    UserDetailsComponent,
    EncurtarPipe
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MaterialModule
  ]
})
export class UserDetailsModule { }
