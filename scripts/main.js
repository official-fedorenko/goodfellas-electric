const contentContainer = document.getElementById("content");
const navLinkElements = document.querySelectorAll(".nav-link");

const sidebarElement = document.getElementById("sidebar");
const menuToggleButton = document.getElementById("menuToggle");
const overlayElement = document.getElementById("overlay");

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
            Наша цель - не просто выполнить работу, а собрать систему,
            которой будет удобно пользоваться и которую не придётся переделывать.
          </p>
        </div>

        <div class="card col-4">
          <h2 class="card-title">Связаться</h2>
          <p class="card-text">
            Перейдите в раздел «Контакты», чтобы позвонить, написать в мессенджер
            или оставить заявку.
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
          <p class="card-text">Монтаж розетки - от 25 EUR</p>
          <p class="card-text">Монтаж выключателя - от 20 EUR</p>
          <p class="card-text">Сборка щита - от 150 EUR</p>
          <p class="card-text">Диагностика - от 40 EUR</p>
        </div>
      </div>
    </div>
  `,

  contacts: `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Контакты</h1>
        <p class="page-subtitle">
          Выберите удобный способ связи.
        </p>
      </div>

      <div class="card-grid">
        <div class="card card--glass col-12 contact-hero">
          <div>
            <p class="contact-eyebrow">Быстрая связь с компанией</p>
          </div>

          <div class="contact-actions">
            <a href="tel:+37060270702" class="contact-action contact-action--primary contact-action--call">
              <span class="contact-action-badge" aria-hidden="true">📞</span>
              <span class="contact-action-title">Позвонить</span>
              <span class="contact-action-meta">+370 602 70702</span>
            </a>

            <a href="https://wa.me/37066614501" target="_blank" rel="noopener noreferrer" class="contact-action contact-action--whatsapp">
              <span class="contact-action-badge" aria-hidden="true">💬</span>
              <span class="contact-action-title">WhatsApp</span>
              <span class="contact-action-meta">Откроется чат</span>
            </a>

            <a href="https://t.me/meliowar" target="_blank" rel="noopener noreferrer" class="contact-action contact-action--telegram">
              <span class="contact-action-badge" aria-hidden="true">✈</span>
              <span class="contact-action-title">Telegram</span>
              <span class="contact-action-meta">Написать в Telegram</span>
            </a>

            <a href="viber://chat?number=%2B37066614501" class="contact-action contact-action--viber">
              <span class="contact-action-badge" aria-hidden="true">◔</span>
              <span class="contact-action-title">Viber</span>
              <span class="contact-action-meta">Открыть Viber</span>
            </a>

            <a href="mailto:info@goodfellaselectric.com" class="contact-action contact-action--email">
              <span class="contact-action-badge" aria-hidden="true">✉</span>
              <span class="contact-action-title">Email</span>
              <span class="contact-action-meta">Написать email</span>
            </a>
          </div>
        </div>

        <div class="card col-6 contact-person">
          <div class="contact-person-head">
            <div class="contact-person-avatar">S</div>
            <div>
              <h2 class="card-title">Šarunas</h2>
              <p class="card-text">Основатель компании</p>
            </div>
          </div>

          <p class="card-text">Звонки, консультация и согласование работ.</p>

          <div class="contact-person-meta">
            <span class="contact-chip">Телефон: +370 602 70702</span>
            <span class="contact-chip">Email: info@goodfellaselectric.com</span>
          </div>

          <div class="contact-person-actions">
            <a href="tel:+37060270702" class="contact-inline-link contact-inline-link--call">Позвонить</a>
            <a href="mailto:info@goodfellaselectric.com?subject=Sharunas" class="contact-inline-link contact-inline-link--email">Email</a>
            <a href="https://t.me/meliowar" target="_blank" rel="noopener noreferrer" class="contact-inline-link contact-inline-link--telegram">Telegram</a>
            <a href="https://wa.me/37060270702" target="_blank" rel="noopener noreferrer" class="contact-inline-link contact-inline-link--whatsapp">WhatsApp</a>
            <a href="viber://chat?number=%2B37060270702" class="contact-inline-link contact-inline-link--viber">Viber</a>
            <a href="#contact-request" class="contact-inline-link contact-inline-link--site">Написать на сайте</a>
          </div>
        </div>

        <div class="card col-6 contact-person">
          <div class="contact-person-head">
            <div class="contact-person-avatar">R</div>
            <div>
              <h2 class="card-title">Romanas</h2>
              <p class="card-text">Технический специалист</p>
            </div>
          </div>

          <p class="card-text">Технические вопросы.</p>

          <div class="contact-person-meta">
            <span class="contact-chip">Телефон: +370 666 14501</span>
            <span class="contact-chip">Email: info@goodfellaselectric.com</span>
          </div>

          <div class="contact-person-actions">
            <a href="tel:+37066614501" class="contact-inline-link contact-inline-link--call">Позвонить</a>
            <a href="mailto:info@goodfellaselectric.com?subject=Romanas" class="contact-inline-link contact-inline-link--email">Email</a>
            <a href="https://t.me/meliowar" target="_blank" rel="noopener noreferrer" class="contact-inline-link contact-inline-link--telegram">Telegram</a>
            <a href="https://wa.me/37066614501" target="_blank" rel="noopener noreferrer" class="contact-inline-link contact-inline-link--whatsapp">WhatsApp</a>
            <a href="viber://chat?number=%2B37066614501" class="contact-inline-link contact-inline-link--viber">Viber</a>
            <a href="#contact-request" class="contact-inline-link contact-inline-link--site">Написать на сайте</a>
          </div>
        </div>

        <div class="card col-12 contact-form-card" id="contact-request">
          <div class="contact-form-header">
            <h2 class="card-title">Оставить заявку</h2>
            <p class="card-text">Коротко опишите задачу и оставьте номер для связи.</p>
          </div>

          <form id="contactForm" class="contact-form">
            <label class="contact-field">
              <span class="contact-label">Имя</span>
              <input type="text" id="name" name="name" placeholder="Как к вам обращаться" required>
            </label>

            <label class="contact-field">
              <span class="contact-label">Телефон</span>
              <input type="tel" id="phone" name="phone" placeholder="+370..." required>
            </label>

            <label class="contact-field contact-field--full">
              <span class="contact-label">Укажите причину обращения</span>
              <textarea id="message" name="message" placeholder="Например: нужна замена проводки, собрать щит, найти неисправность"></textarea>
            </label>

            <button type="submit" class="contact-submit">Отправить заявку</button>
          </form>
        </div>
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

function renderPage(pageKey) {
  const requestedPageTemplate = pages[pageKey];

  if (!requestedPageTemplate) {
    console.warn(`Page "${pageKey}" was not found. Falling back to home.`);
    contentContainer.innerHTML = pages.home;
    return;
  }

  contentContainer.innerHTML = requestedPageTemplate;
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

if (overlayElement) {
  overlayElement.addEventListener("click", closeMenu);
}

navLinkElements.forEach((linkElement) => {
  linkElement.addEventListener("click", (event) => {
    event.preventDefault();

    const pageKey = linkElement.dataset.page;

    setActiveLink(linkElement);
    renderPage(pageKey);

    if (window.innerWidth <= 768) {
      closeMenu();
    }
  });
});

renderPage("contacts");
