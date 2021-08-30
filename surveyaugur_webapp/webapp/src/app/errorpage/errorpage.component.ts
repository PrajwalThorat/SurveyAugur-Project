import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  public screenWidth: any;
  public screenHeight: any;
  public errorCode: any;
  public errorDescription:any;

  constructor(private router: Router) {
    this.errorCode = this.router.getCurrentNavigation()?.extras.state?.errorCode;
   }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.errorDescriptionCheck(this.errorCode);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  errorDescriptionCheck(errorCode:number){
      switch(this.errorCode){
        case 400: this.errorDescription="Bad Request";
          break;
        case 401: this.errorDescription="Unauthorized";
          break;
        case 402: this.errorDescription="Payment Required";
          break;
        case 403: this.errorDescription="Forbidden";
          break;
        case 404: this.errorDescription="Not Found";
          break;
        case 405: this.errorDescription="Method Not Allowed";
          break;
        case 406: this.errorDescription="Not Acceptable";
          break;
        case 408: this.errorDescription="Request Timeout";
          break;
        case 500: this.errorDescription="Internal Error";
          break;
        default : this.errorDescription="Oops! some error occured. Please try again later.";
          this.errorCode= null;
          break;
      }
    }
}
