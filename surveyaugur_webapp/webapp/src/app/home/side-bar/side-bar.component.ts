import { Component, OnInit } from '@angular/core';
import { menuList } from './menulist';
import {Router} from '@angular/router';
import { ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { UUID } from "angular2-uuid";
import { UserinfoService } from 'src/app/service/userinfo.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sideMenu = menuList;
  collapse = false;
  private cookieValue_jwt : string;
  helper=new JwtHelperService();
  public email: string;
  public userId: UUID;
  public avatar: string;

  ngOnInit(): void {
    this.cookieValue_jwt =this.cookieService.get('JWT-TOKEN') ;
    console.log("cookie value is = ",this.cookieValue_jwt);
    this.getDecodedAndgetuserName();
  }
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private userInfo:UserinfoService,private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private cookieService: CookieService,private prof:ProfileService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.cookieValue_jwt="";
    this.email="";
    this.avatar="";
    this.userId="";
  }
  getDecodedAndgetuserName(){
    const decodedToken=this.helper.decodeToken(this.cookieValue_jwt);
     this.email=decodedToken.sub;
     this.userId=decodedToken.userId;
     this.avatar=decodedToken.avatar;
     this.userInfo.email=this.email
     this.userInfo.userId=this.userId
     this.userInfo.avatar=this.avatar
     console.log("Email");
      console.log(this.userInfo.email);
     console.log("avator");
      console.log(this.userInfo.avatar);
      this.prof.avatarurl.next(this.userInfo.avatar);
      console.log("UUID");
      console.log(this.userInfo.userId);
   }
  toggleSidebar() {
    this.collapse = !this.collapse;
  }
  routing(pathvar:String){
    this.router.navigate(['/'+pathvar])
    this.collapse = !this.collapse;
  };
}

