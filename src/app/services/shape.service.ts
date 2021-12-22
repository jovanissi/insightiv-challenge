import { Injectable } from '@angular/core';
import { Shape } from '../utils/shape';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  private shapes: Shape[]=[
    {type:'ellipse', x:10, y:10, w:12, h:34},
    {type:'line', x:60, y:20, w:12, h:34},
    {type:'rectangle', x:30, y:30, w:12, h:34}
  ];
  getShapes(){return this.shapes;}
}
