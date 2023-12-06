import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavBarComponent
  ]
})
export class CadastroUsuarioComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Implement your logic to handle form submission
    }
  }
}
