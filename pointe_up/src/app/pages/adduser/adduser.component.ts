
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  newuserFormGroup!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newuserFormGroup = this.fb.group({
      username: this.fb.control(null, [ Validators.required, Validators.minLength(4),   ]),


      email: this.fb.control(null, [Validators.required, Validators.email]),
       password: this.fb.control(null, [Validators.required]),
      // tel: this.fb.control(null, [Validators.required]),
     // roles: this.fb.control(null, [Validators.required]),


    });
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



    );
  }

}
