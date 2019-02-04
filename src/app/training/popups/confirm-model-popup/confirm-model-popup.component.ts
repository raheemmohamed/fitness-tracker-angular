import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm-model-popup',
  templateUrl: './confirm-model-popup.component.html',
  styleUrls: ['./confirm-model-popup.component.css']
})
export class ConfirmModelPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passeddata: any) { }

  ngOnInit() {
  }

}
