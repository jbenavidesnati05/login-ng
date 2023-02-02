import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.myForm = this.createmyForm();
  }

  private createmyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  public submitFormulario (){
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control =>{
        control.markAllAsTouched();
      })
      return
    }else{
      alert("se va a enviar el formulario")
      console.log(this.myForm.value);
    }
  }

  public get f():any{
      return this.myForm.controls;
  }
}
