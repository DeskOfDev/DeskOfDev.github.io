import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as WOW from 'wow.js/dist/wow';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  onSubmit() {
    var name_i: any = document.getElementById('defaultContactFormName');
    var email_i: any = document.getElementById('defaultContactFormEmail');
    var msg_i: any = document.getElementById('exampleFormControlTextarea2');
    if (name_i.value == "" || email_i.value == "" || msg_i.value == "") {
      alert("Sorry! All fields are required!");
    }
    else {
      this.disabledSubmitButton = true;
      var data: any = this.serialize(document.getElementById("contactForm"));
      console.log(data);
      this.http.get('https://script.google.com/macros/s/AKfycbxQvVMQmaxZz1HQYG_yBZdYvsF6nYumjnJWbwpWoPsTU62ETf4/exec?' + data)
        .subscribe(data => {
          console.log(data)
          if (data['result'] == 'success') {
            this.disabledSubmitButton = false;
            alert('Thank you! We received your message! We will mail you soon!');
            window.location.href = "https://www.deskofdev.ml/skillset";
          }
        })
    }
  }

  serialize(form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

      var field = form.elements[i];

      // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
      if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

      // If a multi-select, get all selections
      if (field.type === 'select-multiple') {
        for (var n = 0; n < field.options.length; n++) {
          if (!field.options[n].selected) continue;
          serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
        }
      }

      // Convert field data to a query string
      else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      }
    }

    return serialized.join('&');

  };

}
