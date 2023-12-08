import { Component } from '@angular/core';
import { Car } from './car.model';
import { ServiceCadastroCarService } from '../service-cadastro-car/service-cadastro-car.service';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-car.component.html',
  styleUrl: './cadastro-car.component.scss'
})
export class CadastroCarComponent {
  constructor(
    private carService: ServiceCadastroCarService,
    private tokenService: TokenService,
    private router: Router,
  ) {


  }
  car: Car = {
    nome: '',
    marca: '',
    modelo: '',
    price: 0,
    url_imagem: '',
    user_id: 0 // substitua pelo ID do usuário, conforme necessário
  };


  createCar() {
    console.log('Criando carro', this.car)
    console.log(this.tokenService.getUserId());
    if (this.tokenService.getUserId() === null) {
      console.log('Usuário não está logado!');
      this.router.navigate(['/login']);
    }

    this.car.user_id = Number(this.tokenService.getUserId());
    this.carService.createCar(this.car).subscribe(
      (      response: any) => console.log('Carro cadastrado com sucesso!', response),
      (      error: any) => console.error('Erro ao cadastrar carro', error)
    );
  }
}
