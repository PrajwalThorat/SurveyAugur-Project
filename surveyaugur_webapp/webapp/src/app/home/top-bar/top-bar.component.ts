import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  avatar:string="";
  constructor(private userinfo:UserinfoService,private http:HttpClient,private profile:ProfileService) { }

  ngOnInit(): void {

       this.avatar=this.userinfo.avatar;
        this.profile.avatarurl.subscribe((data)=>{
          this.avatar=data;
        })

  }

}
