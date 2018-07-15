import { Routes } from '@angular/router';
import {RecommendationShowComponent} from './recommendation-show.component';


export const recommendationRoutes: Routes = [
  { path: ':id', component: RecommendationShowComponent }
];
