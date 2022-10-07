import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  dataArray!:User[]
users!: Observable<Array<User>>;

  constructor(private userservice:UserService ) {


  }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(data=>this.dataArray=data)
    console.log(this.dataArray)




  }

  handleDeleteUser(c: User) {
    let conf = confirm('Are you sure?');
    if (!conf) return;
    this.userservice.deleteUser(c.id).subscribe({
      next: (resp) => {
        this.users = this.users.pipe(
          map((data) => {
            let index = data.indexOf(c);
            data.slice(index, 1);
            return data;
          })
        );
      },
      error: (err) => {
        console.log(err);
      },

    });
    this.userservice.refresh()
  }

}
