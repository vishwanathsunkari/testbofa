import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';
import { MatDialog } from '@angular/material';
import { StopQueryComponent } from '../stopQuery.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Query } from '../question.model';

@Component({
  selector: 'app-new-query',
  templateUrl: './new-query.component.html',
  styleUrls: ['./new-query.component.css']
})
export class NewQueryComponent implements OnInit {
  private mode = 'forum/new';
  private id: string;
  query: Query;
  constructor(private queryService: QuestionService, private dialog: MatDialog, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'forum/edit';
        this.id = paramMap.get('id');
        console.log(this.id);
        console.log(this.mode);
        this.query = this.queryService.getQuery(this.id);
      } else {
        this.mode = 'forum/new';
        this.id = null
        console.log(this.mode);
      }
    })
  }

  onSaveQuery(form: NgForm) {
      this.queryService.SaveQueries(form.value.question, form.value.description);
      form.resetForm();
  }

  onStop(form: NgForm) {
    const dilogRef = this.dialog.open(StopQueryComponent);
    dilogRef.afterClosed().subscribe((result) => {
      if (result) {
            form.resetForm();
      }
    });
  }

}
