import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {IEvent} from './event.interfaces';
import {map} from 'rxjs/operators';


@Injectable()
export class EventService {
  events: Map<number, IEvent> = new Map<>();

  constructor(private http: HttpClient) {
  }

  public post(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>('/api/event', event).pipe(
      map(_event => {
        this.events.set(_event.id, _event);
        return _event;
      })
    );
  }

  public get(id: number): Observable<IEvent> {
    return this.events.has(id) ? of(this.events.get(id))
      : this.http.get<IEvent>(`/api/event/${id}`);
  }
}
