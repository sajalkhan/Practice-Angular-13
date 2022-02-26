import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string = 'sajal';
  age: number = 28;
  status: string = 'engineer';
  salary: number = 820;

  myDate!: Date;

  btnColor: string;
  isDisable: boolean = true;
  inputValue: string = 'sajal';
  fruits: string[] = ['mango', 'banana', 'apple', 'pineApple', 'jackfruits'];

  constructor() {
    const color: string[] = ['red', 'green', 'blue', 'yellow', 'orange'];
    this.btnColor = `btn ${color[Math.floor(Math.random() * 6)]}`;

    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  showSalary() {
    alert(`${this.name} salary is ${this.salary * 85}/=`);
  }

  getInput(e: any) {
    this.inputValue = e.target.value;
  }

  ngOnInit(): void {}
}
