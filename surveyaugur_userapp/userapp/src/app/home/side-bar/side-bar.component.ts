import { Component, OnInit } from '@angular/core';
import { menuList } from './menulist.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sideMenu = menuList;
  collapse = false;
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.collapse = !this.collapse;
  }
  routing(pathvar:String){
  this.router.navigate(['/'+pathvar])};

}

