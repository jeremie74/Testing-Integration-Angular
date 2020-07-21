import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Appcomponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('should have a link to todos list', () => {
      //Arrange
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    //a href ="todos"
    //Act
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos')
    //Assert
    expect(index).toBeGreaterThan(-1);
  });

});
