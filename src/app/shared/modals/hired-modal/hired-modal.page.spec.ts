import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiredModalPage } from './hired-modal.page';

describe('HiredModalPage', () => {
  let component: HiredModalPage;
  let fixture: ComponentFixture<HiredModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiredModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
