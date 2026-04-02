/* =========================
   DOM ELEMENTS
   ========================= */

// Контейнер, в который будем рендерить страницы
const contentContainer = document.getElementById("content");

// Все ссылки меню
const navLinkElements = document.querySelectorAll(".nav-link");

// Sidebar для мобильного меню
const sidebarElement = document.getElementById("sidebar");

// Кнопка burger
const menuToggleButton = document.getElementById("menuToggle");

// Затемнение фона при открытом меню
const overlayElement = document.getElementById("overlay");

/* =========================
   PAGE TEMPLATES
   ========================= */

// Здесь храним HTML-шаблоны страниц
const pages = {
  home: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Goodfellas Electric</h1>
        <p class="page-subtitle">
          Надёжные электромонтажные работы для дома, квартиры и бизнеса.
        </p>
      </div>

      <div class="card-grid">
        <div class="card card--glass col-4">
          <h2 class="card-title">Быстрый выезд</h2>
          <p class="card-text">
            Оперативный выезд на объект и первичная оценка работ.
          </p>
        </div>

        <div class="card col-4">
          <h2 class="card-title">Частные объекты</h2>
          <p class="card-text">
            Квартиры, дома, гаражи, замена проводки и монтаж щитов.
          </p>
        </div>

        <div class="card col-4">
          <h2 class="card-title">Коммерческие объекты</h2>
          <p class="card-text">
            Магазины, офисы, помещения, обслуживание и монтаж.
          </p>
        </div>

        <div class="card col-8">
          <h2 class="card-title">О компании</h2>
          <p class="card-text">
            Мы делаем аккуратный, безопасный и понятный электромонтаж.
            Наша цель — не просто выполнить работу, а собрать систему,
            которой будет удобно пользоваться и которую не придётся переделывать.
          </p>
        </div>

        <div class="card col-4">
          <h2 class="card-title">Связаться</h2>
          <p class="card-text">
            Телефон, WhatsApp, email и форма заявки появятся здесь на следующем этапе.
          </p>
        </div>
      </div>
    </div>
  `,

  services: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Услуги</h1>
        <p class="page-subtitle">
          Основные направления работ Goodfellas Electric.
        </p>
      </div>

      <div class="card-grid">
        <div class="card col-6">
          <h2 class="card-title">Электромонтаж под ключ</h2>
          <p class="card-text">
            Разводка кабеля, монтаж подрозетников, сборка и подключение.
          </p>
        </div>

        <div class="card col-6">
          <h2 class="card-title">Щиты и автоматика</h2>
          <p class="card-text">
            Сборка, замена и модернизация электрических щитов.
          </p>
        </div>

        <div class="card col-6">
          <h2 class="card-title">Поиск неисправностей</h2>
          <p class="card-text">
            Диагностика, устранение коротких замыканий и проблем с линиями.
          </p>
        </div>

        <div class="card col-6">
          <h2 class="card-title">Освещение и розетки</h2>
          <p class="card-text">
            Монтаж светильников, выключателей, розеток и отдельных линий.
          </p>
        </div>
      </div>
    </div>
  `,

  prices: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Цены</h1>
        <p class="page-subtitle">
          Примерная стоимость услуг. Позже подключим реальные данные.
        </p>
      </div>

      <div class="card-grid">
        <div class="card col-12">
          <h2 class="card-title">Пример прайса</h2>
          <p class="card-text">Монтаж розетки — от 25€</p>
          <p class="card-text">Монтаж выключателя — от 20€</p>
          <p class="card-text">Сборка щита — от 150€</p>
          <p class="card-text">Диагностика — от 40€</p>
        </div>
      </div>
    </div>
  `,

  requests: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Заявки</h1>
        <p class="page-subtitle">
          Здесь позже будет список входящих заявок из базы данных.
        </p>
      </div>

      <div class="card">
        <h2 class="card-title">Раздел в разработке</h2>
        <p class="card-text">
          На этом этапе мы готовим интерфейс. Позже подключим backend и SQLite.
        </p>
      </div>
    </div>
  `,

  clients: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Клиенты</h1>
        <p class="page-subtitle">
          Здесь будет база клиентов, поиск и заметки.
        </p>
      </div>

      <div class="card">
        <h2 class="card-title">Раздел в разработке</h2>
        <p class="card-text">
          После заявок перейдём к клиентской базе.
        </p>
      </div>
    </div>
  `,

  settings: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Настройки</h1>
        <p class="page-subtitle">
          Здесь будут параметры системы и аккаунта.
        </p>
      </div>

      <div class="card">
        <h2 class="card-title">Пока заглушка</h2>
        <p class="card-text">
          Позже добавим реальные настройки.
        </p>
      </div>
    </div>
  `,

  logout: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Выход</h1>
        <p class="page-subtitle">
          Здесь позже будет логика завершения сессии.
        </p>
      </div>

      <div class="card">
        <h2 class="card-title">Пока заглушка</h2>
        <p class="card-text">
          На текущем этапе это только интерфейс без авторизации.
        </p>
      </div>
    </div>
  `
};

/* =========================
   RENDER FUNCTIONS
   ========================= */

// Рендер страницы по ключу
function renderPage(pageKey) {
  const requestedPageTemplate = pages[pageKey];

  if (!requestedPageTemplate) {
    console.warn(`Страница "${pageKey}" не найдена. Показываем главную.`);
    contentContainer.innerHTML = pages.home;
    return;
  }

  contentContainer.innerHTML = requestedPageTemplate;
}

// Устанавливаем активный пункт меню
function setActiveLink(activeLinkElement) {
  navLinkElements.forEach((linkElement) => {
    linkElement.classList.remove("active");
  });

  activeLinkElement.classList.add("active");
}

/* =========================
   MOBILE MENU FUNCTIONS
   ========================= */

// Открываем sidebar на мобильных
function openMenu() {
  if (!sidebarElement || !overlayElement) {
    return;
  }

  sidebarElement.classList.add("is-open");
  overlayElement.classList.add("is-visible");
}

// Закрываем sidebar на мобильных
function closeMenu() {
  if (!sidebarElement || !overlayElement) {
    return;
  }

  sidebarElement.classList.remove("is-open");
  overlayElement.classList.remove("is-visible");
}

/* =========================
   EVENT LISTENERS
   ========================= */

// Назначаем обработчик клика для каждой ссылки меню
navLinkElements.forEach((linkElement) => {
  linkElement.addEventListener("click", (event) => {
    event.preventDefault();

    const pageKey = linkElement.dataset.page;

    setActiveLink(linkElement);
    renderPage(pageKey);

    // На мобильных после выбора пункта меню закрываем sidebar
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  });
});

// Открытие меню по burger-кнопке
if (menuToggleButton) {
  menuToggleButton.addEventListener("click", () => {
    openMenu();
  });
}

// Закрытие меню по клику на overlay
if (overlayElement) {
  overlayElement.addEventListener("click", () => {
    closeMenu();
  });
}

/* =========================
   INITIAL RENDER
   ========================= */

// Показываем главную страницу сразу при загрузке
renderPage("home");