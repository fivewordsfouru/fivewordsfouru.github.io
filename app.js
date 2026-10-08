/* Lightweight interactions. No frameworks, animations running in loops, or autoplay media. */
(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation menu');
  }
  menuButton.addEventListener('click', () => {
    const opened = mobileNav.hidden;
    mobileNav.hidden = !opened;
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Close navigation menu' : 'Open navigation menu');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // Sorting is instantaneous and uses the existing static cards; no network calls.
  const filters = document.querySelectorAll('[data-filter]');
  const arts = document.querySelectorAll('.art-card');
  filters.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    filters.forEach(x => {
      x.classList.toggle('active', x === b);
      x.setAttribute('aria-pressed', String(x === b));
    });
    arts.forEach(x => { x.hidden = f !== 'all' && x.dataset.filterType !== f; });
  }));

  const dialog = document.getElementById('lightbox');
  const stage = document.getElementById('lightbox-stage');
  const title = document.getElementById('lightbox-title');
  const cat = document.getElementById('lightbox-cat');
  const note = document.getElementById('lightbox-note');
  const zoomTools = dialog.querySelector('.zoom-tools');
  const zoomReset = dialog.querySelector('[data-zoom="reset"]');
  let zoom = 1;
  let modalImage = null;
  let previousFocus = null;
  const resetMedia = () => {
    // Removing iframe/video stops network, playback and audio immediately.
    stage.replaceChildren();
    modalImage = null;
    zoom = 1;
    zoomTools.hidden = true;
  };
  function openViewer(button) {
    previousFocus = document.activeElement;
    resetMedia();
    title.textContent = button.dataset.title || 'Untitled';
    cat.textContent = button.dataset.category || 'Selected work';
    note.textContent = '5W4U / SELECTED WORKS / ESC TO CLOSE';
    const type = button.dataset.open;
    if (type === 'youtube') {
      const videoId = button.dataset.id;
      if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId || '')) return;
      const frame = document.createElement('iframe');
      frame.title = button.dataset.title || 'Video';
      frame.loading = 'eager';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      stage.append(frame);
    } else if (type === 'local') {
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.poster = 'assets/comp-1-poster.webp';
      const source = document.createElement('source');
      source.src = 'Comp%201.mp4';
      source.type = 'video/mp4';
      const showMissing = () => {
        if (!dialog.open || stage.querySelector('.media-error')) return;
        const warning = document.createElement('p');
        warning.className = 'media-error';
        warning.textContent = 'Comp 1.mp4 is not in this package yet. Add your video with that exact filename next to index.html, then upload both files to your site.';
        stage.append(warning);
      };
      source.addEventListener('error', showMissing, { once: true });
      video.addEventListener('error', showMissing, { once: true });
      video.append(source);
      stage.append(video);
      // Playback may be blocked by browser settings; controls always remain usable.
      video.play().catch(() => {});
    } else if (type === 'image') {
      const image = document.createElement('img');
      image.src = button.dataset.source || '';
      image.alt = button.dataset.title || 'Visual work';
      image.decoding = 'async';
      image.addEventListener('error', () => {
        const warning = document.createElement('p');
        warning.className = 'media-error';
        warning.textContent = 'This image could not be loaded. Try again with a working connection.';
        stage.append(warning);
      }, {once:true});
      modalImage = image;
      stage.append(image);
      zoomTools.hidden = false;
    }
    dialog.showModal();
  }
  document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openViewer(button)));
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    resetMedia();
    previousFocus?.focus?.();
  });
  dialog.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
    if (!modalImage) return;
    const dir = button.dataset.zoom;
    zoom = dir === 'reset' ? 1 : Math.max(1, Math.min(3, +(zoom + (dir === 'in' ? .25 : -.25)).toFixed(2)));
    modalImage.style.transform = `scale(${zoom})`;
    zoomReset.textContent = `${Math.round(zoom*100)}%`;
  }));
})();
