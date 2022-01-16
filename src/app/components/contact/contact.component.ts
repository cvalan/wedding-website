import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  rsvpForm = this.formBuilder.group({
    name: ['', Validators.required],
    attending: [''],
    dietaryRestrictions: [''],
    songRequest: [''],
    guests: this.formBuilder.array([this.formBuilder.control('')]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private modalService: NgbModal
  ) {}

  get guests() {
    return this.rsvpForm.get('guests') as FormArray;
  }

  addGuest() {
    this.guests.push(this.formBuilder.control(''));
  }

  open(content) {
    this.emailService.sendMail(this.rsvpForm.value);
    this.modalService.open(content, { centered: true });
  }
}
