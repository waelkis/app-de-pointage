import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { User } from 'src/app/models/user';
import { ClientService } from 'src/app/service/client.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { AjouterComponent } from './ajouter/ajouter.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {






  [x: string]: any;

  nomPrenom!: String;

  formValue = new FormGroup({
    reference: new FormControl(''),
    cin: new FormControl(''),
    nomPrenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    pays: new FormControl(''),
    numAssureSocial: new FormControl(''),
    numTel1: new FormControl(''),
    numTel2: new FormControl(''),
    groupe: new FormControl(''),
    organisme: new FormControl(''),
    matriculeFiscal: new FormControl(''),
    observations: new FormControl(''),
    //vendeur: new FormControl(''),
  })


  dataSource!: MatTableDataSource<Client>;
  client: Client = new Client();
  clientData !: any;
  listClient: any;
  displayedColumns: string[] = ['reference', 'nomPrenom', 'cin', 'solde', 'nbreVisite', 'dateNaissance', 'observations', 'numTel1',  'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;


  newuserFormGroup!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private userservice: UserService,
    private router: Router,
    public dialog: MatDialog,
    private serviceClient: ClientService,
  ) {}

  ngOnInit(): void {
    this.newuserFormGroup = this.fb.group({
      username: this.fb.control(null, [ Validators.required, Validators.minLength(4),   ]),


      email: this.fb.control(null, [Validators.required, Validators.email]),
       password: this.fb.control(null, [Validators.required]),
      roles: this.fb.control(null, [Validators.required]),
    


    });
    this.getAllClient();
  }
  handleSaveuser() {
    let user: User = this.newuserFormGroup?.value;
    this.userservice.addUsers(user).subscribe(
      (data) => {
        Swal.fire(
          'Good job!',
          'user has been successfully saved !',
          'success'
        );
        this.router.navigateByUrl('/listuser');
      },
     
      data=>this.router.navigateByUrl('/listusers')

    );
  }








 




  //open modal
  openDialog(): void {
    this.dialogRef = this.dialog.open(AjouterComponent, {
      height: '90%',
      width: '80%',
      data: {
        nomPrenom: this.client.nomPrenom,
        numTel1: this.client.numTel1,
        numTel2: this.client.numTel2,
        email: this.client.email,
        dateNaissance: this.client.dateNaissance,
        age: this.client.age,
        cin: this.client.cin,
        numAssureSocial: this.client.numAssureSocial,
        adresse: this.client.adresse,
        ville: this.client.ville,
        pays: this.client.pays,
        groupe: this.client.groupe,
        organisme: this.client.organisme,
        observations: this.client.observations,
        matriculeFiscal: this.client.matriculeFiscal
      },
    });
    this.dialogRef.afterClosed().subscribe((_result: any) => {
      this.getAllClient()
    });
  }

  // openDialogFile(): void {
  //   this.clientFile.openDialogFile();
  // }

  // onEditFile(row: any) {
  //   this.clientFile.dialogRef.componentInstance.onEditFile(row);
  // }

  // getVisiteByclient(client: any) {
  //   console.log(client.solde)
  //   if (client.solde != null) {
  //     this.clientFile.getVisiteByClient(client.id, client.solde);

  //   } else {
  //     this.clientFile.getVisiteByClient(client.id, 0);

  //   }

  // }

  //fill in fields from client information
  onEdite(row: any) {
    this.dialogRef.componentInstance.onEdit(row);
  }

  addClient() {
    this.dialogRef.componentInstance.clickAddClient();
  }

  //find all client
  getAllClient() {
    this.serviceClient.getClient().subscribe(
      data => {
        this.listClient = data;
        this.dataSource = new MatTableDataSource(this.listClient)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  //remove client
  deleteClient(id: any) {
    if (confirm("êtes-vous sur de supprimer ce client ?")) {
      this.serviceClient.DeleteClient(id)
        .subscribe(_res => {
          alert("Client supprimé ");
          this.getAllClient();
        }
        )
    }
  }

  //search by first name
  /*Search() {
      if (this.nomPrenom != "") {
        this.dataSource = this.listClient.filter(res => {
          return res.nomPrenom.toLocaleLowerCase().match(this.nomPrenom.toLocaleLowerCase());
        });
      } else if (this.nomPrenom == "") {
        this.getAllClient();
      }
  }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
    console.log(filterValue.trim().toLowerCase());
  }


  exproterclient(){
    
    this.serviceClient.imprimerClient().subscribe(x=>{
      
      const blob = new Blob([x], {type: "application/pdf"});
      const nav = (window.navigator as any);

      if(window.navigator && (window.navigator as any).msSaveOrOpenBlob){
        nav.OpenBlob(blob);
        return;
      }
      const data =window.URL.createObjectURL(blob);
      const link =document.createElement('a');
      link.href= data;
      link.download= "client.pdf"
      link.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true, view:window}));

      setTimeout(function(){
        window.URL.revokeObjectURL(data);
      },100)
  });
}

//pagination
//clientsState$: Observable<{appstate:String , appData?:ApiResponse<Page>,error?:HttpErrorResponse}> | undefined = undefined;



}
