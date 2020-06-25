import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapDictionaryDetailComponent } from './baitap-dictionary-detail.component';

describe('BaitapDictionaryDetailComponent', () => {
  let component: BaitapDictionaryDetailComponent;
  let fixture: ComponentFixture<BaitapDictionaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapDictionaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapDictionaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
