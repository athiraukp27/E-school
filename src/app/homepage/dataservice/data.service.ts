import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any
  db: any = {
    1000: { "uid": 1000, "uname": "anju", "pswd": "anju123" },
    1001: { "uid": 1001, "uname": "shritik", "pswd": "shree123" }

  }
  constructor() { }

  //login

  login(uid: any, pwd: any) {

    if (uid in this.db) {
      if (pwd == this.db[uid]["pswd"]) {
      this.currentuser= this.db[uid]["uname"]
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("user doesnt exist")
      return false
    }

  }

  //register

  register(uid:any,uname:any,pwd:any){
    if (uid in this.db) {
      if (pwd == this.db[uid]["pswd"]) {
       this.currentuser=this.db[uid]["uname"]
        return true
      }
      else{
        alert("Invalid Password")
        return false
      }
  }
  else {
    alert("user doesnt exist")
    return false
  }
}
}