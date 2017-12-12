import { Component, OnInit } from '@angular/core';
import { Scene } from '../scene.model';

@Component({
  selector: 'scene-two',
  templateUrl: './scene-two.component.html',
  styleUrls: ['./scene-two.component.css']
})
export class SceneTwoComponent implements OnInit {
  scenes: Scene[] = [
    new Scene("You search out the alien in charge for a stern talking to", "You enter the bridge of the mothership, and convince Captain Larry to let you go. You win.",  "https://sharkswithlaserbeams.files.wordpress.com/2016/01/frank-stallone.jpg")
  ]
  constructor() { }

  ngOnInit() {
  }

}
