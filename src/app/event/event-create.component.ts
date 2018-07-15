import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../api/event/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private eventService: EventService,
              private router: Router) {
    this.form = formBuilder.group({
      title: ['', Validators.required ],
      description: ['', Validators.required ],
      user_limit: ['', Validators.required ],
      email: ['', Validators.required ],
      public: ['', Validators.required ]
    });
  }

  submit() {
    this.eventService.post(this.form.value).subscribe(data => {
      this.router.navigate([`/event/${data.id}`]);
    }, console.error);
  }

  ngOnInit() {
  }

}
