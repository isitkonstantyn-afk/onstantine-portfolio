const BOOKING_BASE_URL = "https://elysu.vercel.app/book";
const EVENT_COLLABORATION_BASE_URL = "https://elysu.vercel.app/event-collaboration";

export const bookingLinks = {
  general: `${BOOKING_BASE_URL}/general`,
  modeling: `${BOOKING_BASE_URL}/modeling-acting`,
  development: `${BOOKING_BASE_URL}/web-app-development`,
  events: `${BOOKING_BASE_URL}/events`,
  eventsCollaboration: `${BOOKING_BASE_URL}/events-collaboration`,
  business: `${BOOKING_BASE_URL}/business-development`,
  socialMedia: `${BOOKING_BASE_URL}/social-media-strategy`,
} as const;

export const eventCollaborationForms = {
  sponsorship: `${EVENT_COLLABORATION_BASE_URL}/sponsorship`,
  cohost: `${EVENT_COLLABORATION_BASE_URL}/cohost`,
  upgrade: `${EVENT_COLLABORATION_BASE_URL}/upgrade`,
} as const;
