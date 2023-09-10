<!-- First, include your existing JavaScript for theme switching -->
<script>
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const themeStyle = document.getElementById('theme-style');

  darkModeToggle.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === 'light-theme.css') {
      themeStyle.setAttribute('href', 'dark-theme.css');
    } else {
      themeStyle.setAttribute('href', 'light-theme.css');
    }
  });


  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
</script>
