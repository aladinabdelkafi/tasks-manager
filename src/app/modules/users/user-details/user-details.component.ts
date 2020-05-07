import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../core/models';
import {UserService} from '../../../core/services/user/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private user: User = new User();

  constructor(private userService: UserService,private activateRoute:ActivatedRoute) {
    console.log(this.activateRoute.snapshot.params);
  }

  ngOnInit() {
    this.userService.findById('users/'+ atob(this.activateRoute.snapshot.params.idUser)).
    subscribe(user =>{
      this.user = user;
    },err=>{
      console.log(err);
    });
    ;
  }


}