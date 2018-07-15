import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventCreateComponent} from './event-create.component';
import {RouterModule} from '@angular/router';
import {eventRoutes} from './event.routes';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventCreatedComponent} from './event-created.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(eventRoutes),
    MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatButtonModule,
    FlexLayoutModule, MatIconModule
  ],
  declarations: [
    EventCreateComponent, EventCreatedComponent
  ]
})
export class EventModule { }
