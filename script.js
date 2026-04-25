(function () {
  "use strict";

  function createLightbox() {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("data-lightbox-modal", "true");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML =
      '<div class="lightbox__inner" role="dialog" aria-modal="true" aria-label="Image preview">' +
      '<button type="button" class="lightbox__close" data-lightbox-close aria-label="Close image preview">&times;</button>' +
      '<img class="lightbox__image" data-lightbox-image alt="Expanded project image">' +
      "</div>";
    document.body.appendChild(lightbox);
    return lightbox;
  }

  function initLightbox() {
    var triggerLinks = Array.prototype.slice.call(
      document.querySelectorAll("a[data-lightbox]")
    );

    if (triggerLinks.length === 0) {
      return;
    }

    var lightbox = document.querySelector("[data-lightbox-modal]");
    if (!lightbox) {
      lightbox = createLightbox();
    }

    var lightboxImage = lightbox.querySelector("[data-lightbox-image]");
    var closeButton = lightbox.querySelector("[data-lightbox-close]");

    if (!lightboxImage || !closeButton) {
      return;
    }

    function openLightbox(imageUrl, altText) {
      lightboxImage.src = imageUrl;
      lightboxImage.alt = altText || "Expanded project image";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeButton.focus();
    }

    function closeLightbox() {
      if (!lightbox.classList.contains("is-open")) {
        return;
      }
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.removeAttribute("src");
      document.body.style.overflow = "";
    }

    triggerLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var imageUrl = link.getAttribute("href");
        var previewImage = link.querySelector("img");
        var altText = previewImage ? previewImage.getAttribute("alt") : "";

        if (!imageUrl) {
          return;
        }

        event.preventDefault();
        openLightbox(imageUrl, altText);
      });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initLightbox);
})();

(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme";
  var VALID_THEMES = { dark: true, light: true };

  function normalizeTheme(theme) {
    return VALID_THEMES[theme] ? theme : "dark";
  }

  function readStoredTheme() {
    try {
      return normalizeTheme(localStorage.getItem(THEME_KEY));
    } catch (error) {
      return "dark";
    }
  }

  function writeStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      return;
    }
  }

  function getCurrentTheme() {
    return normalizeTheme(document.documentElement.dataset.theme);
  }

  function updateToggleText(theme) {
    var nextLabel = theme === "light" ? "Dark Mode" : "Light Mode";
    var toggles = document.querySelectorAll("[data-theme-toggle]");

    toggles.forEach(function (toggle) {
      toggle.textContent = nextLabel;
      toggle.setAttribute("aria-label", nextLabel);
    });
  }

  function applyTheme(theme) {
    var resolvedTheme = normalizeTheme(theme);
    document.documentElement.dataset.theme = resolvedTheme;
    writeStoredTheme(resolvedTheme);
    updateToggleText(resolvedTheme);
    return resolvedTheme;
  }

  function initThemeToggle() {
    var initialTheme = readStoredTheme();
    applyTheme(initialTheme);

    var toggles = document.querySelectorAll("[data-theme-toggle]");
    if (toggles.length === 0) {
      return;
    }

    toggles.forEach(function (toggle) {
      if (toggle.dataset.themeToggleBound === "true") {
        return;
      }

      toggle.dataset.themeToggleBound = "true";
      toggle.addEventListener("click", function () {
        var currentTheme = getCurrentTheme();
        applyTheme(currentTheme === "light" ? "dark" : "light");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
