export {};

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}

const MAILTO = 'mailto:parcl0@pm.me?subject=Contact%3A%20parcl0';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    window.location.href = MAILTO;
  });
});
