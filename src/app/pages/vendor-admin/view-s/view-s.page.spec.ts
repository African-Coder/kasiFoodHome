import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSPage } from './view-s.page';

describe('ViewSPage', () => {
  let component: ViewSPage;
  let fixture: ComponentFixture<ViewSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
