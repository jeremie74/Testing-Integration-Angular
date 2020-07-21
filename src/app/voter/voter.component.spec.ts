import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations : [VoterComponent]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    //fixture.nativeElement => return an html element for this component template
    //The component FIXTURE CLASS is a Wrapper around the component

  });

  //Test binding
  it('Should render totalVotes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    //Wrapper around the html elements in JS
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el : HTMLElement = de.nativeElement; 
    expect(el.innerText).toContain('21');
  });

  it ('Should increase the total votes when i click the upvote button', () => {
    //Arrange
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    //Act
    button.triggerEventHandler('click', null);
    //Assert
    expect(component.totalVotes).toBe(1);
  })

});
