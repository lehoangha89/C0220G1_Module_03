import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapDictionaryComponent } from './baitap-dictionary.component';

describe('BaitapDictionaryComponent', () => {
  let component: BaitapDictionaryComponent;
  let fixture: ComponentFixture<BaitapDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
