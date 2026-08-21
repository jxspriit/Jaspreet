import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-angular';
import { CONTACT_INFO } from '../../data/misc.data';

const ICON_MAP: Record<string, any> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  'map-pin': MapPin,
};

type SubmitState = 'idle' | 'loading' | 'success';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly contactInfo = CONTACT_INFO;
  readonly icons = { Send, CheckCircle2 };
  readonly submitState = signal<SubmitState>('idle');
  readonly form: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  iconFor(key: string) {
    return ICON_MAP[key];
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid || this.submitState() === 'loading') {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState.set('loading');

    // Simulated submission — replace with a real API/service call.
    setTimeout(() => {
      this.submitState.set('success');
      this.form.reset();

      setTimeout(() => this.submitState.set('idle'), 3500);
    }, 1200);
  }
}
