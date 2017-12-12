import { Component, OnInit } from '@angular/core';
import { Scene } from '../scene.model';

@Component({
  selector: 'scene-one',
  templateUrl: './scene-one.component.html',
  styleUrls: ['./scene-one.component.css']
})
export class SceneOneComponent implements OnInit {
  scenes: Scene[] = [
    new Scene("You start eating fiberglass, throwing caution to the wind", "Immediately after starting you realize it was a mistake",  "https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/83/253/155786269.jpg")
  ]

  constructor() { }

  ngOnInit() {
  }

}
