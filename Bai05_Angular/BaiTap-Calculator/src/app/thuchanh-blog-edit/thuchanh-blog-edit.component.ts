import { Component, OnInit } from '@angular/core';
import {ThuchanhPost} from '../thuchanh-post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ThuchanhPostService} from '../thuchanh-post.service';

@Component({
  selector: 'app-thuchanh-blog-edit',
  templateUrl: './thuchanh-blog-edit.component.html',
  styleUrls: ['./thuchanh-blog-edit.component.css']
})
export class ThuchanhBlogEditComponent implements OnInit {
  post: ThuchanhPost;
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: ThuchanhPostService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
        this.postForm.patchValue(this.post);
      },
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }

  onSubmit() {
    if (this.postForm.valid) {
      const { value } = this.postForm;
      const data = {
        ...this.post,
        ...value
      };
      this.postService.updatePost(data).subscribe(
        next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error)
      );
    }
  }
}
