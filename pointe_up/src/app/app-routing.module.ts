import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuarduserGuard } from './guard/guarduser.guard';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { AddprojectComponent } from './pages/project/addproject/addproject.component';

import { EditprojectComponent } from './pages/project/editproject/editproject.component';
import { ListprojectComponent } from './pages/project/listproject/listproject.component';
import { AddworksComponent } from './pages/works/addworks/addworks.component';
import { EditworksComponent } from './pages/works/editworks/editworks.component';
import { ListworksComponent } from './pages/works/listworks/listworks.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { LoginuserComponent } from './user/loginuser/loginuser.component';

const routes: Routes = [
  {path:'',component:SidebareComponent,canActivate:[GuarduserGuard],children :[
    {path:'adduser',component:AdduserComponent},
    {path:'listuser',component:ListuserComponent},
    {path:'edituser/:_id',component:EdituserComponent},
    {path:'addproject',component:AddprojectComponent},
    {path:'listproject',component:ListprojectComponent},
    {path:'editproject/:_id',component:EditprojectComponent},
    {path:'addworks',component:AddworksComponent},
    {path:'editworks/:id',component:EditworksComponent},
    {path:'listworks',component:ListworksComponent},

  ]},


  {path:'login',component:LoginuserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
