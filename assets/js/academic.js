// All publications remain readable when JavaScript is unavailable.
const buttons = document.querySelectorAll('[data-filter]');
const papers = document.querySelectorAll('.publications li');
function filterPublications(view) {
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === view)));
  papers.forEach(paper => { paper.hidden = view === 'selected' && paper.dataset.selected !== 'true'; });
}
buttons.forEach(button => button.addEventListener('click', () => filterPublications(button.dataset.filter)));
filterPublications('selected');

const themeToggle = document.getElementById('theme-toggle');
function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = dark ? 'Switch to day mode' : 'Switch to night mode';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
}
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('academic-theme', theme); } catch (e) {}
  updateThemeLabel();
});
updateThemeLabel();
