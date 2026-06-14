export {};

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}

import { projects } from './projects';

const MAILTO = 'mailto:parcl0@pm.me?subject=Contact%3A%20parcl0';

function renderProjects(): void {
  const root = document.getElementById('projects-root');
  if (!root) return;

  root.innerHTML = projects.map((p, i) => `
    ${i > 0 ? '<hr class="divider divider-light" />' : ''}
    <div class="project">
      <div class="project-title">${p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
        : p.title
      }</div>
      ${p.tags && p.tags.length ? `<div class="project-tags">${p.tags.join(' / ')}</div>` : ''}
      <p class="project-desc">${p.description}</p>
      ${p.images && p.images.length ? `<div class="project-images">${
        p.images.map(src => `<img src="${src}" alt="${p.title}" loading="lazy" />`).join('')
      }</div>` : ''}
    </div>
  `).join('');

  root.querySelectorAll<HTMLImageElement>('.project-images img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
}

function setupLightbox(): void {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = '<img id="lightbox-img" alt="" />';
  document.body.appendChild(lb);

  lb.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(src: string): void {
  const lb = document.getElementById('lightbox')!;
  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  img.src = src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox(): void {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    window.location.href = MAILTO;
  });
  renderProjects();
  setupLightbox();
});
