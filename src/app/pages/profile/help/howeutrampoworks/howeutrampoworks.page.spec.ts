import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoweutrampoworksPage } from './howeutrampoworks.page';

describe('HoweutrampoworksPage', () => {
  let component: HoweutrampoworksPage;
  let fixture: ComponentFixture<HoweutrampoworksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoweutrampoworksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoweutrampoworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
