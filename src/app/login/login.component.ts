import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../service-login-user/service-login-user.service';
import { UserLogin } from '../service-login-user/user-login';
import { TokenService } from '../storage/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  registrationForm: FormGroup;



  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private tokenService: TokenService,
    private router: Router
    ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],

      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit() {
    const loginUser: UserLogin = {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
    };


    console.log('Login user', loginUser);

    this.authService.loginUser(loginUser)
    .subscribe(
      response => {
        console.log('Login successful', response);
        this.tokenService.saveToken(response.access_token);
        this.router.navigate(['/welcome']);
        // Aqui você pode fazer mais coisas com a resposta, como
        // redirecionar o usuário ou armazenar o token de autenticação
      },
      error => {
        console.error('Login failed', error);
        // Aqui você pode lidar com o erro, como exibir uma mensagem ao usuário
      }
    );
  }

}

