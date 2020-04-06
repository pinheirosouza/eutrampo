import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryServicesTabPage } from './history-services-tab.page';

describe('HistoryServicesTabPage', () => {
  let component: HistoryServicesTabPage;
  let fixture: ComponentFixture<HistoryServicesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryServicesTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryServicesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
