import { Component, OnInit } from '@angular/core';
import {ThuchanhDateUtilService} from '../thuchanh-date-util.service';

@Component({
  selector: 'app-thuchanh-timelines',
  templateUrl: './thuchanh-timelines.component.html',
  styleUrls: ['./thuchanh-timelines.component.css']
})
export class ThuchanhTimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: ThuchanhDateUtilService) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
