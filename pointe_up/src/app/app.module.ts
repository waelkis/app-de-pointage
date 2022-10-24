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

import { DayPilotModule } from 'daypilot-pro-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddworksComponent } from './pages/works/addworks/addworks.component';
import { EditworksComponent } from './pages/works/editworks/editworks.component';
import { ListworksComponent } from './pages/works/listworks/listworks.component';



import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { AjouterComponent } from './pages/adduser/ajouter/ajouter.component';






import { ClipboardModule } from 'ngx-clipboard';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';







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
    AddprojectComponent,
    AddworksComponent,
    EditworksComponent,
    ListworksComponent,
    AjouterComponent,





  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DayPilotModule,
    Ng2SearchPipeModule,



   ClipboardModule,
    MatTableModule,
    MatDialogModule,
    //CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
   MatDividerModule,
  //   * MATERIAL IMPORTS
   // MatSidenavModule,
    MatToolbarModule,
     MatInputModule,
    MatIconModule,
    MatDividerModule,
 //   MatListModule,
     MatTableModule,
     HttpClientModule,
     MatPaginatorModule,
     ReactiveFormsModule,
     MatDialogModule,
    // MatMenuModule,
     MatButtonModule,
     MatRippleModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     FormsModule,





  ],

  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
