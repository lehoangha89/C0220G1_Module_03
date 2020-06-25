import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThuchanhPostService} from '../thuchanh-post.service';
import {ThuchanhPost} from '../thuchanh-post';

@Component({
  selector: 'app-thuchanh-blog',
  templateUrl: './thuchanh-blog.component.html',
  styleUrls: ['./thuchanh-blog.component.css']
})
export class ThuchanhBlogComponent implements OnInit {
  postList: ThuchanhPost[] = [];
  postForm: FormGroup;

  constructor(
    private postService: ThuchanhPostService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.postService
      .getPosts()
      .subscribe(next => (this.postList = next), error => (this.postList = []));
  }

  onSubmit() {
    if (this.postForm.valid) {

      this.postService.createPost(this.postForm.value)
        .subscribe(next => {
          this.postList.unshift(next);
          this.postForm.reset({
            title: '',
            body: ''
          });
          alert('success');
        }, error => console.log(error));
    }
  }

  deletePost(i) {
    const post = this.postList[i];
    this.postService.deletePost(post.id).subscribe(() => {
      this.postList = this.postList.filter(t => t.id !== post.id);
    });
  }

}
