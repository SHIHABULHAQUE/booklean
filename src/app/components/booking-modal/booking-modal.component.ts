import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingModalService } from '../../services/booking-modal.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-booking-modal', standalone: true, imports: [CommonModule, FormsModule, TranslateModule], templateUrl: './booking-modal.component.html', styleUrl: './booking-modal.component.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingModalComponent {
  bookingService = inject(BookingModalService);
  private translateService = inject(TranslateService);

  // Form fields as signals
  name = signal('');
  company = signal('');
  mobile = signal('');
  email = signal('');
  message = signal('I want to know more about your financial services.');

  // Form submission state signals
  isSubmitting = signal(false);
  isSuccess = signal(false);
  errorMessage = signal('');

  close() {
    this.bookingService.close();
    // Reset state after closing
    setTimeout(() => {
      this.isSuccess.set(false);
      this.errorMessage.set('');
      this.resetForm();
    }, 300); // Wait for transition out animation
  }

  async onSubmit() {
    if (!this.mobile().trim() || !this.email().trim()) {
      this.errorMessage.set(this.translateService.instant('BOOKING.ERR_REQUIRED'));
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    try {
      await this.bookingService.sendBooking({
        name: this.name().trim(), company: this.company().trim(), mobile: this.mobile().trim(), email: this.email().trim(), message: this.message().trim()
      });
      this.isSuccess.set(true);
    } catch (error: any) {
      this.errorMessage.set(error.message || this.translateService.instant('BOOKING.ERR_API'));
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private resetForm() {
    this.name.set('');
    this.company.set('');
    this.mobile.set('');
    this.email.set('');
    this.message.set('I want to know more about your financial services.');
  }
}
