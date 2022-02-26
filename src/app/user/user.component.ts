import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

// sharing data -- https://angular.io/guide/inputs-outputs
export class UserComponent implements OnInit, OnChanges {
  @Input() name!: string; //pass props use decorator Input Note: parent to child
  @Input() age!: number;
  @Input() salary!: number;
  @Input() status!: string;

  @Output() userEvent = new EventEmitter<string>(); // pass data from child to parent

  passData(name: string) {
    this.userEvent.emit(`${name} never quit!`);
  }

  //TODO: ---lifecycle hooks---- https://angular.io/guide/lifecycle-hooks --------

  // onInit and constructor 2tai ek bar call hoy
  constructor() {
    console.log('constructonr call -- ', this.name);
    //! it's mainly use for initilize property
  }

  setTimer: any;
  //ngOnInit component ready hoye jowar por call hoy. like react er component did mount hook er moto
  ngOnInit() {
    console.log('ngOnInit call -- ', this.name);

    this.setTimer = setInterval(() => {
      console.log('timer running....');
    }, 3000);
    //! Properties initilize
    //! event listener register
    //! initial data fetch
  }

  // jokhon kono input props er value change hobe tokhon eta call hobe
  ngOnChanges(value: SimpleChanges) {
    console.log('ngOnChanges -- ', value);
  }

  // jokhon kono component memory theke free kore dibo mane dom theke fele dibo
  // tokhon eta call hobe
  ngOnDestroy() {
    console.log('component destroyed!');
    clearInterval(this.setTimer);
  }
}
