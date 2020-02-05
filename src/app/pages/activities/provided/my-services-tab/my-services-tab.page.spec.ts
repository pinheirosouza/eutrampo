import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyServicesTabPage } from './my-services-tab.page';

describe('MyServicesTabPage', () => {
  let component: MyServicesTabPage;
  let fixture: ComponentFixture<MyServicesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServicesTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyServicesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
