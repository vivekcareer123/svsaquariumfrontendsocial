import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{path:'homecontent', component : HomecontentComponent},
                        {path:'',redirectTo : '/homecontent',pathMatch:'full'},
                        {path:'loginpage', component : LoginpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
