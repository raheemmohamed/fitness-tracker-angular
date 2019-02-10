import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from './training.model';
import { Subject } from 'rxjs';
import { EventEmitter } from 'protractor';

@Injectable()
export class TrainingService {
    private runninsExercise: TrainingModel;
    private Excersie: TrainingModel[] = [];

    excerciseChange = new Subject<TrainingModel>();

    constructor( router: Router) {}
    currentExcersie: TrainingModel[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 20, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    currentTraining() {
    }

    mockDatabundle() {
       return this.currentExcersie;
    }

    startExcersie(paramId: string) {
        this.runninsExercise = this.currentExcersie.find(exce => exce.id === paramId);
        this.excerciseChange.next({...this.runninsExercise});
    }

    getExcersieData() {
        return {...this.runninsExercise};
    }

    completeExcersie() {
        this.Excersie.push({
            ...this.runninsExercise,
            date: new Date(),
            state: 'completed'
        });
        this.runninsExercise = null;
        this.excerciseChange.next(null);
    }

    cancelExcersie(progress) {
        this.Excersie.push({
            ...this.runninsExercise,
            duration: this.runninsExercise.duration * (progress / 100),
            calories: this.runninsExercise.calories * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.runninsExercise = null;
        this.excerciseChange.next(null);
    }

    getCompletedorCancelExcersice() {
        return this.Excersie;
    }
}
