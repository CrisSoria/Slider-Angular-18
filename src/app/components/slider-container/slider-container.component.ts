import { Component, Input, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-slider-container',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './slider-container.component.html',
  styleUrl: './slider-container.component.css',
})
export class SliderContainerComponent implements OnInit {
  @Input() data: any = [];
  @Input() itemsPerSlice: number = 1;

  ngOnInit(): void {
    //convierto la data
    this.data = this.matrixConverter(this.itemsPerSlice, this.data);
  }

  //transformo los datos en una matriz
  private matrixConverter(num: number, array: any[]) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      let j = i + num;
      const aux = array.slice(i, j);
      newArray.push(aux);
      i = j - 1;
    }
    const lastElement = newArray[newArray.length - 1];
    // agrego valores vacios para iterar
    if (lastElement.length < num) {
      let nullToAdd = num - lastElement.length;
      for (let i = 0; i < nullToAdd; i++) {
        newArray[newArray.length - 1].push({});
      }
    }
    return newArray;
  }
}
