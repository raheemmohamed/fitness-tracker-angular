import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  trainingSessionStart = false;
  subcribeTraining: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.subcribeTraining = this.trainingService.excerciseChange.subscribe(
      excer => {
        if (excer) {
          this.trainingSessionStart = true;
        } else {
          this.trainingSessionStart = false;
        }
      }
    );
  }

}
