import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseumsPage } from './museums.page';

describe('MuseumsPage', () => {
  let component: MuseumsPage;
  let fixture: ComponentFixture<MuseumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
