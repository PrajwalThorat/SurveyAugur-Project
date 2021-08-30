import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
activeTime=new BehaviorSubject(0);
  constructor() { }
}
