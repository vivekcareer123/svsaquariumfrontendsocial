import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] =[];
  constructor(private router:Router) { 

  }

  ngOnInit() {
    this.items = [
        {label: 'Settings', icon: 'pi pi-cog', command: () => {this.processProfileSetting(); }},
        {label: 'Sign Out', icon: 'pi pi-sign-out', command: () => {
            this.logOut();
        }}
    ];
  }
  logOut() {
  
  }
  processProfileSetting() {
    
  }
  processAddress() {
   
  }
 
  processProfile(){

  }
  processLoginScreen(){
    this.router.navigate(['loginpage'])
  }
  processHomeScreen(){
    this.router.navigate(['homecontent'])
  }
}
