(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (button && nav) {
    const close = () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('open')) { close(); button.focus(); } });
    button.hidden = false;
    document.documentElement.classList.add('enhanced-nav');
  }
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  const atlas = document.querySelector('#technical-map');
  let pending = null, mounted = false;
  async function openGraph() {
    if (!atlas?.open || mounted) return;
    const status = atlas.querySelector('.skill-status');
    const retry = atlas.querySelector('.skill-retry');
    status.textContent = 'Loading the full skill graph…';
    retry.hidden = true;
    try {
      pending ||= import('./skill-map.js');
      const graph = await pending;
      if (!atlas.open || mounted) return;
      atlas.querySelector('.skill-interactive').hidden = false;
      graph.mount(atlas);
      mounted = true;
    } catch (error) {
      pending = null;
      status.textContent = 'The graph could not load. Retry, or browse every skill in the text list below.';
      retry.hidden = false;
    }
  }
  atlas?.addEventListener('toggle', openGraph);
  atlas?.querySelector('.skill-retry').addEventListener('click', openGraph);
  openGraph();
})();
