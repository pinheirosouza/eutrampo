import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiredPage } from './hired.page';

describe('HiredPage', () => {
  let component: HiredPage;
  let fixture: ComponentFixture<HiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
