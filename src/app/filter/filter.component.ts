import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filters = {
      price: null,
      brand: ''
  };

  brands = ['Marca A', 'Marca B', 'Marca C']; // Exemplo de marcas

  applyFilters() {
      console.log('Filtros aplicados:', this.filters);
      // Aqui você pode adicionar a lógica para filtrar os dados com base nos critérios selecionados
  }
}
