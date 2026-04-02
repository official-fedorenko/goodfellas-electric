const content = document.getElementById("content");
const navLinks = document.querySelectorAll(".nav-link");

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");

function openMenu() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-active");
}

function closeMenu() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-active");
}

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        openMenu();
    });
}

if (overlay) {
    overlay.addEventListener("click", () => {
        closeMenu();
    });
}

const pages = {
  home: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Goodfellas Electric</h1>
        <p class="page-subtitle">
          Надёжные электромонтажные работы для домов, квартир и бизнеса в Литве.
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
            Мы делаем понятный, аккуратный и безопасный электромонтаж.
            Наша цель — не просто выполнить работу, а сделать систему,
            которой удобно пользоваться и которую не придётся переделывать.
          </p>
        </div>

        <div class="card col-4">
          <h2 class="card-title">Связаться</h2>
          <p class="card-text">
            Телефон, WhatsApp, email и форма заявки будут здесь на следующем этапе.
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
          Примерная стоимость услуг. Потом подключим реальные данные.
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
        <h2 class="card-title">Пусто</h2>
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
    </div>
  `
};

function renderPage(pageName) {
  content.innerHTML = pages[pageName] || "<p color='red'>Страница не найдена</p>";
}

function setActiveLink(activeLink) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  activeLink.classList.add("active");
}

navLinks.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    e.preventDefault();

    const pageName = navItem.dataset.page;
    renderPage(pageName);

    setActiveLink(navItem);

    if (window.innerWidth < 768) {
      closeMenu();
    }
  });
});

renderPage("home");