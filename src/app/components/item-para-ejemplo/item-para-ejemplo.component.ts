import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-para-ejemplo',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './item-para-ejemplo.component.html',
  styleUrl: './item-para-ejemplo.component.css'
})
export class ItemParaEjemploComponent implements OnInit{
  @Input() slide: any ={};

  aplicarColor(){

  }
  colorStyles: Record<string, string> = {
    'background-color' : `black`
  };
  
  ngOnInit(): void {
    this.colorStyles = {
      'background-color' : `#${this.slide.code}`
    }
  }

}
