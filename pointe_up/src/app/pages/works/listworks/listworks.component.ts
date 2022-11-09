import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { Works } from 'src/app/models/works';

import { StorageService } from 'src/app/service/storage.service';
import { WorksService } from 'src/app/service/works.service';
import Swal from 'sweetalert2';
import { EditworksComponent } from '../editworks/editworks.component';

@Component({
  selector: 'app-listworks',
  templateUrl: './listworks.component.html',
  styleUrls: ['./listworks.component.css']
})
export class ListworksComponent implements OnInit {

  searchCat!: string;
  router: any;
  constructor(
    private CatService: WorksService,
    public storage: StorageService,
    private dialog: MatDialog
  ) {}

  listworks!: Works[];

  ngOnInit() {
    this.loadWorks();
  }
  loadWorks = () => {
    return this.CatService.getWorks().subscribe((data) => {
      this.listworks = data;
    });
  };

  onDetail(obj: Works) {
    const dialogRef = this.dialog.open(EditworksComponent, {
      width: '40%',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.loadWorks();
    });
  }
  Deleteworks = (id: Object) => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.CatService.DeleteWorks(id).subscribe((res) => {
          this.loadWorks();
        });
        Swal.fire(
          'Supprimé!',
          'La suppression a été effectuée avec succées.',
          'success'
        );
        
      }
    });
  };
}
