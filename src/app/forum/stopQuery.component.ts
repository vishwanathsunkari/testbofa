import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-query',
  template: `<h1 mat-dialog-title>Are You Sure ?</h1>
              <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Yes</button>
              <button mat-button [mat-dialog-close]="false">No</button>
              </mat-dialog-actions>`
})
export class StopQueryComponent { }
