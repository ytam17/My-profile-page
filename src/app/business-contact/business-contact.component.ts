import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule } from '@angular/material/snack-bar';

import { UpdateContactComponent } from '../update-contact/update-contact.component';
import { BusinessContactService} from '../business-contact.service';

@Component({
  selector: 'app-business-contact',
  templateUrl: './business-contact.component.html',
  styleUrls: ['./business-contact.component.scss']
})
export class BusinessContactComponent implements OnInit {

  displayedColumns: string[] = ['name', 'contactnumber', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog, private _busContactService: BusinessContactService) {}

  ngOnInit(): void {
    this.getBusinessContactList();
  }

  getBusinessContactList() {
    this._busContactService.getBusinessContactList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }

  openEditBusContactForm(data: any) {
    const dialogRef = this._dialog.open(UpdateContactComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if(val) {
          this.getBusinessContactList();
        }
      }
    });
  }

  deleteBusinessContact(data: any) {
    this._busContactService.deleteBusinessContact(data._id).subscribe({
      next: (res) => {
        this._snackBar.open("Business Contact deleted!", "done", {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.getBusinessContactList();
      },
      error: console.log,
      });
  }
}

