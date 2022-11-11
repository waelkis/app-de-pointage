import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { Works } from 'src/app/models/works';
import { WorksService } from 'src/app/service/works.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editworks',
  templateUrl: './editworks.component.html',
  styleUrls: ['./editworks.component.css']
})
export class EditworksComponent implements OnInit {

  id: object;
  worksForm!: FormGroup;
  nombre_heur!: string;
  description!: string;
  date_jour!:string;

  project!: Project;
  user!:User

  constructor(
    private formbuilder: FormBuilder,
    private CatService: WorksService,
    public dialogref: MatDialogRef<EditworksComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;
    this.nombre_heur=data.nombre_heur;
    this.description=data.description;
    this.date_jour=data.date_jour;
    //this.project.name_project=data.project.name_project;
    //this.user.username=data.user.username;
  }
  cat: Works = new Works();
  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.worksForm = this.formbuilder.group({
      id: this.id,

      nombre_heur:this.nombre_heur,
      description:this.description,
    //  project:this.project.name_project,
      date_jour:this.date_jour,
     // user:this.user.username

    });
  }
  onSubmitForm() {
    const formValue = this.worksForm.value;
    const newCat: Works = new Works();
    newCat.id = formValue['id'];
   // newCat.project.name_project = formValue['name_project'];
     newCat.description = formValue['description'];
     newCat.dateJour = formValue['dateJour'];
    // newCat.user.username = formValue['username'];

    this.CatService.UpdateWorks(newCat.id, newCat).subscribe((data) => {
      this.cat = data;
    });

    this.dialogref.close();
    Swal.fire(
      'La modification a été effectuée avec succès!',
      'Cliquer içi!',
      'success'
    );
  }
  onFileChanged(event: any) {
    console.log(event.target.files[0].name);
  }
}
