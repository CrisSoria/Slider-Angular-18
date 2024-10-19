import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'carrusel-Angular18';

  mockData = [
    { id: 1, name: 'azul', code: '00f' },
    { id: 2, name: 'rojo', code: 'f00' },
    { id: 3, name: 'verde', code: '0f0' },
    { id: 4, name: 'amarillo', code: 'ff0' },
    { id: 5, name: 'naranja', code: 'f90' },
    { id: 6, name: 'morado', code: '90f' },
    { id: 7, name: 'cian', code: '0ff' },
    { id: 8, name: 'magenta', code: 'f0f' },
    { id: 9, name: 'gris', code: '888' },
    { id: 10, name: 'negro', code: '000' },
    { id: 11, name: 'blanco', code: 'fff' },
    { id: 12, name: 'rosa', code: 'f9c' },
    { id: 13, name: 'lima', code: '9f0' },
    { id: 14, name: 'turquesa', code: '0ff' },
    { id: 15, name: 'violeta', code: '80f' },
    { id: 16, name: 'marrón', code: '963' },
    { id: 17, name: 'lavanda', code: 'e6e6fa' },
    { id: 18, name: 'beige', code: 'f5f5dc' },
    { id: 19, name: 'oliva', code: '808000' },
    { id: 20, name: 'coral', code: 'ff7f50' },
  ];
}
