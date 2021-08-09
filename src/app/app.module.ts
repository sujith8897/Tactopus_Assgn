import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FindTeachersComponent } from './find-teachers/find-teachers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterModalComponent } from './find-teachers/filter-modal/filter-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SortModalComponent } from './find-teachers/sort-modal/sort-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AddTeacherComponent,
    FindTeachersComponent,
    FilterModalComponent,
    SortModalComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
