// Force dark mode immediately — prevent any flash of light theme
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.classList.add('dark');
try { localStorage.setItem('theme', 'dark'); } catch (e) {}
