import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { QuestionService } from '../question.service';
import { Query } from '../question.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-query-feed',
  templateUrl: './query-feed.component.html',
  styleUrls: ['./query-feed.component.css']
})
export class QueryFeedComponent implements OnInit, AfterViewInit {
  queries: Query[] = [];
  displayedColumns = ['date', 'name', 'question', 'state'];
  dataSource = new MatTableDataSource<Query>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private quetionService: QuestionService) { }

  ngOnInit() {
    this.queries = this.quetionService.getAvailQueries();
    this.dataSource.data = this.queries;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator =  this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
