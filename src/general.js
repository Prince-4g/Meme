document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  initSideMenu();
  initDarkModeToggle();
  initAccordion(); // Updated accordion function
  initDropupMenu();
  initOrdersTable();
});

function initSideMenu() {
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");

  if (menuBtn) {
      menuBtn.addEventListener("click", () => {
          sideMenu.style.display = "block";
      });
  }

  if (closeBtn) {
      closeBtn.addEventListener("click", () => {
          sideMenu.style.display = "none";
      });
  }
}

function initDarkModeToggle() {
  const darkMode = document.querySelector(".dark-mode");

  if (darkMode) {
      darkMode.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode-variables");
          darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
          darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
      });
  }
}

function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');

      if (header) {
          header.addEventListener('click', () => {
              // Toggle the visibility of the accordion-content
              content.style.display = content.style.display === 'none' || content.style.display === '' 
                  ? 'flex' 
                  : 'none';

              // Optional: Close other open accordions
              accordions.forEach(otherAccordion => {
                  if (otherAccordion !== accordion) {
                      const otherContent = otherAccordion.querySelector('.accordion-content');
                      if (otherContent) {
                          otherContent.style.display = 'none';
                      }
                  }
              });
          });
      }
  });
}

function initDropupMenu() {
  const moreOptions = document.querySelector(".more-options");
  const dropupMenu = document.getElementById("dropupMenu");

  if (moreOptions) {
      moreOptions.addEventListener("click", () => {
          toggleDropupMenu(dropupMenu);
      });
  }

  // Optional: Close the menu if clicked outside
  document.addEventListener("click", (event) => {
      if (
          dropupMenu &&
          !dropupMenu.contains(event.target) &&
          !moreOptions.contains(event.target)
      ) {
          dropupMenu.style.display = "none";
      }
  });
}

function toggleDropupMenu(dropupMenu) {
  if (dropupMenu) {
      dropupMenu.style.display =
          dropupMenu.style.display === "block" ? "none" : "block";
  }
}

function initOrdersTable() {
  // Placeholder for initOrdersTable logic
  console.log("Orders table initialized.");
}
