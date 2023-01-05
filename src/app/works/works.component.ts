import { Component, OnInit } from '@angular/core';

export interface WorksData {
  thumbnail: string,
  title: string,
  link: string
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  works: WorksData[] = [
    {
      thumbnail: "assets/images/travel.png",
      title: "Travel Agency",
      link: "/"
    },
    {
      thumbnail: "assets/images/objectdetect.jpg",
      title: "Object Detection",
      link: "/"
    },
    {
      thumbnail: "assets/images/automation.png",
      title: "Automation",
      link: "/"
    },
    {
      thumbnail: "assets/images/game.png",
      title: "Games",
      link: "/"
    },
    {
      thumbnail: "assets/images/travel.png",
      title: "Travel Agency",
      link: "/"
    }
  ]

}
