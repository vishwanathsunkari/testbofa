import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../question.service';
import { Query } from '../question.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-query-feed',
  templateUrl: './query-feed.component.html',
  styleUrls: ['./query-feed.component.css']
})
export class QueryFeedComponent implements OnInit, AfterViewInit, OnDestroy {
  queries: Query[] = [];
  queryAvailUpdateSubscription = new Subscription;
  displayedColumns = ['date', 'name', 'question', 'state'];
  dataSource = new MatTableDataSource<Query>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private quetionService: QuestionService, private route: Router) { }

  ngOnInit() {
    this.queries = this.quetionService.getAvailQueries();
    this.queryAvailUpdateSubscription = this.quetionService.getAvailQueriesUpdateListener().subscribe( (ques: Query[]) => {
      this.queries = ques;
      this.dataSource.data = this.queries;
    });
    this.dataSource.data = this.queries;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator =  this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClick(i: number) {
      console.log(i);
  }

  ngOnDestroy() {
    this.queryAvailUpdateSubscription.unsubscribe();
  }
}
