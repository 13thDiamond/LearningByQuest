export function setupNavigation() {
  const navButtons = document.querySelectorAll('#mainNav a.nav-item');

   navButtons.forEach( n=> {
    n.addEventListener('click', () => {
      const target = n.dataset.target;
      navButtons.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add('activeItem');
        } else {
          sec.classList.remove('activeItem');
        }
      });
    });
  });


}


//if statement for class active and checking if hidden. When clicked in section, it will remove hidden class and add active class to the button.

//check how you made the "mehr erfahren" buttons. Expecially the event listener works so you can hide the opening section and show the clicked section.