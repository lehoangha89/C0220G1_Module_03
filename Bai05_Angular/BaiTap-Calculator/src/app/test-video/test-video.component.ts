import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-video',
  templateUrl: './test-video.component.html',
  styleUrls: ['./test-video.component.css']
})
export class TestVideoComponent implements OnInit {
  name = '';
  imageUrl = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  forgot = false;
  constructor() {
  }

  ngOnInit()
    :
    void {
  }

  showEvent(event) {
    this.name = event;
  }
  updateImage(image) {
    this.imageUrl = image;
  }

}
