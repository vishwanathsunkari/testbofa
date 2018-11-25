import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Query } from '../question.model';


@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {
  myQueries: Query[] = [];

  constructor(private queryService: QuestionService) { }

  ngOnInit() {
    this.myQueries = this.queryService.getQueries();
    console.log(this.myQueries);
  }



}
