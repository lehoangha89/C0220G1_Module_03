import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-input-child',
  templateUrl: './test-input-child.component.html',
  styleUrls: ['./test-input-child.component.css']
})
export class TestInputChildComponent implements OnInit {
  @Input() name: string;
  @Input() province: string;
  @Output() myClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  testParent() {
    this.myClick.emit();
  }
}
