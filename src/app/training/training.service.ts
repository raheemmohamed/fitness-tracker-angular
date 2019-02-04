import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from './training.model';

@Injectable()
export class TrainingService {
    constructor( router: Router) {}
    currentExcersie: TrainingModel[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    currentTraining() {
    }

    mockDatabundle() {
       return this.currentExcersie;
    }
}
