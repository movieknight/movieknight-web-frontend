import {Component, OnInit} from '@angular/core';
import {EventService} from '../../api/event/event.service';
import {IEvent} from '../../api/event/event.interfaces';
import {Router} from '@angular/router';
import {AlertsService} from '../alerts/alerts.service';

@Component({
  selector: 'app-event-created',
  templateUrl: './event-created.component.html',
  styleUrls: ['./event-created.component.css']
})
export class EventCreatedComponent implements OnInit {
  event: IEvent;

  constructor(eventService: EventService, private router: Router, private alertsService: AlertsService) {
    eventService.get(
      parseInt(this.router.url.substr(this.router.url.lastIndexOf('/') + 1), 10)
    ).subscribe(event => this.event = event,
        error => this.alertsService.add('Event not found'));
  }

  getLocation() {
    return this.router.url;
  }

  getShareLink() {
    return this.getLocation().replace('/event', '/event/recommendation');
  }

  ngOnInit() {
  }

}
