import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  trainingFormGroup: FormGroup;
  @Output() trainingStart = new EventEmitter();
  constructor(private trainingServie: TrainingService, private fb: FormBuilder) { }

  public mockData;

  ngOnInit() {
    this.mockData = this.trainingServie.mockDatabundle();
    this.excersiceForm();
  }

  excersiceForm() {
    this.trainingFormGroup = this.fb.group({
      excersiseDropdown: ['', [Validators.required]],
    });
  }

  trainingSubmit(formParam) {
    this.trainingServie.startExcersie(formParam.excersiseDropdown);
    // this.trainingStart.emit();
  }


  excerciseStart() {
    this.trainingStart.emit();
  }

}
