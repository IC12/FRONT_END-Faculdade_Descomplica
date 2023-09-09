import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LazyRoutingModule
  ],
  providers: [UserService],
})
export class LazyModule { }
