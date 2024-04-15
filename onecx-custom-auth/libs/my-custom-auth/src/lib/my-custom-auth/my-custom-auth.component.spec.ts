import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCustomAuthComponent } from './my-custom-auth.component';

describe('MyCustomAuthComponent', () => {
  let component: MyCustomAuthComponent;
  let fixture: ComponentFixture<MyCustomAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCustomAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
