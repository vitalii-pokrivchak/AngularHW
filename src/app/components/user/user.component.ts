import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/data/mock.user';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
