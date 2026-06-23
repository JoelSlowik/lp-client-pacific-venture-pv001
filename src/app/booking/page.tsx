'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  CreditCard, ChevronRight, Calendar, Users, Clock, Fish,
  CheckCircle, Shield, Lock, Anchor, Phone,
} from 'lucide-react';

const trips = [
  { id: 'kids-4hr', name: 'Kids 4-Hour Fishing Trip', price: 1290, time: '8:00 AM – 12:00 PM', duration: '4 hours' },
  { id: '5hr', name: '5-Hour Fishing Trip', price: 1490, time: '8:00 AM – 1:00 PM', duration: '5 hours' },
  { id: '8hr', name: '8-Hour Fishing Trip', price: 1990, time: '7:30 AM – 3:30 PM', duration: '8 hours' },
  { id: '9hr-offshore', name: '9-Hour Offshore Trip', price: 2550, time: '6:30 AM – 3:30 PM', duration: '9 hours' },
  { id: 'whale', name: 'Whale Watching (Jan–Apr)', price: 600, time: 'Call for times', duration: '2 hours' },
  { id: 'burial', name: 'Burial at Sea', price: 600, time: 'Flexible', duration: 'Custom' },
];

type PaymentMethod = 'card' | 'paypal' | 'venmo' | 'cashapp' | 'zelle';

