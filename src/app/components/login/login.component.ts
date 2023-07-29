// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule, FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
    
})
export class LoginComponent {
 
  title='Reactive Forms';
 loginForm =new FormGroup({
  user:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
 })
 loginuser(){
  console.log(this.loginForm.value)
  }
get user(){
  return this.loginForm.get('user');
}
get password(){
  return this.loginForm.get('password');
}
}
/*
 constructor(){
  this.loginForm=new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])
  })
}
  submitForm()
 {
  console.log(this.loginForm.value);
 } */
  /*
  loginForm: FormGroup;

  
 

  /*constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]]
    });
  }

  submitForm() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const username:string = this.loginForm.get('username')?.value;
      const password:string = this.loginForm.get('password')?.value;

      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Login :'+JSON.stringify(this.loginForm.value));

      this.loginForm.reset();
    }
  }
  <!-- <form [formGroup]="loginForm" (ngSubmit)="submitForm()">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" />
      </div>
      <button type="submit" [disabled]="loginForm.invalid">Submit</button>
    </form> -->
  
  ngOnInit():void{

  } */

