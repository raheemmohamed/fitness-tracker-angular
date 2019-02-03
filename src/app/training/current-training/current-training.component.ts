import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  trainingSpinnerTime = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.trainingSpinnerTime = this.trainingSpinnerTime + 5;
    }, 1000);
  }

}
