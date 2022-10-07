import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProjectPipePipe } from './searchFilter/list-project.pipe';
import { SidebareComponent } from './sidebare/sidebare.component';
import { LoginuserComponent } from './user/loginuser/loginuser.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ListprojectComponent } from './pages/project/listproject/listproject.component';
import { EditprojectComponent } from './pages/project/editproject/editproject.component';
import { AddprojectComponent } from './pages/project/addproject/addproject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    SidebareComponent,
    LoginuserComponent,
    ListProjectPipePipe,
    AdduserComponent,
    ListuserComponent,
    EdituserComponent,
    ListprojectComponent,
    EditprojectComponent,
    AddprojectComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,






  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
