import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  protected fb: FormBuilder = inject(FormBuilder);
  protected http: HttpClient = inject(HttpClient);

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.http
        .post('https://formspree.io/f/your-form-id', this.contactForm.value)
        .subscribe({
          next: () => alert('Form submitted!'),
          error: () => alert('Submission failed, try again.'),
        });
    }
  }
}
