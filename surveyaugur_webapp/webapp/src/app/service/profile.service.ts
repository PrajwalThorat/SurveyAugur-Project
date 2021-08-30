import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProfileData } from './profileData';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
  })
export class ProfileService {
    // Add userid here
    url = '/userservice/api/v1/users/';
    avatarurl=new BehaviorSubject("");


    constructor(
        private http: HttpClient) {

    }


}
