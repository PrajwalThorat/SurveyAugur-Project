import { Component, OnInit, HostListener,Inject} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { RoutingService } from '../service/routing.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public screenWidth: any;
  public screenHeight: any;

  slides = [
    {'image': 'assets/images/survey1.jpg'},
    {'image': 'assets/images/survey2.jpg'},
    {'image': 'assets/images/survey3.jpg'},
  ];

  constructor(private routingService: RoutingService,@Inject(DOCUMENT) private document: Document){
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  togoogle(){
    this.document.location.href="/userservice/api/v1/authorize/app/googlelogin";
  }
}
