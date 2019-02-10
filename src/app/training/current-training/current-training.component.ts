import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmModelPopupComponent } from '../popups/confirm-model-popup/confirm-model-popup.component';
import { TrainingService } from '../training.service';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() closeDialogModel = new EventEmitter();
  trainingSpinnerTime = 0;
  timer;
  constructor(private dialogModelPopup: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingCountFunc();
  }

  trainingCountFunc() {
    const stepTimeDura = this.trainingService.getExcersieData().duration / 100 * 1000;
    console.log(stepTimeDura);

    this.timer = setInterval(() => {
      this.trainingSpinnerTime = this.trainingSpinnerTime + 1;
      if (this.trainingSpinnerTime >= 100) {
        this.trainingService.completeExcersie();
        clearInterval(this.timer);
      }
    }, stepTimeDura);
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
          this.trainingService.cancelExcersie(this.trainingSpinnerTime);
          setInterval(() => {
            // this.closeDialogModel.emit();
          }, 1000);

      } else {
        this.trainingCountFunc();
      }
      console.log(result);
    });
  }

}
