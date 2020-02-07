import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusServicosPage } from './meus-servicos.page';

describe('MeusServicosPage', () => {
  let component: MeusServicosPage;
  let fixture: ComponentFixture<MeusServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
