import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thuchanh-progress-bar',
  templateUrl: './thuchanh-progress-bar.component.html',
  styleUrls: ['./thuchanh-progress-bar.component.css']
})
export class ThuchanhProgressBarComponent implements OnInit {
  a = 0;
  @Input() width;

  constructor() {
  }
  move() {
    if (this.a === 0) {
      this.a = 1;
      const elem = document.getElementById('myBar');
      this.width = 1;
      const id = setInterval(() => {
          if (this.width >= 100) {
            clearInterval(id);
          } else {
            this.width++;
            elem.style.width = this.width + '%';
          }
        }, 100
      ) ;
    }
  }
  ngOnInit(): void {}

  }
