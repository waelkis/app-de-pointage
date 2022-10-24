import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { Works } from 'src/app/models/works';
import { ProjectService } from 'src/app/service/project.service';
import { WorksService } from 'src/app/service/works.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addworks',
  templateUrl: './addworks.component.html',
  styleUrls: ['./addworks.component.css']
})
export class AddworksComponent implements OnInit {

  nouvTask: Works = new Works();
  projectsID!: Project[];

  tab: any = [];
  projectid!: object;
  worksForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogref: MatDialogRef<AddworksComponent>,
    private artserv: WorksService,
    private catserv: ProjectService,

  ) {}

  ngOnInit() {
    this.initForms();
    this.loadWorks();
  }
  initForms() {
    this.worksForm = this.fb.group({
      nombre_heur: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      designation: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),


      project: new FormControl('', [Validators.required]),

    });
  }
  get nombre_heur() {
    return this.worksForm.get('nombre_heur');
  }

  get designation() {
    return this.worksForm.get('designation');
  }


  get project() {
    return this.worksForm.get('project');
  }


  onSubmitForm() {
    let task: Works = this.worksForm?.value;
    this.artserv.Addworks(task).subscribe({
      next: (data) => {
        this.dialogref.close();
        Swal.fire(
          "L'insertion a été effectuée avec succès!",
          'Cliquer içi!',
          'success'
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loadWorks() {
    return (
      this.catserv.getProjects().subscribe((data) => {
        this.projectid = data;
      }),
      (err: any) => console.log(err)
    );
  }
  changeSuit(e: any) {
    this.projectid = e.target.value;

  }

}
