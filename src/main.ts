export {};

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}

import { projects, archivedProjects } from './projects';

const generativeImages = [
  '/assets/generative/line-kaliedscope.gif',
  '/assets/generative/wavelength-explore.gif',
  '/assets/generative/tiat-waves-earth-map.gif',
  '/assets/generative/particle-instance-explore.png',
];

const MAILTO = 'mailto:parcl0@pm.me?subject=Contact%3A%20parcl0';

let lightboxGallery: string[] = [];
let lightboxIndex = 0;

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
      ${(p.tags && p.tags.length) || p.year ? `<div class="project-tags">${[p.year, ...(p.tags ?? [])].filter(Boolean).join(' / ')}</div>` : ''}
      <p class="project-desc">${p.description}</p>
      ${p.pdf ? `<a class="download-btn" href="${p.pdf}" download>Download PDF</a>` : ''}
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
  lb.innerHTML = `
    <button class="lb-arrow lb-prev" aria-label="Previous">&#8592;</button>
    <img id="lightbox-img" alt="" />
    <button class="lb-arrow lb-next" aria-label="Next">&#8594;</button>
  `;
  document.body.appendChild(lb);

  lb.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.lb-arrow')) return;
    closeLightbox();
  });

  lb.querySelector('.lb-prev')?.addEventListener('click', () => stepLightbox(-1));
  lb.querySelector('.lb-next')?.addEventListener('click', () => stepLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

function openLightbox(src: string, gallery: string[] = []): void {
  lightboxGallery = gallery.length ? gallery : [src];
  lightboxIndex = lightboxGallery.indexOf(src);
  if (lightboxIndex === -1) lightboxIndex = 0;

  const lb = document.getElementById('lightbox')!;
  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  img.src = lightboxGallery[lightboxIndex];
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const hasMultiple = lightboxGallery.length > 1;
  lb.querySelectorAll<HTMLElement>('.lb-arrow').forEach(a => {
    a.style.display = hasMultiple ? 'flex' : 'none';
  });
}

function stepLightbox(dir: number): void {
  if (lightboxGallery.length <= 1) return;
  lightboxIndex = (lightboxIndex + dir + lightboxGallery.length) % lightboxGallery.length;
  (document.getElementById('lightbox-img') as HTMLImageElement).src = lightboxGallery[lightboxIndex];
}

function closeLightbox(): void {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'none';
  document.body.style.overflow = '';
  lightboxGallery = [];
}

function setupBackToTop(): void {
  const btn = document.createElement('a');
  btn.href = '#';
  btn.className = 'back-to-top';
  btn.textContent = 'Back to top';
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btn);

  const threshold = window.innerHeight;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > threshold);
  }, { passive: true });
}

function renderGenerative(): void {
  const root = document.getElementById('generative-root');
  if (!root) return;

  root.innerHTML = `
    <div class="generative-header project">
      <div class="project-title">TouchDesigner</div>
      <div class="project-tags">2024 – present / generative art</div>
      <p class="project-desc">Ongoing generative visual practice in TouchDesigner. Procedural systems built around geometry, waveforms, and particle behavior, resolved in real time.</p>
    </div>
    <div class="carousel">
      <div class="carousel-track">
        ${generativeImages.map((src, i) => `<img src="${src}" alt="Generative artwork ${i + 1}" class="${i === 0 ? 'active' : ''}" loading="lazy" />`).join('')}
      </div>
      <div class="carousel-nav">
        <button class="carousel-btn" id="carousel-prev">Prev</button>
        <div class="carousel-dots">
          ${generativeImages.map((_, i) => `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
        </div>
        <button class="carousel-btn" id="carousel-next">Next</button>
      </div>
    </div>
  `;

  const images = root.querySelectorAll<HTMLImageElement>('.carousel-track img');
  const dots = root.querySelectorAll<HTMLElement>('.carousel-dot');
  let current = 0;

  const go = (index: number) => {
    images[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + images.length) % images.length;
    images[current].classList.add('active');
    dots[current].classList.add('active');
  };

  root.querySelector('#carousel-prev')?.addEventListener('click', () => go(current - 1));
  root.querySelector('#carousel-next')?.addEventListener('click', () => go(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => go(Number(dot.dataset.index))));

  images.forEach(img => img.addEventListener('click', () => openLightbox(img.src, generativeImages)));

  const divider = document.createElement('hr');
  divider.className = 'divider divider-light';
  root.appendChild(divider);
}

function renderArchive(): void {
  const root = document.getElementById('archive-root');
  if (!root) return;

  root.innerHTML = `
    <div class="archive-header">
      <div class="project-tags">Archive</div>
    </div>
    ${archivedProjects.map(p => `
      <div class="project archive-project">
        <div class="project-title archive-title">${p.url
          ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
          : p.title
        }</div>
        ${(p.tags && p.tags.length) || p.year ? `<div class="project-tags">${[p.year, ...(p.tags ?? [])].filter(Boolean).join(' / ')}</div>` : ''}
        <p class="project-desc archive-desc">${p.description}</p>
      </div>
    `).join('')}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    window.location.href = MAILTO;
  });
  renderGenerative();
  renderProjects();
  renderArchive();
  setupLightbox();
  setupBackToTop();
});
