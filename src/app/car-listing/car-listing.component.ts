import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private meuServico: CarsService) { }
  ngOnInit(): void {
    this.meuServico.fetchData().subscribe(data => {
      this.carsServiceList = data;
    });
  }
}
