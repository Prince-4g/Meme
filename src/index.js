// const sideMenu = document.querySelector('aside');
// const menuBtn = document.getElementById('menu-btn');
// const closeBtn = document.getElementById('close-btn');

// const darkMode = document.querySelector('.dark-mode');

// menuBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// });

// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variables');
//     darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
//     darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
// })

// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `
//         <td>${order.userName}</td>
//         <td>${order.Operation}</td>
//         <td>${order.paymentAmount}</td>
//         <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
//         <td class="primary">Details</td>
//     `;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr);
// });

// document.querySelectorAll('.accordion-header').forEach((header) => {
//     header.addEventListener('click', () => {
//         const content = header.nextElementSibling;
//         content.style.display = content.style.display === 'block' ? 'none' : 'block';
//         document.querySelectorAll('.accordion-content').forEach((otherContent) => {
//             if (otherContent !== content) {
//                 otherContent.style.display = 'none';
//             }
//         });
//     });
// });

// function toggleDropupMenu() {
//     const dropupMenu = document.getElementById('dropupMenu');
//     dropupMenu.style.display = dropupMenu.style.display === 'block' ? 'none' : 'block';
// }
// document.addEventListener('click', (event) => {
//     const dropupMenu = document.getElementById('dropupMenu');
//     const moreOptions = document.querySelector('.more-options');

//     if (dropupMenu && moreOptions && !dropupMenu.contains(event.target) && !moreOptions.contains(event.target)) {
//         dropupMenu.style.display = 'none';
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  initSideMenu();
  initDarkModeToggle();
  initOrdersTable();
  initAccordion();
  initDropupMenu();
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

function initOrdersTable() {
    // Orders array should be populated dynamically or passed from server-side
    const Orders = [
      {
        UserName: 'Username',
        Operation: 'Deposit',
        paymentAmount: '1,000',
        Status: 'Pending'
      },
      {
        UserName: 'Username',
        Operation: 'Withdrawal',
        paymentAmount: '500',
        status: 'Declined'
      },
      {
        UserName: 'Username',
        Operation: 'Deposit',
        paymentAmount: '5,000',
        status: 'Approved'
      },
      // Add more orders as needed
    ];
  
    // Inject CSS for button styling
    const style = document.createElement('style');
    style.innerHTML = `
      .table td button {
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
      }
      .table td button.btn-primary {
        background-color: #007bff;
        color: white;
        border: 1px solid #007bff;
      }
      .table td button.btn-primary:hover {
        background-color: #0056b3;
        border-color: #0056b3;
        transform: translateY(-2px);
      }
      .table td button.btn-primary:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
      }
      .table td button.btn-primary:disabled {
        background-color: #d6d6d6;
        color: #888888;
        border-color: #d6d6d6;
        cursor: not-allowed;
      }
    `;
    document.head.appendChild(style); // Add the style to the page
  
    const tbody = document.querySelector("table tbody");
    if (tbody && Orders.length > 0) {
      Orders.forEach((order) => {
        // Create a new table row
        const tr = document.createElement("tr");
  
        // Determine the class for the order status
        let statusClass = "primary"; // Default class for other statuses
        switch (order.status) {
          case "Declined":
            statusClass = "danger"; // Red for Declined
            break;
          case "Pending":
            statusClass = "warning"; // Yellow for Pending
            break;
          case "Approved":
            statusClass = "success"; // Green for Approved
            break;
          default:
            statusClass = "primary"; // Default class if status is unknown
        }
  
        // Build the table row content
        const trContent = `
          <td>${order.UserName}</td>
          <td>${order.Operation}</td>
          <td>${order.paymentAmount}</td>
          <td class="${statusClass}">${order.status}</td>
          <td><button class="btn btn-sm btn-primary">Details</button></td>
        `;
  
        // Set the row content and append it to the table body
        tr.innerHTML = trContent;
        tbody.appendChild(tr);
      });
    }
  }
  
  
  

function initAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";

      // Optional: Close other open accordions
      document
        .querySelectorAll(".accordion-content")
        .forEach((otherContent) => {
          if (otherContent !== content) {
            otherContent.style.display = "none";
          }
        });
    });
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
