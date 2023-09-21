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
import { ProduitComponent } from './pages/produit/produit.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListWorksPipePipe } from './searchFilter/list-works-pipe.pipe';











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
    ProduitComponent,
    DataTableComponent,
    ListWorksPipePipe,





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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,







  ],

  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
