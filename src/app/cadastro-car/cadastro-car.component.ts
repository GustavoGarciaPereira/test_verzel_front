import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';
import { ServiceCadastroCarService } from '../service-cadastro-car/service-cadastro-car.service';
import { TokenService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-car',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './cadastro-car.component.html',
  styleUrls: ['./cadastro-car.component.scss'] // Corrigido para 'styleUrls' (é um array)
})
export class CadastroCarComponent implements OnInit {
  car: Car = {
    nome: '',
    marca: '',
    modelo: '',
    price: 0,
    url_imagem: '',
    user_id: 0 // substitua pelo ID do usuário, conforme necessário
  };

  constructor(
    private carService: ServiceCadastroCarService,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.tokenService.getUserId()) {
      console.log('Usuário não está logado!');
      this.router.navigate(['/login']);
    }
  }

  createCar() {
    console.log('Criando carro', this.car);
    if (!this.tokenService.getUserId()) {
      console.log('Usuário não está logado!');
      this.router.navigate(['/login']);
      return;
    }

    this.car.user_id = Number(this.tokenService.getUserId());
    this.carService.createCar(this.car).subscribe(
      response => {
        this.resetCar();
        console.log('Carro cadastrado com sucesso!', response);
      },
      error => console.error('Erro ao cadastrar carro', error)
    );
  }

  private resetCar() {
    this.car = {
      nome: '',
      marca: '',
      modelo: '',
      price: 0,
      url_imagem: '',
      user_id: 0
    };
  }
}
