import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {RouterModule} from '@angular/router';
import {homepageRoutes} from './dashboard.routes';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(homepageRoutes),
    MatButtonModule, MatCardModule, FlexLayoutModule
  ],
  declarations: [
    HomepageComponent
  ]
})
export class HomepageModule { }
