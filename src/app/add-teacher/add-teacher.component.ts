import { Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  players: any;
  selected: any;
  file: any;
  services: string[] = [];
  languages: string[] = [];


  constructor(
    private config: NgSelectConfig,
    private mainService: MainServiceService,
    private router: Router,
  ) { 
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

   selectedServices = [];
   selectedLanguages = [];
//   services = [
//       { id: 1, name: 'Special educator' },
//       { id: 2, name: 'Psychologist',},
//       { id: 3, name: 'Science teacher' },
//       { id: 4, name: 'Software Developer' },
//       { id: 5, name: 'Mechanical Engineer'},
//   ];

//   languages = [
//     { id: 1, name: 'English' },
//     { id: 2, name: 'Hindi',},
//     { id: 3, name: 'Telugu' },
//     { id: 4, name: 'Tamil' },
//     { id: 5, name: 'Kannada'},
// ];

  
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

  onFileSelect(event:any){
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }
  onSubmit(name:any,experience:any){
    const formData = new FormData();
    if(this.file){
      formData.append('file',this.file);
    }
    
    formData.append('name',name);
    formData.append('experience',experience);
    formData.append('services',JSON.stringify(this.selectedServices));
    formData.append('languages', JSON.stringify(this.selectedLanguages));
    console.log(formData);
    this.mainService.addTeacher(formData)
        .subscribe(response =>{
          if(response.type==4){
            console.log(response.body);
            this.router.navigate(['/find-teachers']);
          }
          
        }, error => {
          console.log("error",error);
        })
  }

}
