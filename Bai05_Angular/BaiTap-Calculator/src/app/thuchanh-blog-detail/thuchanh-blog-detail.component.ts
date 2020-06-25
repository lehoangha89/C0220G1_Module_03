import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThuchanhPost} from '../thuchanh-post';
import {ThuchanhPostService} from '../thuchanh-post.service';

@Component({
  selector: 'app-thuchanh-blog-detail',
  templateUrl: './thuchanh-blog-detail.component.html',
  styleUrls: ['./thuchanh-blog-detail.component.css']
})
export class ThuchanhBlogDetailComponent implements OnInit {
  post: ThuchanhPost;
  constructor(
    private route: ActivatedRoute,
    private postService: ThuchanhPostService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => (this.post = next),
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }
}
