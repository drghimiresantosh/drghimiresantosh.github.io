(function () {
  const config = window.SITE_CONFIG || {};
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  const languageToggle = document.querySelector(".language-toggle");
  const dialog = document.querySelector("#booking-dialog");
  const dialogTitle = document.querySelector("#booking-title");
  const bookingContent = document.querySelector("#booking-content");
  const closeDialog = document.querySelector(".dialog-close");
  const year = document.querySelector("#year");
  const serviceToggle = document.querySelector("#service-toggle");
  const serviceGrid = document.querySelector("#service-grid");

  if (serviceGrid && Array.isArray(window.SERVICES)) {
    for (const service of window.SERVICES) {
      const card = document.createElement("article");
      card.className = service.featured ? "service-item" : "service-item service-extra";
      if (!service.featured) card.hidden = true;

      const link = document.createElement("a");
      link.className = "service-card-link";
      link.href = `service.html?topic=${encodeURIComponent(service.id)}`;

      const icon = document.createElement("img");
      icon.className = "service-icon";
      icon.src = service.icon || `assets/service-images/${service.id}.webp`;
      icon.alt = "";
      icon.width = 44;
      icon.height = 44;
      if (!service.featured) icon.loading = "lazy";

      const title = document.createElement("h3");
      title.dataset.en = service.en.title;
      title.dataset.ne = service.ne.title;
      title.textContent = service.en.title;

      const summary = document.createElement("p");
      summary.dataset.en = service.en.summary;
      summary.dataset.ne = service.ne.summary;
      summary.textContent = service.en.summary;

      link.append(icon, title, summary);
      card.append(link);
      serviceGrid.append(card);
    }
  }
  const serviceExtras = document.querySelectorAll(".service-extra");
  const query = new URLSearchParams(window.location.search);
  const requestedLanguage = query.get("lang");
  let language = requestedLanguage === "ne" || requestedLanguage === "en"
    ? requestedLanguage
    : (localStorage.getItem("site-language") === "ne" ? "ne" : "en");

  const appointmentNames = {
    clinic: { en: "Clinic appointment", ne: "क्लिनिक अपोइन्टमेन्ट" },
    online: { en: "Online consultation", ne: "अनलाइन परामर्श" },
    followup: { en: "Patient follow-up", ne: "बिरामी फलो-अप" },
  };

  function setServicesExpanded(expanded) {
    serviceExtras.forEach((item) => { item.hidden = !expanded; });
    serviceToggle?.setAttribute("aria-expanded", String(expanded));
    const label = serviceToggle?.querySelector(".service-toggle-label");
    if (label) {
      label.textContent = expanded
        ? (language === "ne" ? "कम सेवाहरू देखाउनुहोस्" : "Show fewer services")
        : label.dataset[language];
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "ne" ? "ne" : "en";
    document.body.dataset.lang = language;
    document.querySelectorAll("[data-en][data-ne]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll("[data-en-aria-label][data-ne-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`${language}AriaLabel`]);
    });
    if (languageToggle) {
      const labels = languageToggle.querySelectorAll("span");
      labels[0].classList.toggle("active", language === "en");
      labels[2].classList.toggle("active", language === "ne");
    }
    setServicesExpanded(serviceToggle?.getAttribute("aria-expanded") === "true");
    localStorage.setItem("site-language", language);
    document.dispatchEvent(new CustomEvent("site:languagechange", { detail: { language } }));
  }

  function closeMenu() {
    nav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  function openBooking(type) {
    if (!dialog || !dialogTitle || !bookingContent) return;
    const safeType = appointmentNames[type] ? type : "clinic";
    const name = appointmentNames[safeType][language];
    const calPath = config.calLinks?.[safeType]?.trim();
    dialogTitle.textContent = name;

    if (calPath) {
      const cleanPath = calPath.replace(/^https?:\/\/(www\.)?cal\.com\//, "").replace(/^\/+|\/+$/g, "");
      const calUrl = `https://cal.com/${encodeURI(cleanPath)}?embed=true&theme=light`;
      bookingContent.innerHTML = `<iframe class="cal-frame" src="${calUrl}" title="${name}" loading="lazy" allow="camera; microphone; fullscreen; payment"></iframe>`;
    } else {
      const subject = encodeURIComponent(`${name} ${language === "ne" ? "अनुरोध" : "request"}`);
      const copy = language === "ne"
        ? "अनलाइन बुकिङ अहिले उपलब्ध छैन। अपोइन्टमेन्टका लागि फोन, ह्वाट्सएप वा इमेलबाट सम्पर्क गर्नुहोस्।"
        : "Online booking is not available yet. For an appointment, contact the clinic by phone, WhatsApp or email.";
      const note = language === "ne"
        ? "कृपया आकस्मिक वा विस्तृत स्वास्थ्य जानकारी सन्देशमा नपठाउनुहोस्।"
        : "Please do not send emergency or detailed medical information in a message.";
      const callLabel = language === "ne" ? "फोन गर्नुहोस्" : "Call";
      const emailLabel = language === "ne" ? "इमेल" : "Email";
      bookingContent.innerHTML = `
        <div class="booking-fallback">
          <h3>${name}</h3>
          <p>${copy}</p>
          <div class="fallback-actions">
            <a class="button" href="tel:${config.phoneInternational || "+9779867270022"}">${callLabel} ${config.phoneDisplay || "+977 986 727 0022"}</a>
            <a class="button button-secondary" href="https://wa.me/${config.whatsappNumber || "9779867270022"}?text=${subject}" target="_blank" rel="noopener">WhatsApp</a>
            <a class="button button-secondary" href="mailto:${config.email || "santoshghm1@gmail.com"}?subject=${subject}">${emailLabel}</a>
          </div>
          <p class="fallback-note">${note}</p>
        </div>`;
    }

    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  languageToggle?.addEventListener("click", () => setLanguage(language === "en" ? "ne" : "en"));
  serviceToggle?.addEventListener("click", () => {
    setServicesExpanded(serviceToggle.getAttribute("aria-expanded") !== "true");
  });
  document.querySelectorAll("[data-booking]").forEach((button) => {
    button.addEventListener("click", () => openBooking(button.dataset.booking));
  });
  closeDialog?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    bookingContent.innerHTML = "";
  });

  if (year) year.textContent = new Date().getFullYear();
  setLanguage(language);

  if (query.get("services") === "all") setServicesExpanded(true);

  const initialBooking = query.get("booking");
  if (appointmentNames[initialBooking]) {
    window.setTimeout(() => openBooking(initialBooking), 0);
  }
})();
