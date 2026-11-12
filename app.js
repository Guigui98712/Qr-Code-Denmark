(function () {
  var andar = document.body.getAttribute("data-andar");
  var links = (andar && LINKS[andar]) || {};
  document.querySelectorAll("[data-projeto]").forEach(function (a) {
    var url = (links[a.getAttribute("data-projeto")] || "").trim();
    if (url) {
      a.href = url;
    } else {
      a.removeAttribute("href");
      a.removeAttribute("target");
      a.setAttribute("aria-disabled", "true");
      a.classList.add("indisponivel");
      var s = a.querySelector("small");
      if (s) s.textContent = "Projeto ainda não disponível";
    }
  });
})();
