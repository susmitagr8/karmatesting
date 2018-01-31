import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <button (click)="loadUser('eric')">Load profile</button>
  {{ profile | json }}
</div>
`,
  
})

export class AppComponent 
{
  //title:string='Aricent';
  //fn:string="";
  //ln:string="";
  //dob:string="";
  //create:string="";
  //counter:boolean=false;
  //counter1:boolean=true;
  //
  //  display()
  //  {
  //     this.counter=true;
  //     return this.fn;
//
  //  }
  //  confirm()
  //  {
  //     alert("Data Stored In The Database");
  //     this.counter=false;
  //     this.counter1=false;
  //     this.create="Welcome "+this.fn+" "+this.ln;
  //  }
  //  change()
  //  {
  //     alert("Enter Your Details Again");
  //     this.counter=false;
  //     this.fn=null;
  //     this.ln=null;
  //     this.dob=null;
  //  }
  //  check(abc:string,xyz:string):boolean{
  //    if(abc && xyz){
  //      return true;
  //    }
  //    return false;
  //  }
  xyz:UserService;
  constructor(private userService: UserService) {
    //this.xyz=userService;
  }
  profile = {};

  loadUser(a:string) {
    //this.userService.getUser().subscribe(data => this.profile = data);
     return this.userService.getUser(a).subscribe(data => 
      {

        this.profile = data;
      }
      
    );
  }
}
 