import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListItemComponent } from './item.component';

describe('RecipeListItemComponent', () => {
  let component: RecipeListItemComponent;
  let fixture: ComponentFixture<RecipeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