const paymentMethods: { id: PaymentMethod; label: string; icon: string; color: string }[] = [
  { id: 'card', label: 'Credit / Debit Card', icon: '💳', color: 'from-blue-600 to-blue-800' },
  { id: 'paypal', label: 'PayPal', icon: 'PP', color: 'from-[#003087] to-[#009cde]' },
  { id: 'venmo', label: 'Venmo', icon: 'V', color: 'from-[#008CFF] to-[#3D95CE]' },
  { id: 'cashapp', label: 'Cash App', icon: '$', color: 'from-[#00D632] to-[#00B828]' },
  { id: 'zelle', label: 'Zelle', icon: 'Z', color: 'from-[#6D1ED4] to-[#5415A8]' },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTrip] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [payment, setPayment] = useState<PaymentMethod>('card');
  const [contact, setContact] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [cardInfo, setCardInfo] = useState({ number: '', expiry: '', cvc: '', zip: '' });
  const [submitted, setSubmitted] = useState(false);

  const trip = trips.find(t => t.id === selectedTrip);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-white mb-4">Booking Confirmed!</h1>
          <p className="text-brand-foam/70 mb-2">
            Thank you, {contact.firstName}. Your {trip?.name} has been booked.
          </p>
          <p className="text-brand-foam/50 text-sm mb-8">
            A confirmation email will be sent to {contact.email} with all the details.
            Captain Chuck will reach out to confirm departure logistics.
          </p>
          <div className="card inline-block text-left">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-8">
                <span className="text-brand-foam/50">Trip</span>
                <span className="text-white font-medium">{trip?.name}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-brand-foam/50">Date</span>
                <span className="text-white font-medium">{date}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-brand-foam/50">Guests</span>
                <span className="text-white font-medium">{guests}</span>
              </div>
              <div className="border-t border-brand-ocean/20 pt-2 flex justify-between gap-8">
                <span className="text-brand-foam/50">Total</span>
                <span className="text-brand-gold font-heading font-bold text-lg">
                  ${trip?.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs text-brand-foam/40 mt-6">
            Questions? Call <a href="tel:+17603411905" className="text-brand-gold hover:underline">(760) 341-1905</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-12 px-4 border-b border-brand-ocean/20">
        <div className="max-w-4xl mx-auto">
          <div className="gold-rule mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
            Book Your Trip
          </h1>
          <p className="text-brand-foam/60 text-lg">
            Secure your charter online with modern payment options &mdash; no more bank routing numbers.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-brand-ink border-b border-brand-ocean/20 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-sm">
          {['Select Trip', 'Your Details', 'Payment'].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (i + 1 < step) setStep(i + 1);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  step === i + 1
                    ? 'bg-brand-gold text-brand-ink font-bold'
                    : step > i + 1
                    ? 'bg-brand-ocean/30 text-brand-foam cursor-pointer'
                    : 'bg-brand-deep/50 text-brand-foam/40'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  {step > i + 1 ? '✓' : i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < 2 && <ChevronRight className="w-4 h-4 text-brand-foam/30" />}
            </div>
          ))}
        </div>
      </section>

      <form onSubmit={handleSubmit} className="py-12 px-4 bg-brand-ink min-h-[60vh]">
        <div className="max-w-4xl mx-auto">

          {/* Step 1: Select Trip */}
          {step === 1 && (
            <div>
              <h2 className="section-heading mb-8">Choose Your Adventure</h2>
              <div className="space-y-3">
                {trips.map(t => (
                  <label
                    key={t.id}
                    className={`block cursor-pointer rounded-xl border-2 p-5 transition-all duration-150 ${
                      selectedTrip === t.id
                        ? 'border-brand-gold bg-brand-gold/5'
                        : 'border-brand-ocean/20 bg-brand-deep/40 hover:border-brand-ocean/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="trip"
                        value={t.id}
                        checked={selectedTrip === t.id}
                        onChange={() => setSelectedTrip(t.id)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedTrip === t.id ? 'border-brand-gold' : 'border-brand-foam/30'
                      }`}>
                        {selectedTrip === t.id && (
                          <div className="w-3 h-3 rounded-full bg-brand-gold" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-heading font-semibold text-white text-lg">{t.name}</h3>
                          <span className="font-heading font-bold text-brand-gold text-xl">
                            ${t.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-brand-foam/50 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {t.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {t.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                  >
                    {[1,2,3,4,5,6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  disabled={!selectedTrip || !date}
                  onClick={() => setStep(2)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Contact Details */}
          {step === 2 && (
            <div>
              <h2 className="section-heading mb-8">Your Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={contact.firstName}
                    onChange={e => setContact({...contact, firstName: e.target.value})}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                    placeholder="Chuck"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={contact.lastName}
                    onChange={e => setContact({...contact, lastName: e.target.value})}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                    placeholder="White"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={e => setContact({...contact, email: e.target.value})}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-foam/70 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={contact.phone}
                    onChange={e => setContact({...contact, phone: e.target.value})}
                    className="w-full bg-brand-deep border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              {/* Booking Summary */}
              {trip && (
                <div className="mt-8 card">
                  <h3 className="font-heading font-semibold text-white mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Trip</span>
                      <span className="text-white">{trip.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Date</span>
                      <span className="text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Guests</span>
                      <span className="text-white">{guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Departure</span>
                      <span className="text-white">{trip.time}</span>
                    </div>
                    <div className="border-t border-brand-ocean/20 pt-2 flex justify-between">
                      <span className="text-brand-foam/50 font-medium">Total</span>
                      <span className="text-brand-gold font-heading font-bold text-xl">
                        ${trip.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!contact.firstName || !contact.lastName || !contact.email || !contact.phone}
                  onClick={() => setStep(3)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="section-heading mb-8">Payment</h2>

              {/* Payment Method Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-brand-foam/70 mb-3">
                  Choose Payment Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {paymentMethods.map(pm => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPayment(pm.id)}
                      className={`relative rounded-xl p-4 border-2 text-center transition-all duration-150 ${
                        payment === pm.id
                          ? 'border-brand-gold bg-brand-gold/5'
                          : 'border-brand-ocean/20 bg-brand-deep/40 hover:border-brand-ocean/40'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pm.color} flex items-center justify-center mx-auto mb-2`}>
                        {pm.id === 'card' ? (
                          <CreditCard className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white font-bold text-sm">{pm.icon}</span>
                        )}
                      </div>
                      <span className="text-xs text-brand-foam/70 font-medium">{pm.label}</span>
                      {payment === pm.id && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-ink" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Form */}
              {payment === 'card' && (
                <div className="card mb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <CreditCard className="w-5 h-5 text-brand-gold" />
                    <h3 className="font-heading font-semibold text-white">Card Details</h3>
                    <Lock className="w-3.5 h-3.5 text-brand-foam/40 ml-auto" />
                    <span className="text-xs text-brand-foam/40">Secure</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-brand-foam/50 mb-1.5">Card Number</label>
                      <input
                        type="text"
                        value={cardInfo.number}
                        onChange={e => {
                          const v = e.target.value.replace(/\D/g, '').slice(0, 16);
                          setCardInfo({...cardInfo, number: v.replace(/(\d{4})(?=\d)/g, '$1 ')});
                        }}
                        className="w-full bg-brand-ink border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold font-mono"
                        placeholder="4242 4242 4242 4242"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-brand-foam/50 mb-1.5">Expiry</label>
                        <input
                          type="text"
                          value={cardInfo.expiry}
                          onChange={e => {
                            let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                            if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
                            setCardInfo({...cardInfo, expiry: v});
                          }}
                          className="w-full bg-brand-ink border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold font-mono"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-foam/50 mb-1.5">CVC</label>
                        <input
                          type="text"
                          value={cardInfo.cvc}
                          onChange={e => setCardInfo({...cardInfo, cvc: e.target.value.replace(/\D/g, '').slice(0, 4)})}
                          className="w-full bg-brand-ink border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold font-mono"
                          placeholder="123"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-foam/50 mb-1.5">ZIP</label>
                        <input
                          type="text"
                          value={cardInfo.zip}
                          onChange={e => setCardInfo({...cardInfo, zip: e.target.value.replace(/\D/g, '').slice(0, 5)})}
                          className="w-full bg-brand-ink border border-brand-ocean/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold font-mono"
                          placeholder="92054"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal / Venmo / CashApp / Zelle info */}
              {payment === 'paypal' && (
                <div className="card mb-8 text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003087] to-[#009cde] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">PP</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">Pay with PayPal</h3>
                  <p className="text-sm text-brand-foam/60 mb-1">
                    You&rsquo;ll be redirected to PayPal to complete your ${trip?.price.toLocaleString()} payment securely.
                  </p>
                </div>
              )}

              {payment === 'venmo' && (
                <div className="card mb-8 text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#008CFF] to-[#3D95CE] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">V</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">Pay with Venmo</h3>
                  <p className="text-sm text-brand-foam/60">
                    You&rsquo;ll be redirected to Venmo to authorize your ${trip?.price.toLocaleString()} payment.
                  </p>
                </div>
              )}

              {payment === 'cashapp' && (
                <div className="card mb-8 text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D632] to-[#00B828] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">$</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">Pay with Cash App</h3>
                  <p className="text-sm text-brand-foam/60">
                    You&rsquo;ll be redirected to Cash App to complete your ${trip?.price.toLocaleString()} payment.
                  </p>
                </div>
              )}

              {payment === 'zelle' && (
                <div className="card mb-8 text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D1ED4] to-[#5415A8] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">Z</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">Pay with Zelle</h3>
                  <p className="text-sm text-brand-foam/60">
                    Send ${trip?.price.toLocaleString()} to <span className="text-brand-gold font-medium">pacificventurecharters@gmail.com</span> via
                    your bank&rsquo;s Zelle feature. Your booking is confirmed once payment is received.
                  </p>
                </div>
              )}

              {/* Order Summary */}
              {trip && (
                <div className="card mb-8">
                  <h3 className="font-heading font-semibold text-white mb-4">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">{trip.name}</span>
                      <span className="text-white">${trip.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Date</span>
                      <span className="text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Guests</span>
                      <span className="text-white">{guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-foam/50">Contact</span>
                      <span className="text-white">{contact.firstName} {contact.lastName}</span>
                    </div>
                    <div className="border-t border-brand-ocean/20 pt-3 flex justify-between items-baseline">
                      <span className="text-white font-medium">Total Due</span>
                      <span className="text-brand-gold font-heading font-bold text-2xl">
                        ${trip.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs text-brand-foam/40">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> SSL Encrypted
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Secure Checkout
                </span>
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5" /> USCG Licensed
                </span>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="btn-secondary">
                  Back
                </button>
                <button type="submit" className="btn-primary text-base px-10 py-4">
                  {payment === 'zelle' ? 'Confirm Booking' : `Pay $${trip?.price.toLocaleString()}`}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>

      {/* Help */}
      <section className="py-10 px-4 bg-brand-navy border-t border-brand-ocean/20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-foam/50">
            Need help booking? Prefer to book over the phone?
          </p>
          <a href="tel:+17603411905" className="flex items-center gap-2 text-brand-gold hover:text-brand-ember transition-colors font-medium">
            <Phone className="w-4 h-4" />
            Call (760) 341-1905
          </a>
        </div>
      </section>
    </>
  );
}
