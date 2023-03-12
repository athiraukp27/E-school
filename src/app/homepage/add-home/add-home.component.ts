import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';
@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  uid=""
  pswd=""

  //formgroup

 loginform=this.lg.group({
  uid:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(4)]],
  pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z "*]*')]]
})
  
  constructor(private router:Router,private ds:DataService, private lg:FormBuilder) { }

  login(){
    var uid=this.loginform.value.uid
    var pswd=this.loginform.value.pwd

   const result= this.ds.login(uid,pswd)

   if(this.loginform.valid){
    
  if(result){
    this.router.navigateByUrl("view-home")
    }
  
   }
  
  }
 
    ngOnInit(): void {
    }
  
  }
  
  //template referencing variable

// login(a:any,p:any){
//   console.log(a.value);
  
//   var acno=a.value
//   var pswd=p.val
//   var db=this.db
// if(acno in db){
//   if(pswd==db[acno]["password"]){
//     alert("login succesfull")
//   }
//   else{
// alert("incorrect password")
//   }
//  }
// else{
//   alert("account doesnt exist")
// }
// }
//   ngOnInit(): void {
//   }

// }  

