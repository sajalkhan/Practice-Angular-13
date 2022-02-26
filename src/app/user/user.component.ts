import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

// sharing data -- https://angular.io/guide/inputs-outputs
export class UserComponent {
  @Input() name!: string; //pass props use decorator Input Note: parent to child
  @Input() age!: number;
  @Input() salary!: number;
  @Input() status!: string;

  @Output() userEvent = new EventEmitter<string>(); // pass data from child to parent

  passData(name: string) {
    this.userEvent.emit(`${name} never quit!`);
  }
}
