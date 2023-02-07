import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

 course=[
  {id:101,name:`Javascript for beginner`,Description1:`This course will provide fundamentals `,Price:`$00.00`,type:`Free`,image:`/assets/JS img.png`},
  {id:102,name:`Angular for beginner`,Description1:`This course will provide fundamentals `,Price:`$4500`,type:`Premium`,image:`/assets/angular imh.png`},
  {id:103,name:`HTML for beginner`,Description1:`This course will provide fundamentals `,Price:`$4500`,type:`Free`,image:`/assets/HTML IMG.png`},
  {id:103,name:`Java for beginner`,Description1:`This course will provide fundamentals `,Price:`$4000`,type:`Premium`,image:`/assets/angular imh.png`},
  {id:103,name:`Angular for beginner`,Description1:`This course will provide fundamentals `,Price:`$5500`,type:`Free`,image:`/assets/JS img.png`},
  {id:103,name:`DSA for beginner`,Description1:`This course will provide fundamentals `,Price:`$3500`,type:`Premium`,image:`/assets/angular imh.png`},
  {id:103,name:`React for beginner`,Description1:`This course will provide fundamentals `,Price:`$3500`,type:`Premium`,image:`/assets/angular imh.png`},
  {id:103,name:`Bootstrap for beginner`,Description1:`This course will provide fundamentals `,Price:`$3500`,type:`Premium`,image:`/assets/angular imh.png`},
  {id:103,name:`HTML for beginner`,Description1:`This course will provide fundamentals `,Price:`$3500`,type:`Premium`,image:`/assets/angular imh.png`}
 ]

//  method
getTotalCourse(){
  return this.course.length;
}
getTotalFreeCourse(){
  return this.course.filter(course =>course.type ==='Free').length;
}
getTotalPremiumCourse(){
  return this.course.filter(course =>course.type ==='Premium').length;
}

courseCountRadioButton:string="All";

searchText:any;
onRadioButtonSelection(data:string){
   this.courseCountRadioButton= data;
}

onSearchTextEntered(searchValue:string){
  this.searchText=searchValue; 
  console.log(this.searchText)
}



}
