import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapviewPage } from './mapview.page';

describe('MapviewPage', () => {
  let component: MapviewPage;
  let fixture: ComponentFixture<MapviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
