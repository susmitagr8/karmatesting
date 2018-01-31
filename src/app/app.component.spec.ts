import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Rx';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppModule} from './app.module';
 
/*------------------------------ type 1------------------------------*/ 
/*
describe('AppComponent Testing',()=>{
  var appobj:AppComponent;
  var userobj:UserService;
   beforeEach(()=>{
     userobj=new UserService(this.http);
     appobj=new AppComponent(userobj);
   });
   
   it('status should be 200',()=>{
      spyOn(userobj,'getUser').and.returnValue(Observable.of([200]));
      appobj.loadUser('eric');
      expect(appobj.profile).toEqual([200]);
   })
   it('status should be 404 ',()=>{
    spyOn(userobj,'getUser').and.returnValue(Observable.of([404]));
    appobj.loadUser('erica');
    expect(appobj.profile).toEqual([404]);
   })
});
*/


/*------------------------------ type 2------------------------------*/ 
/*
describe('AppComponent Testing',()=>{
  var appobj:AppComponent;
  var userobj:UserService;
  
   beforeEach(()=>{
     userobj=new UserService(this.http);
     appobj=new AppComponent(userobj);
     spyOn(userobj,'getUser').and.callFake(function(a:string){
      if(a=='eric')
      return Observable.of([200]);
      return Observable.of([404]);
    })
   });
   
   it('status should be 200 success',()=>{
      appobj.loadUser('eric');
      expect(appobj.profile).toEqual([200]);
      expect(userobj.getUser).toHaveBeenCalled();
   })
   it('status should be 404 error ',()=>{
    appobj.loadUser('erica');
    expect(appobj.profile).toEqual([404]);
    expect(userobj.getUser).toHaveBeenCalled();
   })
});
*/

/*------------------------------ type 3------------------------------*/ 
describe('AppComponent Testing',()=>{
  var appobj:AppComponent;
  var userobj:UserService;
  
   beforeEach(()=>{
    // userobj=new UserService(this.http);
    // appobj=new AppComponent(userobj);
     TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpModule
      ],
      providers: [UserService],
     });
     const fixture=TestBed.createComponent(AppComponent);
     appobj=fixture.componentInstance;
     userobj=TestBed.get(UserService);
     spyOn(userobj,'getUser').and.callFake(function(a:string){
      if(a=='eric')
      return Observable.of([200]);
      return Observable.of([404]);
    })
   });
   
   it('status should be 200',()=>{
      appobj.loadUser('eric');
      expect(appobj.profile).toEqual([200]);
   })
   it('status should be 404',()=>{
    appobj.loadUser('erica');
    expect(appobj.profile).toEqual([404]);
   })
});