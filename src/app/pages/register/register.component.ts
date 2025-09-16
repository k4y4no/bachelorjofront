import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private fb = inject(FormBuilder)

  createUserForm = this.fb.group({
    nameUser: [''],
    firstNameUser: [''],
    emailUser: [''],
    phoneUser: [''],
    password: [''],
    honeyPot: ['']
  })

  onSubmit(){
    console.log(this.createUserForm.value)
  }

}
