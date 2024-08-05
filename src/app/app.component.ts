import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgClass,
  NgStyle,
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchDefault,
  NgSwitchCase,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  PercentPipe,
  
} from '@angular/common';
import { DataService } from './services/data.service';
import { Data } from './interface/data';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
  ],
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularLearn';
  version: number = 17;
  counter: number = 0;

  //attributes binding
  disabled: boolean = false;
  image_url: string =
    'https://angular.io/assets/images/logos/angular/angular.png';

  //styles binding
  bgColor: string = 'green';
  title_color: string = 'blue';

  //class binding
  textRed: string = 'red';

  //func binding
  plusCounter() {
    this.counter++;
  }

  minusCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  //two way binding ngModel
  inputText: string = 'Hellooooo';

  //ngClass
  message: string = 'Hello ngClass';
  classess: string = 'text-size danger';

  //ngStyle ==> can override external class
  selectedColor: string = 'green';

  //condition render
  isLogin: boolean = false;
  username: string = 'admin';
  approved: boolean = false;

  //ng for
  studentNames: string[] = ['Ahmed', 'Mohamed', 'Ali', 'Sayed'];

  //ng switch
  grade: string = 'C';

  //new control flow  angular 17
  a: number = 1;
  b: number = 1;

  //for multi element
  items: any = [
    { id: 778, name: 'Ahmed' },
    { id: 211, name: 'Mohamed' },
    { id: 222, name: 'Ali' },
  ];

  //Pipe
  textFunc: string = 'Ahmed';
  today: number = Date.now();

  //service DI
  data: string[] = [];
  posts: Data[] = [];
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.dataService.getPost().subscribe({
      next: (response: Data[]) => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.log(error);
      },
    })

  }
}
