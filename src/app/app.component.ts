import { Component } from '@angular/core';

export interface Students{
  name:string;
  subject:string;
  rollNo:number;
  age:number;
}

const students_data:Students[] = [
  {name:'Hamid',subject:'Science',rollNo:1,age:20},
  {name:'Shima',subject:'Math',rollNo:2,age:19},
  {name:'Zahra',subject:'Chemistry',rollNo:3,age:22},
  {name:'Jon',subject:'Mechanical',rollNo:4,age:28}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material-Project';
  col_names: string[] = ['name','subject','rollNo','age'];
  table_data = students_data;
}
