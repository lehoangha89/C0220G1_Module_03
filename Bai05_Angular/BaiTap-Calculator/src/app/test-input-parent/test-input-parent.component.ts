import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input-parent',
  templateUrl: './test-input-parent.component.html',
  styleUrls: ['./test-input-parent.component.css']
})
export class TestInputParentComponent implements OnInit {
  arrayInformation = [
    {id: 1, name: 'ha', province: 'da nang'},
    {id: 2, name: 'hieu', province: 'quang tri'},
    {id: 3, name: 'nhan', province: 'quang nam'},
    {id: 4, name: 'hai', province: 'quang ngai'},
    {id: 5, name: 'trung', province: 'ha noi'}
  ];
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

}
