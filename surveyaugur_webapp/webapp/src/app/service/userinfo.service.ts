import { Injectable } from '@angular/core';
import { UUID } from "angular2-uuid";
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
 email:string
 userId:UUID;
 avatar:string;
}
