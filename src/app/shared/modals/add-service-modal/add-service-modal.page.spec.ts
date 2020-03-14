import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddServiceModalPage } from './add-service-modal.page';

describe('AddServiceModalPage', () => {
  let component: AddServiceModalPage;
  let fixture: ComponentFixture<AddServiceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddServiceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
