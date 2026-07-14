import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingModalService {
  readonly isOpen = signal(false);
  readonly originX = signal(0);
  readonly originY = signal(0);
  private readonly ACCESS_KEY = '5e44c732-b994-4e0b-a475-e0aaedb95fbe';

  open(event?: Event) {
    const mouseEvent = event instanceof MouseEvent ? event : null;
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const fallbackX = viewportWidth / 2;
    const fallbackY = viewportHeight / 2;
    const clickX = mouseEvent?.clientX ?? fallbackX;
    const clickY = mouseEvent?.clientY ?? fallbackY;

    this.originX.set(clickX);
    this.originY.set(clickY);
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
