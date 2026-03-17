document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (!tabButtons.length || !tabPanels.length) return;

  function activateTab(targetTab) {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === targetTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive);
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === `tab-${targetTab}`;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  }

  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", button.classList.contains("active"));

    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;
      activateTab(targetTab);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const targetTab = button.dataset.tab;
        activateTab(targetTab);
      }
    });
  });

  const initialActiveButton =
    document.querySelector(".tab-button.active") || tabButtons[0];

  if (initialActiveButton) {
    activateTab(initialActiveButton.dataset.tab);
  }
});