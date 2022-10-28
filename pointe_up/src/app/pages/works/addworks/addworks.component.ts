import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  proj!: Project[];
  myform!: FormGroup;
  date!: FormControl;
  email!: FormControl;
  project!: FormControl;
constructor(private projectser:ProjectService){}
   Date =new Date();

  ngOnInit(): void {

    this.createFormControls();
    this.createForm();
    this.LoadProject()

  }

  createFormControls() {
    this.date = new FormControl('', Validators.required);

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);


    this.project = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.date,

      }),
      email: this.email,

      proj: this.project
    });
  }
  LoadProject(){
    return this.projectser.getProjects().subscribe(
      data =>this.proj =data
    ),
    (err:any)=>console.log(err)
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }
// nouvworks: Works=new Works();
// projectID!:Project[];
// tab!:any[];
// projectid!:object;
// worksForm!:FormGroup;
// constructor(
//   private fb: FormBuilder,
//   public dialogref: MatDialogRef<AddworksComponent>,
//   private artserv: WorksService,
//   private catserv: ProjectService,

// ) {}



//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   initForms(){
//     this.worksForm= this.fb.group({
//       nombre_heur:new FormControl('',[Validators.required,Validators.minLength(2)]),
//       designation:new FormControl('',[Validators.required,Validators.minLength(2)]),
//       Project: new FormControl('', [Validators.required]),
//     })
//   }
//   get nombre_heur() {
//     return this.worksForm.get('nombre_heur');
//   }

//   get designation() {
//     return this.worksForm.get('designation');
//   }

//   get Project() {
//     return this.worksForm.get('Project');
//   }
// onSubmitForm(){
//   let works:Works = this.worksForm?.value;
//   this.artserv.Addworks(works).subscribe({
//     next:(data)=>{
//       this.dialogref.close();
//         Swal.fire(
//           "L'insertion a été effectuée avec succès!",
//           'Cliquer içi!',
//           'success'
//         );
//     },
//     error: (err) => {
//       console.log(err);
//     },
//   })
// }



}


