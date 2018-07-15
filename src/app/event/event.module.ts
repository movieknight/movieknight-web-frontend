import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventCreateComponent} from './event-create.component';
import {RouterModule} from '@angular/router';
import {eventRoutes} from './event.routes';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventCreatedComponent} from './event-created.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventService} from '../../api/event/event.service';
import {EventRecommendComponent} from './event-recommend.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(eventRoutes),
    MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatButtonModule,
    FlexLayoutModule, MatIconModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    EventCreateComponent, EventCreatedComponent, EventRecommendComponent
  ],
  providers: [
    EventService
  ]
})
export class EventModule { }
