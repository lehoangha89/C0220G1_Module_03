import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-angular-form',
  templateUrl: './test-angular-form.component.html',
  styleUrls: ['./test-angular-form.component.css']
})
export class TestAngularFormComponent implements OnInit {
  emaila = '';
  password = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(email, pass) {
    this.emaila = email;
    this.password = pass;
  }
}
