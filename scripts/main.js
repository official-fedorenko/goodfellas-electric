const contentContainer = document.getElementById("content");
const navLinkElements = document.querySelectorAll(".nav-link");

const sidebarElement = document.getElementById("sidebar");
const menuToggleButton = document.getElementById("menuToggle");
const overlayElement = document.getElementById("overlay");
const appElement = document.querySelector(".app");
const sidebarCollapseButton = document.getElementById("sidebarCollapseToggle");
const desktopMenuToggleButton = document.getElementById("desktopMenuToggle");

const desktopMediaQuery = window.matchMedia("(min-width: 769px)");
const DESKTOP_SIDEBAR_STORAGE_KEY = "goodfellas-desktop-sidebar-collapsed";

function isDesktopViewport() {
  return desktopMediaQuery.matches;
}

function syncDesktopToggleLabels(isCollapsed) {
  if (sidebarCollapseButton) {
    sidebarCollapseButton.setAttribute("aria-expanded", String(!isCollapsed));
    sidebarCollapseButton.setAttribute(
      "aria-label",
      isCollapsed ? "Развернуть боковое меню" : "Свернуть боковое меню",
    );
    sidebarCollapseButton.innerHTML = `<span aria-hidden="true">${isCollapsed ? "→" : "←"}</span>`;
  }

  if (desktopMenuToggleButton) {
    desktopMenuToggleButton.setAttribute("aria-expanded", String(!isCollapsed));
  }
}

function setDesktopSidebarCollapsed(isCollapsed) {
  if (!appElement) return;

  appElement.classList.toggle("sidebar-collapsed", isCollapsed);
  syncDesktopToggleLabels(isCollapsed);
  window.localStorage.setItem(DESKTOP_SIDEBAR_STORAGE_KEY, String(isCollapsed));
}

function applySidebarMode() {
  if (!appElement) return;

  if (isDesktopViewport()) {
    closeMenu();
    const savedState = window.localStorage.getItem(DESKTOP_SIDEBAR_STORAGE_KEY) === "true";
    setDesktopSidebarCollapsed(savedState);
    return;
  }

  appElement.classList.remove("sidebar-collapsed");
  syncDesktopToggleLabels(false);
}

function setActiveLink(activeLinkElement) {
  navLinkElements.forEach((linkElement) => {
    linkElement.classList.remove("active");
  });

  activeLinkElement.classList.add("active");
}

function openMenu() {
  if (!sidebarElement || !overlayElement) return;

  sidebarElement.classList.add("is-open");
  overlayElement.classList.add("is-visible");
}

function closeMenu() {
  if (!sidebarElement || !overlayElement) return;

  sidebarElement.classList.remove("is-open");
  overlayElement.classList.remove("is-visible");
}

if (menuToggleButton) {
  menuToggleButton.addEventListener("click", openMenu);
}

if (sidebarCollapseButton) {
  sidebarCollapseButton.addEventListener("click", () => {
    if (!isDesktopViewport() || !appElement) return;

    setDesktopSidebarCollapsed(!appElement.classList.contains("sidebar-collapsed"));
  });
}

if (desktopMenuToggleButton) {
  desktopMenuToggleButton.addEventListener("click", () => {
    if (!isDesktopViewport()) return;

    setDesktopSidebarCollapsed(false);
  });
}

if (overlayElement) {
  overlayElement.addEventListener("click", closeMenu);
}

navLinkElements.forEach((linkElement) => {
  linkElement.addEventListener("click", () => {
    const page = linkElement.dataset.page;
    setActiveLink(linkElement);
    if (!isDesktopViewport()) {
      closeMenu();
    }
    loadPage(page);
  });
});

if (typeof desktopMediaQuery.addEventListener === "function") {
  desktopMediaQuery.addEventListener("change", applySidebarMode);
} else if (typeof desktopMediaQuery.addListener === "function") {
  desktopMediaQuery.addListener(applySidebarMode);
}

async function loadPage(pageKey) {
  const response = await fetch(`pages/${pageKey}.html`);

  if (!response.ok) {
    console.error(`Failed to load page "${pageKey}". Status: ${response.status}`);
    contentContainer.innerHTML = `<div class="page"><h1>Ошибка загрузки</h1><p>Не удалось загрузить страницу "${pageKey}". Попробуйте позже.</p></div>`;
    return;
  }

  const pageContent = await response.text();
  contentContainer.innerHTML = pageContent;
}


applySidebarMode();
loadPage("home");


