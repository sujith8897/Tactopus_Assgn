import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { SortModalComponent } from './sort-modal/sort-modal.component';

@Component({
  selector: 'app-find-teachers',
  templateUrl: './find-teachers.component.html',
  styleUrls: ['./find-teachers.component.css']
})
export class FindTeachersComponent implements OnInit {
  teachers: Array<Array<string>>=[];
  images: string[]=[];
  names: string[]=[];
  services: string[]=[];
  experience: string[]=[];
  teacherId: string[]=[];
  query: string="?";
  show: boolean[]=[];

  constructor(
    public dialog: MatDialog,
    private mainSer: MainServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.services=[];
    this.names=[];
    this.experience=[];
    this.images=[];
    this.teacherId=[];
    this.mainSer.getAllTeachers()
        .subscribe(response =>{
          for(var i in response){
            console.log(response[i]);
            this.show[i]=false;
            var k=0;
            for(var j of Object.values(response[i])){
              console.log(j);
              if(k==0){
                this.teacherId.push(j);
              }
             else if(k==1){
                if(j==""){
                  this.images.push('/tactopus_logo.png');
                }else{
                  this.images.push(j);
                }
              }else if(k==2){
                this.names.push(j);
              }else if(k==3){
                this.experience.push(j);
              }else if(k==4){
                var s="";
                for(var l of j){
                  s+=l+',';
                }
                s = s.slice(0, -1);
                this.services.push(s);
              }
              k+=1;
            }
            console.log(this.images,this.names,this.experience,this.services)
          }
      });
  }

  openFilterDialog() {
   const dialogRef = this.dialog.open(FilterModalComponent);
   dialogRef.componentInstance.emitService.subscribe((emittedValue) =>{
     console.log('value--',emittedValue);
     if(emittedValue=="reset"){
       this.ngOnInit();
       return;
     }
     this.query = "?exp=" + emittedValue.experience //+ "&ser=" + emittedValue.services + "&lan=" + emittedValue.languages;
     console.log(this.query);
     this.services=[];
     this.names=[];
     this.experience=[];
     this.images=[];
     this.teacherId=[];
     this.mainSer.filterTeachers(this.query)
          .subscribe(response=>{
            for(var i in response){
              console.log(response[i]);
              var k=0;
              for(var j of Object.values(response[i])){
                console.log(j);
                if(k==0){
                  this.teacherId.push(j);
                }
                else if(k==1){
                  if(j==""){
                    this.images.push('/tactopus_logo.png');
                  }else{
                    this.images.push(j);
                  }
                  
                }else if(k==2){
                  this.names.push(j);
                }else if(k==3){
                  this.experience.push(j);
                }else if(k==4){
                  var s="";
                  for(var l of j){
                    s+=l+',';
                  }
                  s = s.slice(0, -1);
                  this.services.push(s);
                }
                k+=1;
              }
              console.log(this.images,this.names,this.experience,this.services)
            }
          });
   });
   
   
  }
  openSortDialog() {
    const dialogRef = this.dialog.open(SortModalComponent);
    dialogRef.componentInstance.emitService.subscribe((emittedValue) =>{
      this.query = "?sortBy=" + emittedValue;
      this.services=[];
      this.names=[];
      this.experience=[];
      this.images=[];
      this.teacherId=[];
      //console.log(this.query);
      this.mainSer.filterTeachers(this.query)
          .subscribe( response => {
            for(var i in response){
              console.log(response[i]);
              var k=0;
              for(var j of Object.values(response[i])){
                console.log(j);
                if(k==0){
                  this.teacherId.push(j);
                }
                else if(k==1){
                  if(j==""){
                    this.images.push('/tactopus_logo.png');
                  }else{
                    this.images.push(j);
                  }
                  
                }else if(k==2){
                  this.names.push(j);
                }else if(k==3){
                  this.experience.push(j);
                }else if(k==4){
                  var s="";
                  for(var l of j){
                    s+=l+',';
                  }
                  s = s.slice(0, -1);
                  this.services.push(s);
                }
                k+=1;
              }
              console.log(this.images,this.names,this.experience,this.services)
            }
          });
    });
   }

   toggle(id:number){
    this.show[id] = !this.show[id];
    console.log(id);
   }

  delete(id:string){
    this.mainSer.deleteTeacher(id)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
  }

}
