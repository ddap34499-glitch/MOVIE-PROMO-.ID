/* =========================================================
   UNIVERSITY OF MOWTOWN
   APP.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     BUS CHANGE EVENT
     ======================================================= */

  document
    .querySelectorAll(".bus-option")
    .forEach(button => {

      button.addEventListener("click", () => {

        const busId =
          button.dataset.bus;

        document.dispatchEvent(
          new CustomEvent(
            "mowtown:bus-change",
            {
              detail: {
                busId
              }
            }
          )
        );

      });

    });


  /* =======================================================
     NAVIGATION
     ======================================================= */

  document
    .querySelectorAll("[data-scroll]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const target =
          document.getElementById(
            button.dataset.scroll
          );

        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  menuButton?.addEventListener(
    "click",
    () => {

      mobileMenu?.classList.toggle("open");

    }
  );


  /* =======================================================
     CLOSE MOBILE MENU AFTER CLICK
     ======================================================= */

  mobileMenu
    ?.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "open"
          );

        }
      );

    });


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header =
    document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {

      if (!header) return;

      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );

    },
    { passive: true }
  );


  /* =======================================================
     REVEAL ANIMATION
     ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      element =>
        observer.observe(element)
    );

  } else {

    revealElements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  document
    .querySelectorAll(
      "[data-current-year]"
    )
    .forEach(element => {

      element.textContent =
        new Date().getFullYear();

    });


  /* =======================================================
     RESTORE BOOKING STATUS
     ======================================================= */

  const savedBooking =
    localStorage.getItem(
      "mowtown_bus_booking"
    );


  if (savedBooking) {

    try {

      const booking =
        JSON.parse(savedBooking);

      const bookingStatus =
        document.getElementById(
          "bookingStatus"
        );


      if (bookingStatus) {

        bookingStatus.textContent =
          "BOOKING ACTIVE";

        bookingStatus.classList.add(
          "ready"
        );

      }

    } catch {

      console.warn(
        "Booking data tidak valid."
      );

    }

  }

});
