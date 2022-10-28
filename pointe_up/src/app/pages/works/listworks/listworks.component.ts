import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import { StorageService } from 'src/app/service/storage.service';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-listworks',
  templateUrl: './listworks.component.html',
  styleUrls: ['./listworks.component.css']
})
export class ListworksComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
