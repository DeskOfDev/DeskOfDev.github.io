import { Component, OnInit } from '@angular/core';
import * as WOW from 'wow.js/dist/wow';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  skillset = [
    {
      name: "Artificial Intelligence (ML/ DL)",
      skills: [
        {
          "name": "Data Science",
          "per": "72"
        },
        {
          "name": "Data Scrapping",
          "per": "80"
        },
        {
          "name": "Object Detection",
          "per": "90"
        },
        {
          "name": "Python for AI",
          "per": "70"
        },
        {
          "name": "SNA",
          "per": "65"
        },
        {
          "name": "AI Models for Image, Video, Voice, Text",
          "per": "68"
        },
        {
          "name": "NLP",
          "per": "53"
        }
      ]
    },
    {
      name: "Web Development",
      skills: [
        {
          name: "Angular",
          per: "75"
        },
        {
          name: "AngularJS",
          per: "70"
        },
        {
          name: "MeteorJS",
          per: "90"
        },
        {
          name: "Node",
          per: "68"
        },
        {
          name: "HTML5, (S)CSS-3",
          per: "95"
        },
        {
          name: "D3.JS",
          per: "72"
        },
        {
          name: "JDBC",
          per: "78"
        },
        {
          name: "Hibernate",
          per: "74"
        },
        {
          name: "Maven",
          per: "71"
        },
        {
          name: "Spring (Boot)",
          per: "72"
        }
      ]
    },
    {
      name: "Database",
      skills: [
        {
          name: "MongoDB",
          per: "85"
        },
        {
          name: "MySQL",
          per: "86"
        },
        {
          name: "PostgeSQL",
          per: "78"
        }
      ]
    },
    {
      name: "Graphic Designing & Modeling",
      skills: [
        {
          name: "2D Designing - Logo, Characters, Icons (Photoshop, Illustrator)",
          per: "92"
        },
        {
          name: "3D Designing - Models, Characters, Scenes (Maya3D, Unity, Unreal)",
          per: "72"
        }
      ]
    },
    {
      name: "Mobile Applications",
      skills: [
        {
          name: "Android Application",
          per: "66"
        },
        {
          name: "Hybrid Application (Android/ iOS)",
          per: "79"
        }
      ]
    },
    {
      name: "Cloud",
      skills: [
        {
          name: "Google Cloud",
          per: "55"
        },
        {
          name: "Firebase",
          per: "60"
        },
        {
          name: "MongoDB Atlas/ Stitch",
          per: "70"
        },
        {
          name: "Amazon AWS",
          per: "52"
        }
      ]
    },
    {
      name: "Win Desktop Dev, Console Dev",
      skills: [
        {
          name: "C++",
          per: "60"
        },
        {
          name: "C#",
          per: "62"
        },
        {
          name: "Java",
          per: "73"
        },
        {
          name: "Visual Basic",
          per: "64"
        },
        {
          name: "PowerBi Custom Vizualisations",
          per: "56"
        },
        {
          name: "Custom libraries & packages",
          per: "75"
        }
      ]
    },
    {
      name: "Automation",
      skills: [
        {
          name: "RPA - UI Path, Automation Anywhere",
          per: "90"
        },
        {
          name: "Selenium - Python, JAVA",
          per: "71"
        },
        {
          name: "Nightwatch",
          per: "62"
        }
      ]
    },
    {
      name: "Others",
      skills: [
        {
          name: "2D Games - Python,  C++, Monogame/ XNA",
          per: "40"
        },
        {
          name: "OCR using OpernCV",
          per: "64"
        },
        {
          name: "HSLA Pixels",
          per: "80"
        }
      ]
    }
  ]

}
