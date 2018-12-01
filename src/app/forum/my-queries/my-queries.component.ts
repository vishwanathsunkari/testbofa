
import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../question.service';
import { Query } from '../question.model';
import { MatDialog } from '@angular/material';
import { EditQueryComponent } from './../editQuery.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit, OnDestroy {
  myQueries: Query[] = [];
  query: Query;
  queryUpdateSubscription = new Subscription;

  constructor(private queryService: QuestionService,  private dialog: MatDialog) { }

  ngOnInit() {
    this.myQueries = this.queryService.getQueries();
    this.queryUpdateSubscription = this.queryService.getQueryUpdateListener().subscribe(ques => {
      this.myQueries = ques;
    });
  }

onDelete(id: number) {
  this.myQueries = this.queryService.onDelete(id);
  }

  onEdit(id: number) {
    this.dialog.open(EditQueryComponent);
  }

  ngOnDestroy() {
    this.queryUpdateSubscription.unsubscribe();
  }
}
