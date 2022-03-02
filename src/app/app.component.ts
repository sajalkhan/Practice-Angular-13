import { Component } from '@angular/core';
import { User } from '../models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  show: boolean = true;

  phoneNumber: string = '01740980351';

  inputHeader: string = 'header';
  users: User[] = [
    {
      name: 'sajal',
      age: 28,
      salary: 2000,
      status: 'engineer',
    },
    {
      name: 'abir',
      age: 26,
      salary: 2400,
      status: 'doctor',
    },
    {
      name: 'milon',
      age: 27,
      salary: 2600,
      status: 'engineer',
    },
    {
      name: 'sharif',
      age: 32,
      salary: 6000,
      status: 'business man',
    },
  ];

  receiveData(msg: string) {
    alert(msg);
  }
}
