import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePicturePage } from './profile-picture.page';

describe('ProfilePicturePage', () => {
  let component: ProfilePicturePage;
  let fixture: ComponentFixture<ProfilePicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
