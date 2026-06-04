import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingModalService {
  readonly isOpen = signal(false);
  private readonly ACCESS_KEY = 'bf602868-9d37-45e6-a954-f7d08af1ed38';

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  async sendBooking(data: { name: string; company: string; mobile: string; email: string; message: string }) {
    const payload = {
      access_key: this.ACCESS_KEY,
      name: data.name,
      email: data.email,
      phone: data.mobile,
      company: data.company,
      message: data.message,
      subject: `New Booking Request: Free 30-Min Review (from ${data.name})`,
      from_name: 'BookLean Website'
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to send booking request. Please try again.');
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Failed to submit booking form.');
    }

    return result;
  }
}
