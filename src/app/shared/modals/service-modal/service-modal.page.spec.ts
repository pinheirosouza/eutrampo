import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceModalPage } from './service-modal.page';

describe('ServiceModalPage', () => {
  let component: ServiceModalPage;
  let fixture: ComponentFixture<ServiceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
