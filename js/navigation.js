export function setupNavigation() {
  const navButtons = document.querySelectorAll('#mainNav button');
  const sections = document.querySelectorAll('section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    });
  });
}


//if statement for class active and checking if hidden. When clicked in section, it will remove hidden class and add active class to the button.

//check how you made the "mehr erfahren" buttons. Expecially the event listener works so you can hide the opening section and show the clicked section.