import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  players: any;
  selected: any;
  file: any;
  services: string[] = [];
  languages: string[] = [];
  teacher_name: string = "";
  teacher_exp: string = "";
  experience: number = 0;
  teacher_image: string="";
  teacher_id:string="";

  constructor(
    private mainService: MainServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  selectedServices: string[] = [];
  selectedLanguages: string[] = [];

  ngOnInit(): void {
    this.mainService.getServices()
      .subscribe(dataServices => {
        for (var service in dataServices) {
          this.services.push(Object.values(dataServices[service])[0]);
          //console.log(Object.values(dataServices[service])[0]);
        }
      });
    this.mainService.getLanguages()
      .subscribe(dataLanguages => {
        for (var language in dataLanguages) {
          this.languages.push(Object.values(dataLanguages[language])[0]);
        }
      });

    this.route.queryParams.subscribe(params => {
      this.teacher_id = params.id;
      this.mainService.getTeacherInfo(params.id)
        .subscribe(response => {
          console.log(response);
          for (var i in response) {
            console.log(response[i], i, typeof response[i]);
            if(i=="image_name"){
              this.teacher_image = response[i];
            }
            if (i == "teacher_name") {
              this.teacher_name = response[i];
            }
            if (i == "services") {
              var serv=[];
              for (var j of response[i]) {
                serv.push(j);
              }
              console.log(serv);
              this.selectedServices = serv;
            }
            if (i == "languages") {
              var lang=[];
              for (var j of response[i]) {
                console.log(j);
                lang.push(j);
              }
              console.log(lang);
             this.selectedLanguages = lang;
            }
            if (i == "experience") {
              this.teacher_exp = response[i];
            }
          }
          //this.teacher_name = response[0].teacher_name;
        });
    })

  }

  onFileSelect(event: any) {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }
  onSubmit(name: any, experience: any) {
    const formData = new FormData();
    if (this.file) {
      formData.append('file', this.file);
    }

    formData.append('name', name);
    formData.append('experience', experience);
    formData.append('services', JSON.stringify(this.selectedServices));
    formData.append('languages', JSON.stringify(this.selectedLanguages));
    console.log(formData);
    this.mainService.editTeacher(formData,this.teacher_id)
      .subscribe(response => {
        if (response.type == 4) {
          console.log(response.body);
          this.router.navigate(['/find-teachers']);
        }

      }, error => {
        console.log("error", error);
      })
  }

}
