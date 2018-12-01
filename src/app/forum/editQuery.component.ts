import { Component } from '@angular/core';

@Component({
    selector: 'app-edit-query',
    template: `
    <mat-card fxFlex=450px  class="login" mat-dialog-content>
    <mat-card-title fxLayoutAlign="center">Time to Edit!</mat-card-title>
    <form fxLayout="column" class="login-form" fxLayoutAlign="center center" #f="ngForm" (ngSubmit)="onSubmit(f)">
        <mat-form-field>
          <input type="email" matInput placeholder="Your email" ngModel name="email" required #emailInput="ngModel">
          <mat-error *ngIf="emailInput.hasError('required')">Field must not be empty</mat-error>
          <mat-error *ngIf="!emailInput.hasError('required')">E-mail is invalid</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="password" matInput placeholder="Your password" ngModel name="password" required #pwdInput="ngModel" minlength="6">
          <mat-error>password is Invalid</mat-error>
        </mat-form-field>
        <button type="submit" mat-raised-button [disabled]="f.invalid" color="primary">Submit!</button>
      </form>
  </mat-card> `
})
export class EditQueryComponent {}
