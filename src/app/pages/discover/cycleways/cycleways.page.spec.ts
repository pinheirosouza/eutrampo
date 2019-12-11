import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CyclewaysPage } from './cycleways.page';

describe('CyclewaysPage', () => {
  let component: CyclewaysPage;
  let fixture: ComponentFixture<CyclewaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclewaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CyclewaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
