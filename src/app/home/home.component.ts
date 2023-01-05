import { Component, OnInit } from '@angular/core';
import * as WOW from 'wow.js/dist/wow';

export interface WorksData {
  thumbnail: string,
  title: string,
  link: string
}

export interface ServicesData {
  icon: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngAfterViewInit() {
    new WOW().init();
  }

  services: ServicesData[] = [
    {
      icon: "web",
      title: "Web Design",
      description: "Fullstack Web Developement using trending web technologies"
    },
    {
      icon: "brush",
      title: "Graphic Design",
      description: "Designing 2D and 3D graphics for various platforms"
    },
    {
      icon: "apps",
      title: "Web Apps",
      description: "Versatile Application developement with real-time data"
    },
    {
      icon: "laptop_windows",
      title: "Windows",
      description: "Windows Desktop, Console and packages developement"
    },
    {
      icon: "swap_calls",
      title: "Automation",
      description: "Reduce business time and effort with smart soft Robots"
    },
    {
      icon: "graphic_eq",
      title: "Artificial Intelligence",
      description: "AI enabled applications for analysis, detection, prediction and other"
    },
    {
      icon: "games",
      title: "Games",
      description: "Arcade, Indie, multiplayer and other cool gaming stuff to make them play"
    },
    {
      icon: "cloud",
      title: "Cloud",
      description: "Developement on Mongodb, Atlas, Amazon AWS and Google Firebase"
    },
  ]

  works: WorksData[] = [
    // {
    //   thumbnail: "assets/images/graphicdesign.png",
    //   title: "Graphic Design",
    //   link: "/showcase/graphicdesign"
    // },
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

  portcount: Object[] = [
    {
      icon: "sentiment_satisfied_alt",
      count: 10,
      title: "Happy Clients"
    },
    {
      icon: "av_timer",
      count: 17520,
      title: "Hours of Work"
    },
    {
      icon: "code",
      count: 1923892,
      title: "Lines of Code"
    },
    {
      icon: "computer",
      count: 49,
      title: "Project Finish"
    },
  ]

  testimonials: Object[] = [
    {
      avatar: "assets/avatars/ank.jpeg",
      username: "AnkRaw",
      lines: "Code it until it satisfied you."
    },
    {
      avatar: "assets/avatars/ank.jpeg",
      username: "AnkRaw",
      lines: "Code it until it satisfied you."
    },
    {
      avatar: "assets/avatars/ank.jpeg",
      username: "AnkRaw",
      lines: "Code it until it satisfied you."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
