import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { FilterModalComponent } from './find-teachers/filter-modal/filter-modal.component';
import { FindTeachersComponent } from './find-teachers/find-teachers.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent
  },
  {
    path: 'find-teachers',
    component: FindTeachersComponent,
  },
  {
    path: 'edit-teacher',
    component: EditTeacherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
