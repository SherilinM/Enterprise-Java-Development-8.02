import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sent = true;
    alert('SUBMITTED');
  }
}
