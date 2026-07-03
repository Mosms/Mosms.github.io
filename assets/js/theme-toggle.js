(function () {
  var button = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  if (!button) return;

  function currentTheme() {
    return document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light');
  }

  function updateButton(theme) {
    var label = theme === 'dark' ? button.dataset.lightLabel : button.dataset.darkLabel;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  function applyTheme(theme, remember) {
    document.documentElement.dataset.theme = theme;
    updateButton(theme);
    if (remember) localStorage.setItem('theme', theme);
  }

  button.addEventListener('click', function () {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
  });

  media.addEventListener('change', function (event) {
    if (!localStorage.getItem('theme')) {
      applyTheme(event.matches ? 'dark' : 'light', false);
    }
  });

  updateButton(currentTheme());
}());
