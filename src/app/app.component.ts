import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { CarListingComponent } from './car-listing/car-listing.component';
import { FooterComponent } from './footer/footer.component';
import { CarsService } from './cars/cars.service';
import { carsServiceInterface } from './cars/cars.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HeaderComponent,
    FilterComponent,
    CarListingComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
   // Corrigido para 'styleUrls' e array
})
export class AppComponent{
  title = 'vitrine_veiculos';
}
