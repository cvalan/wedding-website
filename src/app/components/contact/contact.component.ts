import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  rsvpForm = this.formBuilder.group({
    name: ['', Validators.required],
    additionalGuestsNames: [''],
    attending: [null],
    dietaryRestrictions: [''],
    songRequest: [''],
    guests: this.formBuilder.array([this.formBuilder.control('')]),
  });

  constructor(private formBuilder: FormBuilder, emailService: EmailService) {}

  get guests() {
    return this.rsvpForm.get('guests') as FormArray;
  }

  addGuest() {
    this.guests.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log('submit', this.rsvpForm.value);
    // emailService.sendMail()
  }
}
