document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

  const panels = document.querySelectorAll('.panel');

  console.log(panels);

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      console.log('click');
      panels.forEach((otherPanel) => {
        otherPanel.classList.remove('active');
      });
      panel.classList.add('active');
    });
  });
});
