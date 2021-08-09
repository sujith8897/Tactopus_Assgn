import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogRole, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FindTeachersComponent } from '../find-teachers.component';

@Component({
  selector: 'app-sort-modal',
  templateUrl: './sort-modal.component.html',
  styleUrls: ['./sort-modal.component.css']
})
export class SortModalComponent implements OnInit {

  sortBy: string="";

  @Output() emitService = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FindTeachersComponent>
  ) { }

  ngOnInit(): void {
  }

  sort(){
    this.emitService.next(this.sortBy);
    //console.log(this.sortBy);
    this.close();
  }

  close(){
    this.dialogRef.close();
  }
}
