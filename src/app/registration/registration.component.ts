import { Component, Self, SkipSelf } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { UserCreate } from '../service-create-user/user-create'; // Ajuste o caminho conforme necessário
import { ServiceCreateUserService } from '../service-create-user/service-create-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent
  ]
})
export class CadastroUsuarioComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: ServiceCreateUserService,
    private router: Router

    ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      const newUser: UserCreate = {
        username: this.registrationForm.value.username,
        password: this.registrationForm.value.password,
        email: this.registrationForm.value.email,
        name: this.registrationForm.value.username,
      };
      console.log('Criando usuário', newUser)
      this.userService.createUser(newUser).subscribe(
        (        response: any) => {
          console.log('Usuário criado com sucesso!', response);
          this.router.navigate(['/login']);
        },
        (        error: any) => {
          console.error('Erro ao criar usuário', error);
        }
      );
    }
  }
}
