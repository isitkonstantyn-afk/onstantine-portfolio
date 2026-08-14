const BOOKING_BASE_URL = "https://elysu.vercel.app/book";

export const bookingLinks = {
  general: `${BOOKING_BASE_URL}/general`,
  modeling: `${BOOKING_BASE_URL}/modeling-acting`,
  development: `${BOOKING_BASE_URL}/web-app-development`,
  events: `${BOOKING_BASE_URL}/events`,
  business: `${BOOKING_BASE_URL}/business-development`,
  socialMedia: `${BOOKING_BASE_URL}/social-media-strategy`,
} as const;
