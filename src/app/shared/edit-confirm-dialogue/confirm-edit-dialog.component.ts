import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-confirm-dialog',
  templateUrl: './confirm-edit-dialog.component.html',
  styleUrls: ['./confirm-edit-dialog.component.css']
})
export class ConfirmEditDialogComponent {
  position: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.position = data;
  }

  onPositionChange(event : Event): void {
    this.position = (event.target as HTMLInputElement).value;;
  }

  confirm(): void {
    if (this.position !== '') {
      this.dialogRef.close(this.position);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
