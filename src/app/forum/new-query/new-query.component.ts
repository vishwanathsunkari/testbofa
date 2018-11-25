import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';
import { MatDialog } from '@angular/material';
import { StopQueryComponent } from '../stopQuery.component';

@Component({
  selector: 'app-new-query',
  templateUrl: './new-query.component.html',
  styleUrls: ['./new-query.component.css']
})
export class NewQueryComponent implements OnInit {
  constructor(private queryService: QuestionService, private dialog: MatDialog) { }

  ngOnInit() {
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
