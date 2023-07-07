import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule } from '@angular/material/snack-bar';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  isLogin: boolean = false;

  errorMessage: string = "";
  hide = true;

  constructor(private _snackBar: MatSnackBar, private router: Router, private http: HttpClient) {}

  ngOnInit():void {

  }

  ValidateLogin(loginData: any){
    let bodyData = {
      username: this.username,
      password: this.password
    };

    this.http.post("http://localhost:4100/authorizedusers", bodyData).subscribe ( (resultData:any) =>{
      if (resultData.status) {
        this.isLogin = true;
        this._snackBar.open("Login successfully!", "Close", {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/business-contact']);
      } else {
        this._snackBar.open("Fail to login!", "Close", {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/login']);
      }

  });

  

  }
}