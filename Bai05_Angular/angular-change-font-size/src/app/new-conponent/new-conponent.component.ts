import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conponent',
  templateUrl: './new-conponent.component.html',
  styleUrls: ['./new-conponent.component.scss']
})
export class NewConponentComponent implements OnInit {
  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
