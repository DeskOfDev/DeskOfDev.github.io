import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  team: Object[] = [
    {
      avatar: "assets/avatars/ank.jpg",
      username: "AnkRaw",
      lines: "Code it until it satisfied you."
    },
    {
      avatar: "assets/avatars/akg.png",
      username: "AeyKeyZS",
      lines: "Code or Love, take it to the happy ending."
    },
    {
      avatar: "assets/avatars/wizz.png",
      username: "Wizz",
      lines: "Your code should say more about you than your name."
    }
  ]

}
