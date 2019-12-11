import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvidedPage } from './provided.page';

describe('ProvidedPage', () => {
  let component: ProvidedPage;
  let fixture: ComponentFixture<ProvidedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvidedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
