

const NAV_LINKS = [
  { label: 'home', href: 'index.html' },
  { label: 'projects', href: 'projects.html' },
  { label: 'writing', href: 'writing.html', folder: 'writing/' },
];

const FOOTER_LINKS = [
  { label: 'email', href: 'mailto:hussein_hirani@berkeley.edu' },
  { label: 'github', href: 'https://github.com/husseinhirani' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/husseinhirani' },
];

(() => {
  
  const root = new URL('.', document.currentScript.src);
  const page = location.pathname.slice(root.pathname.length).replace(/\.html$/, '') || 'index';

  const isCurrent = link =>
    page === link.href.replace(/\.html$/, '') || (link.folder && page.startsWith(link.folder));

  document.querySelector('header').innerHTML = `<nav>${NAV_LINKS.map(link =>
    `<a href="${new URL(link.href, root)}"${isCurrent(link) ? ' aria-current="page"' : ''}>${link.label}</a>`
  ).join('')}</nav>`;

  document.querySelector('footer').innerHTML = FOOTER_LINKS.map(link =>
    `<a href="${link.href}">${link.label}</a>`
  ).join('');
})();
