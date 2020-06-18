import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-thuchanh-name-card',
  templateUrl: './thuchanh-name-card.component.html',
  styleUrls: ['./thuchanh-name-card.component.css']
})
export class ThuchanhNameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}
