import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmModelPopupComponent } from '../popups/confirm-model-popup/confirm-model-popup.component';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() closeDialogModel = new EventEmitter();
  trainingSpinnerTime = 0;
  timer;
  constructor(private dialogModelPopup: MatDialog) { }

  ngOnInit() {
    this.trainingCountFunc();
  }

  trainingCountFunc() {
    this.timer = setInterval(() => {
      this.trainingSpinnerTime = this.trainingSpinnerTime + 5;
      if (this.trainingSpinnerTime >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStopTraining() {
     clearInterval(this.timer);
     const dialogRef = this.dialogModelPopup.open(ConfirmModelPopupComponent, {
      data: {
       progress: this.trainingSpinnerTime
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const ModelCloseResult = result;
      if (!ModelCloseResult === false) {
          clearInterval(this.timer);

          setInterval(() => {
            this.closeDialogModel.emit();
          }, 1000);

      } else {
        this.trainingCountFunc();
      }
      console.log(result);
    });
  }

}
