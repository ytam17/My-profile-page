import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule } from '@angular/material/snack-bar';

import { BusinessContactService} from '../business-contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  busContactForm: FormGroup;

  ngOnInit(): void {
      this.busContactForm.patchValue(this.data);
  }

constructor(private _fb: FormBuilder, private _snackBar: MatSnackBar,private _busContactService: BusinessContactService, 
  private _dialogRef: MatDialogRef<UpdateContactComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

  this.busContactForm = this._fb.group({
    name: '',
    contactnumber: '',
    email: '',
  })
}

  onFormSubmit(){
    if(this.busContactForm.valid){
      if(this.data){
          this._busContactService.editBusinessContact(this.data._id, this.busContactForm.value).subscribe({
           next: (val: any) => {
            this._snackBar.open("Business Contact updated successfully!", "", {
              duration: 1000,
              verticalPosition: 'top'
            });
            this._dialogRef.close(true);
           },
           error: (err: any) => {
            console.error(err);
           }
          });
      }
    }
  }


}
