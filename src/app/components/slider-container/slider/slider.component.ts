import { Component, Input, OnInit } from '@angular/core';
import { ItemParaEjemploComponent } from '../../item-para-ejemplo/item-para-ejemplo.component';
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
  private nSlides: number = 0;

  private wContent: number = 100;
  public wSlide: number = 100;
  public currentStyles: Record<string, string> = {};
  private counter: number = 0;

  ngOnInit(): void {
    this.nSlides = this.data.length; //cantidad de slides
    this.wContent = 100 * this.nSlides;//ancho total del contContenido (porcentaje)
    this.wSlide = 100 / this.nSlides;//ancho de cada slice referido al wContent (porcentaje)

    this.currentStyles = {
      width: this.wContent + '%',
    };

  }

  public moveToRight() {
    if (this.counter >= this.nSlides - 1) {
      this.counter = 0;
      this.setCurrentStyles(0, 'none');
      return;
    }
    this.counter++;
    const mov = this.wSlide * this.counter;
    this.setCurrentStyles(mov, 'all ease .6s');
  }
  public moveToLeft() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.nSlides - 1;
      const mov = this.wSlide * this.counter;
      this.setCurrentStyles(mov, 'none');
      return;
    }
    const mov = this.wSlide * this.counter;
    this.setCurrentStyles(mov, 'all ease .6s');
  }

  private setCurrentStyles(translate: number, transition: string): void {
    this.currentStyles = {
      width: this.wContent + '%',
      transform: `translate(-${translate}%)`,
      transition: transition,
    };
  }

}
