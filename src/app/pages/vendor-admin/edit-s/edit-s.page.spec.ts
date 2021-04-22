import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSPage } from './edit-s.page';

describe('EditSPage', () => {
  let component: EditSPage;
  let fixture: ComponentFixture<EditSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
