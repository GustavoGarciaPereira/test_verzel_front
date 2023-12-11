import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceCadastroCarService } from '../service-cadastro-car/service-cadastro-car.service';
import { TokenService } from '../storage/storage.service';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-car',
  standalone: true,
  imports: [
    CommonModule, // CommonModule ainda é necessário para diretivas comuns
    ReactiveFormsModule, // Usando ReactiveFormsModule agora
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './cadastro-car.component.html',
  styleUrls: ['./cadastro-car.component.scss']
})
export class CadastroCarComponent implements OnInit {
  carForm!: FormGroup; // Formulário reativo
  showSuccessMessage = false;

  constructor(
    private fb: FormBuilder,
    private carService: ServiceCadastroCarService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.tokenService.getUserId()) {
      console.log('Usuário não está logado!');
      this.router.navigate(['/login']);
    }

    this.carForm = this.fb.group({
      nome: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      url_imagem: ['', Validators.required]
      // user_id é gerenciado internamente, não é necessário no formulário
    });
  }

  createCar() {
    if (this.carForm?.invalid) {
      console.log('Formulário inválido');
      return;
    }

    const carData = {
      ...this.carForm?.value,
      user_id: Number(this.tokenService.getUserId())
    };

    this.carService.createCar(carData).subscribe(
      response => {
        this.showSuccessMessage = true;
        this.carForm?.reset(); // Resetar o formulário
        console.log('Carro cadastrado com sucesso!', response);
        setTimeout(() => this.showSuccessMessage = false, 2000);
      },
      error => {
        console.error('Erro ao cadastrar carro', error);
      }
    );
  }
}



