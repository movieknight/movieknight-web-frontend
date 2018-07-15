import { Routes } from '@angular/router';
import {EventCreateComponent} from './event-create.component';
import {EventCreatedComponent} from './event-created.component';


export const eventRoutes: Routes = [
  { path: 'new', component: EventCreateComponent },
  { path: ':id', component: EventCreatedComponent }
];
