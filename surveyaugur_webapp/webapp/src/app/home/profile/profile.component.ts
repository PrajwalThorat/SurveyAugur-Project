import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';

import { UserinfoService } from 'src/app/service/userinfo.service';
import { User } from './model/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  profileImagePath: ArrayBuffer | string | null = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HrjlxizejA_sfkfPhIaAdv5Cxy6A-HGFzA&usqp=CAU";
  isEditing = false;
  user1:User=new User();
  enable:boolean=true;
  constructor(private http:HttpClient,private userinfo:UserinfoService,private prof:ProfileService) {

  }

  ngOnInit(): void {

    let url="/userservice/api/v1/users/"+this.userinfo.userId;
    this.http.get(url).subscribe((data)=>{
      console.log(data);
      this.user1.userId=data["userId"];
      this.user1.username=data["username"]
      console.log(this.user1.username);
      this.user1.email=data["email"];
      this.user1.avatar=data["avatar"];
          this.prof.avatarurl.next(data["avatar"]);
      this.profileImagePath=data["avatar"];
      this.user1.userRole=data["userRole"];
      this.user1.accessLevel=data["accessLevel"];
      this.user1.organization=data["organization"];
      console.log(this.user1);
    })

  }

  onEdit() {
    this.isEditing = true;
  }

  onsave(uinfo:NgForm) {
    this.isEditing = false;
    let url="/userservice/api/v1/users/"+this.userinfo.userId;
   let url1="/userservice/api/v1/users/"+this.userinfo.userId;

   console.log(uinfo);
   let form1=uinfo["value"]
  this.user1.organization=form1["org"];
  this.user1.avatar=this.profileImagePath.toString();
 this.prof.avatarurl.next(this.profileImagePath.toString());
  this.http.put<User>(url1,this.user1).subscribe((data)=>{
    console.log(data)
  })
  this.http.get(url).subscribe((data)=>{
    console.log(data);
    this.user1.userId=data["userId"];
    this.user1.username=data["username"]
    console.log(this.user1.username);
    this.user1.email=data["email"];
    this.user1.avatar=data["avatar"];
    this.prof.avatarurl.next(data["avatar"]);
    this.profileImagePath=data["avatar"];
    this.user1.userRole=data["userRole"];
    this.user1.accessLevel=data["accessLevel"];
    this.user1.organization=data["organization"];
    console.log(this.user1);
  })

console.log("worked");


  }

  readURL(event: any) {
    console.log("Image uploaded");
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();

    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.profileImagePath = reader.result;
    };
    console.log(this.profileImagePath);
    this.prof.avatarurl.next(this.profileImagePath.toString());
  }

}
