import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversasPage } from './conversas.page';

describe('ConversasPage', () => {
  let component: ConversasPage;
  let fixture: ComponentFixture<ConversasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
