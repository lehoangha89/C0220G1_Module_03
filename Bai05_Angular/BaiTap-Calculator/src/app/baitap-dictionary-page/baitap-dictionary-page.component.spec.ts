import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapDictionaryPageComponent } from './baitap-dictionary-page.component';

describe('BaitapDictionaryPageComponent', () => {
  let component: BaitapDictionaryPageComponent;
  let fixture: ComponentFixture<BaitapDictionaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapDictionaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapDictionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
