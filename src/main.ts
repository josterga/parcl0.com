export {};

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}

import { projects, AnswerKeyEntry } from './projects';

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
      ${p.answerKey ? `<button class="answer-key-btn" data-slug="${p.slug}">Answer Key</button>` : ''}
      ${p.images && p.images.length ? `<div class="project-images">${
        p.images.map(src => `<img src="${src}" alt="${p.title}" loading="lazy" />`).join('')
      }</div>` : ''}
    </div>
  `).join('');

  root.querySelectorAll<HTMLImageElement>('.project-images img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  root.querySelectorAll<HTMLButtonElement>('.answer-key-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.slug;
      const project = projects.find(p => p.slug === slug);
      if (project?.answerKey) openAnswerKey(project.answerKey);
    });
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

function setupAnswerKeyModal(): void {
  const modal = document.createElement('div');
  modal.id = 'answer-key-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <button id="answer-key-close">Close</button>
    <div id="answer-key-inner">
      <h2>Answer Key</h2>
      <div id="answer-key-list"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAnswerKey();
  });
  document.getElementById('answer-key-close')!.addEventListener('click', closeAnswerKey);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAnswerKey();
  });
}

function openAnswerKey(entries: AnswerKeyEntry[]): void {
  const modal = document.getElementById('answer-key-modal')!;
  const list = document.getElementById('answer-key-list')!;
  list.innerHTML = entries.map(e => `
    <div class="answer-key-row">
      <span class="answer-key-word">${e.word}</span>
      <span class="answer-key-def">${e.definition}</span>
    </div>
  `).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAnswerKey(): void {
  document.getElementById('answer-key-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    window.location.href = MAILTO;
  });
  renderProjects();
  setupLightbox();
  setupAnswerKeyModal();
});
