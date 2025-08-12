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

// export function urlLoationHandler() {
// document.addEventListener("click", (e) => {
//   const target = e.target;
//     if(!target.matches(".nav-item")) {
//       return;
//     }
//     e.preventDefault();
//     rout();
//   });

//   const urlRouts = {
//     404: {
//       template: "/404.html",
//       title: "404 - Seite nicht gefunden",
//       description: "",
//     },
//     "/": {
//       template: "/html/index.html",
//       title: "Startseite",
//       description: "Willkommen auf unserer Webseite! Hier finden Sie Informationen zu verschiedenen Kräutern und deren Anwendungen.",
//     },
//     "/recipes": {
//       template: "/html/recipes.html",
//       title: "Rezepte",
//       description: "Entdecken Sie unsere Sammlung von Rezepten, die verschiedene Kräuter verwenden.",
//     },
//     "/encyclopedia": {
//       template: "/html/encyclopedia.html",
//       title: "Kräuterlexkion",
//       description: "Erfahren Sie mehr über verschiedene Kräuter, ihre Eigenschaften und Anwendungen.",
//     },
//     "/about_us": {
//       template: "/html/about_us.html",
//       title: "Über uns",
//       description: "Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Mission.",
//     },
//   };

//   const rout = (event) => {
//     event = event || window;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     urlLoationHandler();
//   }

//   const urlLoationHandler = async () => {
//     const location = window.location.pathname;
//     if(location.length == 0) {
//       location = "/";
//     }

//     const rout = urlRouts[location] || urlRouts[404];
//     const html = await fetch(rout.template).then(res => res.text());
//     document.getElementById("content").innerHTML = html;

//   };

//   window.onpopstate = urlLoationHandler;
//   window.rout = rout;

//   urlLoationHandler();

// }
