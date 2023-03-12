import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  
  user:any
  
  constructor(private ds:DataService) { 
    this.user=this.ds.currentuser
  }

  ngOnInit(): void {

  }

}
