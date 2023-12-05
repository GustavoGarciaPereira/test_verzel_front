import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carsServiceInterface } from '../cars/cars.interface';
import { CarsService } from '../cars/cars.service';

@Component({
  selector: 'app-car-listing',
  standalone: true,
  imports: [CommonModule

  ],
  templateUrl: './car-listing.component.html',
  styleUrl: './car-listing.component.scss'
})


export class CarListingComponent implements OnInit{
  carsServiceList: any;

  //carsServiceList = this.carsService.fetchData();
  constructor(private meuServico: CarsService) { }
  ngOnInit(): void {
    this.meuServico.fetchData().subscribe(data => {
      this.carsServiceList = data;
    });
  }
  // ngOnInit(): void {
  //   this.carsService.fetchData().subscribe(data => {
  //     this.carsServiceList = data;
  //   });
  //   // Aqui você pode adicionar mais lógica de inicialização se necessário
  // }
  cars = [
    { title: 'Carro A', price: 50000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    //{ title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },

    // Adicione mais carros conforme necessário
  ];
}


