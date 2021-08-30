import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
   
  }
  openDialog() {
    this.dialog.open(MessageComponent, {
      width:'30%'
    });
  }
}




