import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventCreateComponent} from './event-create.component';
import {RouterModule} from '@angular/router';
import {eventRoutes} from './event.routes';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(eventRoutes),
    MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [EventCreateComponent]
})
export class EventModule { }
