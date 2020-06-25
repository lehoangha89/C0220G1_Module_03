import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {
  newEn = '';
  newVn = '';
  forgot = true;
  arrWords = [
    {id: 1, en: 'action', vn: 'hành động', memorized: true},
    {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vn: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vn: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  addWord() {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '';
    this.newVn = '';
    this.forgot = true;
  }

  remove(id: number) {
    const index = this.arrWords.findIndex(item => item.id === id);
    this.arrWords.splice(index, 1);
  }
}
