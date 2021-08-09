import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import { FindTeachersComponent } from '../find-teachers.component';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {
  services: string[] = [];
  languages: string[] = [];
  experience: number=0;

  @Output() emitService = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FindTeachersComponent>,
    private mainService: MainServiceService,
    private router: Router,
  ) { }

  selectedServices = [];
  selectedLanguages = [];

  ngOnInit(): void {
    this.mainService.getServices()
    .subscribe( dataServices => {
      for(var service in dataServices){
        this.services.push(Object.values(dataServices[service])[0]);
        //console.log(Object.values(dataServices[service])[0]);
      }
    });
this.mainService.getLanguages()
    .subscribe( dataLanguages => {
      for(var language in dataLanguages){
        this.languages.push(Object.values(dataLanguages[language])[0]);
      }
    });
  }
filter(){
  //this.emitService.next({services: this.selectedServices, languages: this.selectedLanguages, experience: this.experience});
  this.emitService.next({experience: this.experience});
  
  //console.log(this.experience);
  this.close();
}
 

close(){
  this.dialogRef.close();
}

reset(){
  this.close();
  this.emitService.next("reset");
}

}
