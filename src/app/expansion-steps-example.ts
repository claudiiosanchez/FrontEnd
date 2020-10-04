import {Component,OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question } from './questions';

@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css'],
})

export class ExpansionStepsExample implements OnInit 
{

  public questions: Question;

  public hour: String;

  constructor(private questionsService: QuestionsService) 
  {

  }

  ngOnInit() 
  {
    
    this.questionsService.getQuestions().subscribe(data => (this.questions = data[0].result));
	
    this.questionsService.getQuestions().subscribe(data => (this.hour = data[0].updated));
  
  }

}