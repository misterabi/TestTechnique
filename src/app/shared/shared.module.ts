import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MatDialogModule,FormsModule],
  exports: [ConfirmDialogComponent]
})
export class SharedModule {}
