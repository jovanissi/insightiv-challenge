import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Shape } from '../utils/shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  shapeType = 'rectangle'; 
  createdShape: Shape = {
    type: '',
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
  currentShape = new BehaviorSubject<Shape>(this.createdShape);
  shapesToDraw: Shape[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

  setType(event: any) { 
    this.shapeType = event.target.value; 
  }

  startDrawing(evt: MouseEvent) {
    this.shapesToDraw = [];
    this.createdShape = {
      type: this.shapeType,
      x: evt.offsetX,
      y: evt.offsetY,
      w: 0,
      h: 0
    };
    this.shapesToDraw.push(this.createdShape);

  }


  keepDrawing(evt: MouseEvent) {
    if (this.createdShape) {
      this.currentShape.next(this.createdShape);
      this.createdShape.w = evt.offsetX - this.createdShape.x;
      this.createdShape.h = evt.offsetY - this.createdShape.y;
    }
  }

  stopDrawing(evt: MouseEvent) {
    this.createdShape = {
      type: '',
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
  }

}
