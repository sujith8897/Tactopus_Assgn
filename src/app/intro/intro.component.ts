import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addNewTeacher(){
    this.router.navigate(['/add-teacher']);
  }

}
