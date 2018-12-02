import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-single-query',
  templateUrl: './single-query.component.html',
  styleUrls: ['./single-query.component.css']
})
export class SingleQueryComponent implements OnInit {

  constructor(private questionService: QuestionService) { }
static singleQuery;
isAnswer = false;
answer = '';
  ngOnInit() {
    this.questionService.getSingleQueryListener().subscribe(query => {
      SingleQueryComponent.singleQuery = query;
      console.log(SingleQueryComponent.singleQuery);
    });
  }

  get staticQuery() {
//     console.log(SingleQueryComponent.singleQuery);
    return SingleQueryComponent.singleQuery;
  }

  giveAnswer(form: NgForm) {
      SingleQueryComponent.singleQuery.answer = form.value.answer;
      form.resetForm();
  }

}
