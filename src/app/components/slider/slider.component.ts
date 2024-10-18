import { Component, Input, OnInit } from '@angular/core';
import { ItemParaEjemploComponent } from '../item-para-ejemplo/item-para-ejemplo.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ItemParaEjemploComponent, NgStyle],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  @Input() data: any = [];
  private cantSlides: number = 0;
  private widthContent: number = 100;
  public widthSlice: number = 100;
  public currentStyles: Record<string, string> = {};
  private counter: number = 0;

  ngOnInit(): void {
    //cantidad de slices
    this.cantSlides = this.data.length;
    //ancho total del contContenido (porcentaje)
    this.widthContent = 100 * this.cantSlides;
    //ancho de cada slice (porcentaje)
    this.widthSlice = 100 / this.cantSlides;

    this.currentStyles = {
      width: this.widthContent + '%',
    };
  }

  public moveToRight() {
    if (this.counter >= this.cantSlides - 1) {
      this.counter = 0;
      this.setCurrentStyles(0, 'none');
      return;
    }
    this.counter++;
    const mov = this.widthSlice * this.counter;
    this.setCurrentStyles(mov, 'all ease .6s');
  }
  public moveToLeft() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.cantSlides - 1;
      const mov = this.widthSlice * this.counter;
      this.setCurrentStyles(mov, 'none');
      return;
    }
    const mov = this.widthSlice * this.counter;
    this.setCurrentStyles(mov, 'all ease .6s');
  }

  private setCurrentStyles(translate: number, transition: string): void {
    this.currentStyles = {
      width: this.widthContent + '%',
      transform: `translate(-${translate}%)`,
      transition: transition,
    };
  }
}
