import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { User, UserCreate } from '../../_interfaces/user';
import { UserService } from '../../_services/user/user.service';

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
  private userService = inject(UserService)

  createUserForm = this.fb.nonNullable.group({
    name: [''],
    firstname: [''],
    email: [''],
    phone: [''],
    password: ['']
  })

  onSubmit(){
    
        const newUser: UserCreate = {...this.createUserForm.getRawValue()}
        this.userService.registerRequest(newUser).subscribe({
          next: (response) => {
            console.log('User created', response)
          },
          error: (err) => {
            console.error('Error', err)
          }
        })


  }

}
